<script setup>
import { ref } from "vue";
const filter = ref(true);
const emit = defineEmits(["reset"]);
</script>
<template>
  <div class="container ma-4">
    <v-card
      v-if="filter"
      title="فیـــلترهــا"
      subtitle="FILTERS"
      prepend-icon="mdi-filter"
    >
      <slot> </slot>
      <v-card-actions
        style="direction: ltr; position: absolute; left: 10px; top: 10px"
      >
        <v-btn color="primary" variant="elevated" @click="filter = false" icon>
          <v-icon>mdi-chevron-double-up</v-icon>
          <v-tooltip activator="parent" location="bottom"
            >بستن پنل فیلترها</v-tooltip
          >
        </v-btn>
        <v-btn color="primary" variant="elevated" icon @click="emit('reset')">
          <v-icon>mdi-close</v-icon>
          <v-tooltip activator="parent" location="bottom"
            >لغو فیلترها</v-tooltip
          >
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-btn
      v-else
      color="primary"
      prepend-icon="mdi-filter"
      @click="filter = true"
      style="width: 100%"
      >فیلتر ها</v-btn
    >
  </div>
</template>
<style scoped>
.container {
  font-family: ym;
  direction: rtl;
}
</style>
