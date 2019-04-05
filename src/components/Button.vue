<template>
    <button @click="$emit('onClick')">{{ title }}</button>
</template>

<script>
    export default {
        props: {
            title: String,
            onClick: Function,
        }
    }
</script>

<style scoped>
button {
    color: white;
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border-style: solid;
    border-color: white;
    border-radius: 25px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 10px;
    font-size: 16px
}
</style>