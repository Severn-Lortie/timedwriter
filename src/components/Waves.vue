<template>
  <div
        class="header"
        :class="animation"
    >
        <!--Waves Container-->
        <div>
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g class="parallax">
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="0"
                        fill="rgba(255,255,255,0.7"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(255,255,255,0.5)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.3)"
                    />
                    <use
                        xlink:href="#gentle-wave"
                        x="48"
                        y="7"
                        fill="#FFF"
                    />
                </g>
            </svg>
        </div>
        <div v-if="!fillUp" style="z-index: 20; position: absolute; color: black; font-family: 'Roboto'; left: 50vw; transform: translateX(-50%); top: 50%;">Going for a swim, eh?</div>
    </div>
</template>

<script>
export default {
    computed: {
        fillUp() {
            return this.$store.state.writing;
        },
        animation() {
            return {
                animated: this.fillUp,
                static: !this.fillUp
            }
        }
    }
}
</script>

<style scoped>

.static {
    transform: translate3d(0, 100vh, 0);
}

.animated {
    animation: fill-up 60s;
}

.header {
    text-align: center;
    position: relative;
    color: white;
    width: 100%;
    height: 100vh;
    background: white;
}

.waves {
    height: 100px;
    width: 100%;
    position: absolute;
    top: -100px;
    right: 0px;
}

/* Animation */

.parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

.parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        /* 85px */
        transform: translate3d(85px, 0, 0);
    }
}

@keyframes fill-up {
    0% {
        transform: translate3d(0, 100vh, 0)
    }

    100% {
        transform: translate3d(0, 100, 0)
    }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
    .waves {
        height: 40px;
        top: -40px;
    }
}
</style>