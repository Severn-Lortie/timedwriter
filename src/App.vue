<template>
  <div id="app">
    <transition
    name="fade"
    mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style>

/* App font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

/* Remove default page paddings */
.html, body {
  margin: 0px;
  padding: 0px;
  overflow:hidden;
  -webkit-overflow:hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


</style>
