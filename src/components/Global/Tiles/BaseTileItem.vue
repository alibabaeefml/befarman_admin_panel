<script lang="ts" setup>
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
    <v-col
      :cols="$vuetify.display.width > 280 ? 8 : 12"
      class="d-flex align-center"
    >
      <v-icon size="60">mdi-{{ icon }}</v-icon>
      <div class="d-flex flex-column">
        <span :class="$vuetify.display.xs ? 'sm-txt' : 'md-txt'">{{
          txt
        }}</span>
        <span
          :class="{ 'xs-txt': $vuetify.display.xs, mm: true }"
          :style="{ letterSpacing: $vuetify.display.width < 280 ? '0px' : '10px' }"
        >
          {{ sub }}
        </span>
      </div>
    </v-col>
    <v-col
      v-if="$vuetify.display.width > 280"
      cols="4"
      class="d-flex text-center justify-end align-center"
    >
      <span :class="'mxb ' + ($vuetify.display.xs ? 'sm-txt' : 'lg-txt')">{{
        badgeNo
      }}</span>
      <span class="mr-1 xs-txt">{{ badgeTxt }}</span>
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
  letter-spacing: 10px;
}
</style>
