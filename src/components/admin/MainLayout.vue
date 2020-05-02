<template>
  <div class="top-margin standard-font">
     <!-- Main content slot -->
     <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.top-margin {
    margin-top: 10vh;
    text-align: center;
}
.spaced {
    margin-bottom: 2vh;
}

.standard-font {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
</style>