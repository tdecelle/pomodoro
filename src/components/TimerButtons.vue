<template>
    <div class="timer-buttons">
        <Button v-if="this.isNotPlaying()" title="Start Session" @onClick="play()"></Button>
        <span v-else-if="this.isPaused()">
            <Button title="Resume" @onClick="play()"></Button>
            <Button title="End Session" @onClick="end()"></Button>
        </span>
        <Button v-if="this.isPlaying()" title="Pause" v-on:onClick="pause()"></Button>
    </div>
</template>

<script>
import Button from './Button.vue';

export default{
    components: {
        Button
    },
    methods: {
        isNotPlaying() {
            return this.$store.state.timerState === this.$store.state.EnumState.NOT_PLAYING;
        },
        isPlaying() {
            return this.$store.state.timerState === this.$store.state.EnumState.PLAYING;
        },
        isPaused() {
            return this.$store.state.timerState === this.$store.state.EnumState.PAUSED;
        },
        play() {
            this.$store.dispatch('play');
        },
        pause() {
            this.$store.commit('pause');
        },
        end() {
            this.$store.commit('end');
        }
    },
    data() {
        return {
            
        };
    },
}
</script>

<style scoped>
.timer-buttons {
    padding-bottom: 100px;
}
</style>