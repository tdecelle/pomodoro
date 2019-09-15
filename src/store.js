import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    EnumState: {
      NOT_PLAYING: 1,
      PLAYING: 2,
      PAUSED: 3,
    },
    EnumPomodoroState: {
      WORK: 1,
      SHORT_BREAK: 2,
      LONG_Break: 3,
    },
    pomodoroState: 1,
    workTicks: 0,
    timerState: 1,
    time: null,
    interval: null,
    audio: new Audio(require('./assets/rain-03.mp3')),
    audio2: new Audio(require('./assets/rain-03.mp3')),
  },
  mutations: {
    play: state => {
      if (state.time == null) {
        let start = null;
        if (state.pomodoroState == state.EnumPomodoroState.WORK) {
          start = moment().add(24, 'm'). add(59, 's');
          state.workTicks++;
        }
        else if (state.pomodoroState == state.EnumPomodoroState.SHORT_BREAK)
          start = moment().add(5, 'm');
        else
          start = moment().add(15, 'm');

        state.time = moment.duration((start.unix() - moment().unix()) * 1000, 'milliseconds');
      }

      state.timerState = state.EnumState.PLAYING;
    },
    pause: state => {
      state.timerState = state.EnumState.PAUSED;
      clearInterval(state.interval);
      state.audio.pause();
      state.audio2.pause();
    },
    end: state => {
      state.timerState = state.EnumState.NOT_PLAYING;
      state.time = null;
      clearInterval(state.interval);
      state.audio.pause();
      state.audio2.pause();
      state.audio.currentTime = 0;
      state.audio2.currentTime = 5;
    },
    setInterval: (state, interval) => {
      state.interval = interval;
    },
    updateTime: state => {
      state.time = moment.duration(state.time.asMilliseconds() - 1000, 'milliseconds');
    },
    changePomodoro: state => {
      if (state.pomodoroState == state.EnumPomodoroState.SHORT_BREAK || state.pomodoroState == state.EnumPomodoroState.LONG_Break)
        state.pomodoroState = state.EnumPomodoroState.WORK;
      else if (state.pomodoroState == state.EnumPomodoroState.WORK && state.workTicks % 4 != 0)
        state.pomodoroState = state.EnumPomodoroState.SHORT_BREAK
      else
        state.pomodoroState = state.EnumPomodoroState.LONG_Break
    },
  },
  actions: {
    play: context => {
      context.commit('play');
      let interval = setInterval(function() {
        context.commit('updateTime');

        if (context.state.time <= 0) {
          context.commit('end');
          context.commit('changePomodoro');
          context.dispatch('play');
        }

      }, 1000);

      if (context.state.pomodoroState == context.state.EnumPomodoroState.WORK) {
        context.state.audio.addEventListener('timeupdate', function() {
          var buffer = 2;
          if(this.currentTime > this.duration - buffer){
              this.currentTime = .5;
              this.play();
          }
        }, false);

        context.state.audio2.addEventListener('timeupdate', function() {
          var buffer = 2;
          if(this.currentTime > this.duration - buffer) {
              this.currentTime = .5;
              this.play();
          }
        }, false);

        context.state.audio.play();
        context.state.audio2.currentTime = 5;
        context.state.audio2.play();
      }

      context.commit('setInterval', interval);
    }
  }
})
