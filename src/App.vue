<template>
  <div id="app">
    <timer-display/>
    <timer-buttons/>
  </div>
</template>

<script>
import TimerButtons from './components/TimerButtons.vue'
import TimerDisplay from './components/TimerDisplay.vue'

export default {
  name: 'app',
  components: {
    TimerButtons,
    TimerDisplay,
  },
  methods: {
    isPlaying() {
      return (this.$store.state.timerState != this.$store.state.EnumState.NOT_PLAYING);
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

body {
  position: relative;
  background: url('./assets/intro-1600.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
