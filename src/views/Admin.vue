<template>
  <div class="positioning">
    <main-layout>
        <text-field 
        class="spaced" 
        placeholder="Enter the new prompt here"
        @text-updated="updateText"
        />
        <app-button text="Save" @button-clicked="updatePrompt()"></app-button>
        <div v-if="updated">
          Prompt changed.
        </div>
    </main-layout>
  </div>
</template>

<script>
export default {
    data() {
      return {
        updated: false,
        text: ''
      }
    },
    components: {
        mainLayout: () => import('../components/admin/MainLayout'),
        textField: () => import('../components/TextField'),
        appButton: () => import('../components/Button')
    },
    methods: {
      updateText(text) {
        this.text = text;
      },
      updatePrompt() {
        this.$store.dispatch('updatePrompt', this.text);
        this.updated = true;
      }
    }

}
</script>
