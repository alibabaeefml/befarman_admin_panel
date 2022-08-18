<script setup>
import { Cropper } from "vue-advanced-cropper";
import 'vue-advanced-cropper/dist/style.css';
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
    name: { default: 'آپلود عکس' },
    icon: { default: 'WMi-upload' },
    color: { default: 'black' },
    stencilProps: {
        default: () => ({aspectRatio: 1, checkImageOrigin: false})
    },
    crop_data: {
        default: () => ([])
    },
    value: { default: '' },
    url: { default: '' },
    name_en: { default: "upload" },
    edit_name: { type: String, default: "ویرایش عکس" },
    edit_name_en: { type: String, default: "PHOTO EDIT" },
    edit_icon: { default: "WMi-pencil" },
    addMode: { type: Boolean, default: true },
    fileForm: {
      type: Object,
      default: () => {},
    },
    mainImage: {
      type: String,
      default: "",
    },
});

const uniqueId = Math.floor(Math.random() * 10000);
const disabled = ref(false);

const emit = defineEmits(['update:url', 'input', 'update:crop_data'])

const image = computed('image', {
    get() {
        return props.url ? props.url : 'images/global/default-image/cropper.png';
    },
    set(value) {
        emit('update:url', value);
    }
})

const file = computed('file', {
    get() {
        return props.value;
    },
    set(value) {
        emit('input', value);
    }
})

const checkDisable = () => {
    if (props.url) {
        disabled.value = true;
    }
}

const validationCropper = ref(null)

const uploadImage = async (event) => {
    // Reference to the DOM input element
    let input = event.target;
    // Ensure that you have a file before attempting to read it
    if (input.files && input.files[0])
    {
        //set v-model
        file.value = input.files[0];

        // create a new FileReader to read this image and convert to base64 format
        let reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            image.value = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        await validationCropper.value.validate(input.files[0]);
        reader.readAsDataURL(input.files[0]);
    }
}
const onChangeCropper = ({coordinates}) => {
    emit('update:crop_data', coordinates);
}

watch(() => props.url, () => {
    checkDisable();
});

onMounted(() => {
  checkDisable();
})
</script>
<template>
        <div class="upload-example width-full">
      <cropper
        :class="{ 'upload-example-cropper': true, red: errors.length }"
        :canvas="false"
        :check-orientation="false"
        :stencil-props="stencilProps"
        @change="onChangeCropper"
        :src="image"
        ref="cropper"
        v-if="editImage || isAddMode"
      />
      <div class="chosen__image" v-else>
        <img :src="thumbnail" alt="thumbnail" />
      </div>
      <div v-if="errors.length" class="v-text-field__details pt-2">
        <div class="v-messages red--text" role="alert">
          <div class="v-messages__wrapper">
            <div class="v-messages__message">{{ errors[0] }}</div>
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <v-btn
          depressed
          @click.native="$refs['image_' + uniqueId].click()"
          large
          :color="color"
          dark
          v-if="isAddMode || editImage"
        >
          <input
            type="file"
            :ref="'image_' + uniqueId"
            :name="'image_' + uniqueId"
            v-show="false"
            @change="uploadImage($event)"
            accept="image/*"
          />
          <v-icon dark size="28">{{ icon }}</v-icon>
          <div class="text-right">
            <div class="name">{{ name }}</div>
            <div class="name_en">{{ name_en }}</div>
          </div>
        </v-btn>
        <v-btn
          @click.native="editImage = true"
          large
          :color="color"
          dark
          depressed
          v-else
        >
          <input
            type="file"
            :ref="'image_' + uniqueId"
            :name="'image_' + uniqueId"
            v-show="false"
            @change="uploadImage($event)"
            accept="image/*"
          />
          <v-icon dark size="28">{{ edit_icon }}</v-icon>
          <div class="text-right">
            <div class="name">{{ edit_name }}</div>
            <div class="name_en">{{ edit_name_en }}</div>
          </div>
        </v-btn>
      </div>
    </div>
</template>
<style lang="scss" scoped>
    .upload-example-cropper {
        border: 1px solid #afafaf;
        border-radius: 5px;
        background-color: white !important;
    }
    .upload-example-cropper.red {
        border: 1px solid red;
    }
</style>
