<script setup>
import BaseModal from "../Global/Dialog/BaseModal.vue";
defineProps(["dialog"]);
defineEmits(["toggle-modal"]);
</script>

<template>
  <div>
    <BaseModal
      name="clientCarComments"
      title="نظرات"
      subtitle="COMMENTS"
      icon="mdi-comment"
    >
      <h4 class="text-center">نظری وجود ندارد.</h4>
    </BaseModal>
  </div>
</template>
