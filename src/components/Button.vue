<template>
    <button class="btn" @click="emitEvent()">{{text}}</button>
</template>

<script>
export default {
    props: {
        text: String
    },
    methods: {
        emitEvent() {
            this.$emit('button-clicked');
        }
    }
}
</script>

<style scoped>
.btn {
    border: none;
    background: rgb(232, 232, 234);
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    border-radius: 4px;
    padding: 12px;
    outline: none;
    cursor: pointer;
}

.btn:hover {
    background: rgb(206, 206, 208);
}
</style>
