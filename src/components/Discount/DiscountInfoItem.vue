<script setup lang="ts">
const props = defineProps({
  name_fa: { type: String },
  value: {},
});
</script>
<template>
  <div
    style="border-bottom: lightgray solid 2px"
    class="d-flex align-center justify-space-between mt-2 pb-2"
  >
    <div>
      <h3>{{ name_fa }}</h3>
    </div>
    <div v-if="typeof value === 'undefined'">
      <Loader />
    </div>
    <div class="d-flex align-center" v-else>
      <h2>{{ value ?? "-" }}</h2>
    </div>
  </div>
</template>
