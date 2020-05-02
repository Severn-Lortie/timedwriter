<template>
  <div class="positioning">
      <main-layout/>
  </div>
</template>

<script>
export default {
    components: {
        MainLayout: () => import('../components/save/MainLayout')
    }
}
</script>

<style scoped>
.positioning {
    position: relative; 
}
</style>