<template>
<div class="box">

    <div class="prompt">
        {{prompt}}
    </div>
    <textarea class="story-input" placeholder="Type here..." v-model="writingResult" v-if="allowInput"></textarea>
    <div v-else>

        <!-- for the start button -->

        <div class="button-position">
            <slot></slot>
        </div>

        <div class="subtitle"> When the water fills the screen, 7 minutes have passed.</div>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        prompt() {
            return this.$store.state.prompt;
        },
        allowInput() {
            return this.$store.state.writing;
        },
        writingResult: {
            get() {
                return this.$store.state.writingResult;
            },
            set(text) {
                this.$store.commit('updateWriting', text);
            }
        }
    }
}
</script>

<style scoped>
.button-position {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
}

.subtitle {
    bottom: 0;
    margin-bottom: 24px;
    right: 0;
    left: 0;
    margin-top: 24px;
    font-size: 20px;
    position: absolute;
    color: rgb(132, 132, 134);
}

.story-input {
    border: 0px;
    width: 90%;
    height: 68%;
    margin-top: 24px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
}

 @media (min-width: 1800px) { 
     .story-input {
        height: 80%;
     }
  }

.prompt {
    margin-top: 24px;
}

/* should be applied to root element from Home.vue */
.box {
    position: absolute;
    background: white;
    width: 70vw;
    height: 60vh;
    z-index: 10;
    left: 15vw;
    top: 15vh;
    text-align: center;
    border: 10px solid #E8E8EA;
    border-radius: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    ;
}
</style>
