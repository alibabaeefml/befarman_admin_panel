<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { Dropzone } from "dropzone";
let myDropzone;
const props = defineProps({
  name_fa: { type: String },
  name_en: { type: String },
  images: { type: Array },
});

const drop = ref(null);

onMounted(() => {
  myDropzone = new Dropzone(drop.value, {
    url: "/post",
    acceptedFiles: ".jpg,.jpeg",
    autoProcessQueue: false,
    addRemoveLinks: true,
    withCredentials: true
  });
});

watchEffect(() => {
  if (props.images) {
    props.images.map((e) => {
      myDropzone.displayExistingFile(
        { name: e.file_name, size: parseFloat(e.size) * 1000, crossOrigin:"Anonymous" },
        e.image
      );
    });
  }
});

// to make an emit to upload images when submit the form
// myDropzone.processQueue()
</script>

<template>
  <v-card :title="name_fa" :subtitle="name_en">
    <div ref="drop" class="dropzone">
    </div>
  </v-card>
</template>
