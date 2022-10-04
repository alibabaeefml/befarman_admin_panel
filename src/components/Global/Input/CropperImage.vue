<template>
    <div class="upload-example width-full">

      <Cropper 
      :class="{ 'upload-example-cropper': true, 'cropper': true }"
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
      <div class="button-wrapper">
        <v-btn
          depressed
          @click.native="$refs.file.click()"
          large
          :color="color"
          dark
          v-if="isAddMode || editImage"
        >
          <input
            type="file"
            ref="file"
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
            ref="file"
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
<script>
// Cropper
import { Cropper } from "vue-advanced-cropper";
import { defineComponent } from "vue";
import "vue-advanced-cropper/dist/style.css";
// File Repository
import FileRepository from "@/abstraction/repositories/fileRepository";
const repository = new FileRepository();
export default defineComponent ({
  props: {
    name: {
      default: "آپلود عکس",
    },
    name_en: {
      default: "upload",
    },
    edit_name: {
      type: String,
      default: "ویرایش عکس",
    },
    edit_name_en: {
      type: String,
      default: "PHOTO EDIT",
    },
    icon: {
      default: "WMi-upload",
    },
    edit_icon: {
      default: "WMi-pencil",
    },
    color: {
      default: "black",
    },
    stencilProps: {
      default: () => ({ aspectRatio: 1, checkImageOrigin: false }),
    },
    crop: {
      default: () => [],
    },
    value: {
      default: "",
    },
    url: {
      default: "",
    },
    addMode: {
      type: Boolean,
      default: true,
    },
    fileForm: {
      type: Object,
      default: () => {},
    },
    mainImage: {
      type: String,
      default: "",
    },
  },
  components: {
    Cropper,
  },
  data() {
    return {
      uniqueId: Math.floor(Math.random() * 10000),
      disabled: false,
      isAddMode: this.addMode,
      editImage: false,
      changedImage: false,
    };
  },
  computed: {
    thumbnail: {
      get() {
        return this.url
          ? this.url
          : "https://app.befarman.com/images/avatars/car-avatar.jpg";
      },
      set(value) {
        this.$emit("update:url", value);
      },
    },
    image() {
      if (this.mainImage && !this.changedImage) {
          return this.mainImage;
      }
      return this.thumbnail;
    },
    file: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    theme() {
      return this.dark ? "theme--dark" : "theme--light";
    },
  },
  methods: {
    async uploadImage(event) {
      // Reference to the DOM input element
      let input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        //set v-model
        this.file = input.files[0];
        this.fileForm.file = input.files[0];

        // create a new FileReader to read this image and convert to base64 format
        let reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.thumbnail = e.target.result;
          this.changedImage = true;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },
    onChangeCropper({ coordinates }) {
      this.$emit("update:crop", coordinates);
    },
    checkDisable() {
      if (this.url) {
        this.disabled = true;
      }
    },
    async upload() {
      console.log(234);
      if (this.isAddMode) {
        if (this.fileForm.file) {
          return await repository.store(this.fileForm);
        }
      } else if (this.editImage) {
        if (this.fileForm.file) {
          return await repository.store(this.fileForm);
        } else {
          const newFileForm = {
            ...this.fileForm,
            url: this.mainImage,
          };
          return await repository.store(newFileForm);
        }
      }
    },
  },
  watch: {
    url() {
      this.checkDisable();
    },
    addMode(value) {
      this.isAddMode = value;
    },
  },
  created() {
    this.checkDisable();
  },
});
</script>
<style scoped>
.cropper {
  max-height: 300px;
}
.upload-example-cropper {
  border: 1px solid #afafaf;
  border-radius: 5px;
  background-color: white !important;
}
.upload-example-cropper.red {
  border: 1px solid red;
}
.name {
  font-size: 13px;
  font-family: "iranyekan-regular" !important;
}
.name_en {
  font-family: "montserrat-regular";
  font-size: 7px;
  letter-spacing: 3px;
}
.chosen__image {
  text-align: center;
}
.chosen__image img {
    max-width: 100%;
    max-height: 300px;
}
.button-wrapper {
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
</style>

