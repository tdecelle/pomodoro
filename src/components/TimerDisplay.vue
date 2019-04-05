<template>
    <div class="display">
        <div class="circle">
            <p v-if="this.hasTime()">{{ minutes }}:{{ seconds }}</p>
            <p v-else>25:00</p>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    computed: {
        minutes() {
            return moment.duration(this.$store.state.time).minutes();
        },
        seconds() {
            let seconds = moment.duration(this.$store.state.time).seconds();
            return seconds < 10 ? '0' + seconds : seconds;
        }
    },
    methods: {
        hasTime() {
            return (this.seconds != 0 || this.minutes != 0);
        }
    }
}
</script>

<style scoped>
.display {
    padding: 40px;
}

.circle {
    width: 240px;
    line-height: 240px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid white;
    color: white;
    
    font: 64px Arial, sans-serif;

    display: inline-block;
}
</style>