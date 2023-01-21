<script setup lang="ts">
import BaseModal from "@components/Global/Dialog/BaseModal.vue";
const openModal = async () => {

}
</script>

<template>
  <div>
    <BaseModal
      title="جزئیات تخفیف"
      subtitle="DISCOUNT INFO"
      name="discountInfo"
      :max-width="$vuetify.display.smAndDown ? null : 600"
      @open="openModal"
      icon="mdi-brightness-percent"
    >
    This is Discount Info
    </BaseModal>
  </div>
</template>
