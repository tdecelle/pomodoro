<template>
    <div>
        <!-- <audio src="../assets/rain-03.mp3" type="audio/mpeg" id="audio"></audio> -->
        <button @onclick="play()">Play</button>
        <button @onclick.prevent="pause()">Pause</button>
    </div>
</template>

<script>
    export default {
        methods: {
            play() {
                this.$data.audio.play();
                this.$data.audio2.currentTime = 5;
                this.$data.audio2.play();
            },
            pause() {
                this.$data.audio.pause();
                <!-- this.$data.audio2.pause(); -->
            },
        },
        data() {
            return {
                audio: new Audio(require('../assets/rain-03.mp3')),
                audio2: new Audio(require('../assets/rain-03.mp3')),
            }
        }
    }
</script>

<style scoped>

</style>
