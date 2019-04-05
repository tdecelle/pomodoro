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
                console.log(typeof(this.$data.audio));
                this.$data.audio.play();
            },
            pause() {
                this.$data.audio.pause();
            },
        },
        data() {
            return {
                audio: new Audio(require('../assets/rain-03.mp3')),
            }
        }
    }
</script>

<style scoped>

</style>