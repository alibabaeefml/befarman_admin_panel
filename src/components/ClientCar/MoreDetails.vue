<script setup>
defineProps(["clientCar"]);
</script>
<template>
  <v-row class="mt-1">
    <v-col cols="12" class="text-right yl">
      <div>
        <h4>توضیحات</h4>
        <p>{{ clientCar.details }}</p>
      </div>
    </v-col>
    <v-col cols="12" class="text-right yl">
      <div>
        <h4>قسمت های رنگ شده</h4>
        <p>{{ clientCar.painted }}</p>
      </div>
    </v-col>
    <v-col cols="12" class="text-right yl">
      <div>
        <h4>قسمت های تعویض شده</h4>
        <p>{{ clientCar.changed_parts }}</p>
      </div>
    </v-col>
  </v-row>
</template>
