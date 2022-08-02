<template>
  <v-dialog
    v-model="modal"
    :max-width="maxWidth"
    :width="width"
    :transition="transition"
  >
    <v-card class="wa__modal">
      <div class="wa__modal-header">
        <slot name="header" :modal="modal" :data="data" v-if="modal"></slot>
      </div>
      <v-card-text class="wa__modal-content pb-0">
        <slot :modal="modal" :data="data" v-if="modal"></slot>
      </v-card-text>
      <template v-if="!notFooter">
        <v-divider class="mb-0"></v-divider>
      </template>
      <v-card-actions class="wa__modal-footer">
        <slot name="footer" :modal="modal" :data="data" v-if="modal"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
 

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    width: { default: null },
    maxWidth: { default: null },
    name: { default: null },
    transition: { default: "slide-x-transition" },
    notFooter: {
        default : false
    }
  },
  data: () => ({
    isOpenModal: false,
  }),
  computed: {
    ...mapGetters("modal", ["isModal", "getModal"]),
    modal: {
      get() {
        const isOpen = this.isModal(this.modalName);
        this.emitModal(isOpen);
        return isOpen;
      },
      set(value) {
        if (!value) {
          this.$_closeModal();
        }
      },
    },
    modalName() {
      return this.name ? this.name : this.$parent.$options.name;
    },
    data() {
      return this.getModal(this.modalName); 
    },
  },
  methods: {
    emitModal(isOpen) {
      if (this.isOpenModal && !isOpen) {
        this.isOpenModal = false;
        this.$emit("close");
      } else if (!this.isOpenModal && isOpen) {
        this.isOpenModal = true;
        this.$emit("open", this.data);
        this.$parent.modalData = this.data;
      }
    },
  },
  beforeDestroy() {
    this.emitModal(false);
  },
};
</script>
<style>
.wa__modal-header {
  background-color: var(--color-bg-modal-header);
  padding: 27px 0 15px 0;
  text-align: center;
}
.wa__modal-content {
  border-radius: 0 0 0 0;
  padding: 0 !important;
}
.wa__modal.v-sheet.v-card {
  border-radius: 10px;
}
</style>