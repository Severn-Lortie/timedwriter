<template>
  <div>
    <input 
    :type="hidden ? 'password' : 'text'" 
    v-model="newPromptText" 
    class="input" 
    :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      promptText: ''
    }
  },
  computed: {
    newPromptText: {
      get() {
        return this.promptText;
      },
      set(text) {
        this.promptText = text;
        this.$emit('text-updated', this.promptText);
      }
    }
  },

  props: {
    placeholder: {
      type: String
    },
    hidden: {
      type: Boolean
    }
  }

};
</script>

<style scoped>
.input {
    outline: none;
    border: none;
    border-bottom: 2px solid rgb(232, 232, 234);
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    width: 50%;
}
</style>