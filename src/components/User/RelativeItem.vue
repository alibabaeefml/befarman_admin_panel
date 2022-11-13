<script setup>
defineProps(["relative"]);
</script>
<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          variant="underlined"
          label="نام"
          prepend-icon="mdi-account"
          v-model="relative.name"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          variant="underlined"
          label="نسبت"
          prepend-icon="mdi-relation-many-to-many"
          v-model="relative.relative"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          variant="underlined"
          label="شماره همراه"
          prepend-icon="mdi-cellphone"
          v-model="relative.phone"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          variant="underlined"
          label="آدرس"
          prepend-icon="mdi-map-marker"
          v-model="relative.address"
        >
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>
