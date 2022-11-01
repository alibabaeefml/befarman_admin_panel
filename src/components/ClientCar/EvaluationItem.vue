<script setup>
defineProps({
  name_fa: { type: String },
  value: { type: String },
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
    <div class="d-flex align-center">
      <h2>{{ value ?? "-" }}</h2>
      <h5 class="text-center mr-3" v-if="typeof value === 'number'">
        کیلومتر<br />
        تعویـض
      </h5>
    </div>
  </div>
</template>
