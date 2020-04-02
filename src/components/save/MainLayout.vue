<template>
<div class="center-in-screen">
    <end-message>
        <app-button text="Save" @button-clicked="saveText()"></app-button>
    </end-message>
</div>
</template>

<script>
import { saveAs } from 'file-saver';

export default {
    components: {
        AppButton: () => import('../Button'),
        EndMessage: () => import('./EndMessage')
    },
    methods: {
        saveText() {
            const blob = new Blob([this.$store.state.writingResult], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "Your Work.txt");
        }
    }
}
</script>

<style scoped>
.center-in-screen {
    position: absolute;
    top: 40vh;
    transform: translateX(-50%);
    left: 50vw;
}
</style>
