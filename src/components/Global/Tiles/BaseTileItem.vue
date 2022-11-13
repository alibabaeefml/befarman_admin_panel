<script setup>
defineProps([
  "background",
  "color",
  "icon",
  "txt",
  "sub",
  "badgeNo",
  "badgeTxt",
]);
</script>
<template>
  <v-row
    class="tile-item ym d-flex align-center"
    :style="{
      color: color,
      background: background,
      border: 'solid 1px' + color,
    }"
  >
    <v-col cols="8" class="d-flex">
      <v-icon size="60">mdi-{{ icon }}</v-icon>
      <div class="d-flex flex-column">
        <span class="md-txt">{{ txt }}</span>
        <span class="sub mm">
          {{ sub }}
        </span>
      </div>
    </v-col>
    <v-col cols="4" class="d-flex text-center align-center">
      <span class="mxb lg-txt">{{ badgeNo }}</span>
      <span class="sm-txt">{{ badgeTxt }}</span>
    </v-col>
  </v-row>
</template>
<style scoped>
.tile-item {
  height: 150px;
  margin: 5px !important;
  border-radius: 5px;
}
.sub {
  font-size: 15px !important;
  letter-spacing: 10px;
}
</style>
