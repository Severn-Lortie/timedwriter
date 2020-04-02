<template>
<div class="sky">

    <input-box v-if="supported">
        <app-button
            @button-clicked="startWriting()"
            text="Start Writing"
        />
    </input-box>
    <div v-else>
        Uh oh, it looks like your browser does not support file saving. Please upgrade to a newer version.
    </div>
    <waves />
    
</div>
</template>

<script>
export default {

    components: {
        Waves: () => import('../components/Waves'),
        InputBox: () => import('../components/InputBox'),
        AppButton: () => import('../components/Button')
    },

    data() {
        return {
            writing: false,
            time: 1, // in minutes
            supported: true
        }
    },

    methods: {
        startWriting() {
            this.$store.commit('updateWritingState', true)
            setTimeout(() => {

                this.$router.push('/timeup');

            }, this.time * 60 * 1000)
        }
    },
    created() {
        try {
            const fileSaverSupported = !!new Blob; // eslint-disable-line
            this.supported = true;
        } catch (e) {
            this.supported = false;
            console.error('It does not look like your browser supports file saving, please update.')
        }
    }

}
</script>

<style scoped>
.sky {
    background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);
    position: relative;
}
</style>
