<script setup lang="ts">
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
const openModal = async () => {

}
</script>

<template>
  <div>
    <BaseModal
      title="ویرایش تخفیف"
      subtitle="DISCOUNT EDIT"
      name="discountEdit"
      :max-width="$vuetify.display.smAndDown ? null : 600"
      @open="openModal"
      icon="mdi-brightness-percent"
    >
    This is Discount Edit
    </BaseModal>
  </div>
</template>
