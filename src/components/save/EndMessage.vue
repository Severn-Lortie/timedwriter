<template>
  <div>
      <div class="text-styling">
          Thanks for writing! Click below to save your work as a text file.
      </div>
        <!-- Button slot -->
        <div class="save-button">
            <slot></slot>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .text-styling {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        text-align: center;
    }

    .save-button {
        position: absolute;
        left: 50%;
        margin-top: 12px;
        transform: translateX(-50%);
    }

</style>