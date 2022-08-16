<script setup>
import BaseModal from '../Global/BaseModal/BaseModal.vue';
defineProps(['dialog'])
defineEmits(['toggle-modal'])
</script>

<template>
<div>
    <BaseModal :dialog="dialog" @toggle-modal="$emit('toggle-modal')" title="نظرات کاربر " subtitle="COMMENTS" icon="mdi-user-comment">
    <h4 class="text-center">نظری وجود ندارد.</h4>
    </BaseModal>
</div>
</template>