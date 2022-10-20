<script setup>
import { computed, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import { isMobile } from "@/utils/isMobile";
const props = defineProps(["icon", "title", "subtitle"]);
const sm = computed(() => useDisplay().smAndDown.value);
</script>
<template>
  <div class="yl pa-4 d-flex align-center" block>
    <v-btn
      class="close-btn"
      color="black"
      @click="$_closeModal()"
      icon="mdi-close"
    />
    <v-icon color="white" size="x-large">{{ icon }}</v-icon>
    <div class="mr-2">
      <h4>{{ title }}</h4>
      <h6 :style="{ letterSpacing: sm ? '5px' : isMobile() ? '0px' : '10px' }">
        {{ subtitle }}
      </h6>
    </div>
  </div>
</template>

<style scoped>
.close-btn {
  position: absolute;
  left: 5px;
  top: 8px;
}
</style>
