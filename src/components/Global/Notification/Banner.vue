<script setup>
defineProps(["icon", "color", "content"]);
</script>
<template>
  <div>
    <v-banner
      lines="one"
      :icon="icon"
      color="white"
      class="my-4 align-center banner"
      :style="{ background:  color }"
      dir="rtl"
      location="bottom center"
    >
      <v-banner-text class="ym sm-txt">{{ content }}</v-banner-text>
      <template v-slot:actions>
        <v-btn color="black" icon="mdi-close" @click="$emit('hide')"></v-btn>
      </template>
    </v-banner>
  </div>
</template>
<style scoped>
@keyframes Notification {
  0% {
    bottom: -100px;
    opacity: 0;
  }
  15% {
    bottom: 100px;
    opacity: 1;
  }
  70% {
    bottom: 100px;
    opacity: 1;
  }
  100% {
    bottom: -100px;
    opacity: 0;
  }
}
.banner {
  position: fixed;
  opacity: 0;
  width: fit-content;
  border-radius: 10px;
  box-shadow: lightgrey -1px 7px 11px;
  z-index: 999999;
  animation: Notification 3s;
}
</style>
