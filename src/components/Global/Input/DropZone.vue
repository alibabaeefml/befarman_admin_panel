<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useDropzone, type FileRejectReason } from 'vue3-dropzone';

import FileRepository from '@/abstraction/repositories/fileRepository';
const fileRepository = new FileRepository()


const state: {files: Array<File>, images: Array<any>} = reactive({
  files: [],
  images: [],
});

const props = defineProps({
  modelName: { type: String, required: true },
  collectionName: { type: String, required: true },
  batchId: { type: String, required: true },
  title: { type: String, default: 'Drag and drop files here, or Click to select files' },
  images: { type: Array, default: () => ([])}
})

watch(() => props.images, (first, second) => {
  state.images = [...props.images, ...state.images]; 
});

const onDrop =  async (acceptFiles:any[], rejectReasons: FileRejectReason[], event: Event) => {
  state.files = [...state.files, ...acceptFiles];

  for(const acceptFile of acceptFiles) {
    const id = Math.random()
    state.images.push({id ,file_name: acceptFile.name, size: acceptFile.size, status: 'waiting'})
    const image = await fileRepository.store({file: acceptFile, model_name: props.modelName, collection_name: props.collectionName, batch_id: props.batchId});
    const index = state.images.findIndex(x => x.id == id)
    state.images[index] = {...state.images[index], ...image, ...{status: 'success'}}
  }
}

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
  onDrop
});

function handleClickDeleteFile(index: number) {
  state.files.splice(index, 1);
}
</script>

<template>
  <div>
    <div class="dropzone" >
      <div v-if="state.images.length > 0" class="files">
      <div :class="{'file-item': true, 'waitng': image.status == 'waiting', 'success': image.status == 'success'}" v-for="(image, index) in state.images" :key="index">
        <span>{{ image.file_name }}</span>
        <span class="delete-file" @click="handleClickDeleteFile(index)"
          >Delete</span
        >
      </div>
    </div>
      <div
      v-bind="getRootProps()"
        class="border"
        :class="{
          isDragActive,
        }"
      >
        <input v-bind="getInputProps()" />
        <p>{{title}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropzone,
.files {
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-size: 12px;
  line-height: 1.5;
}

.border {
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
  background: #fff;
}

.border.isDragActive {
  border: 2px dashed #ffb300;
  background: rgb(255 167 18 / 20%);
}

.file-item {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  padding-left: 15px;
  margin-top: 10px;
}

.file-item.waitng {
  background: rgb(255 167 18 / 20%);
}

.file-item.success {
  background: rgba(18, 255, 101, 0.2);
}
.file-item:first-child {
  margin-top: 0;
}

.file-item .delete-file {
  background: red;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
