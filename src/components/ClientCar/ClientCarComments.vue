<script setup>
import BaseModal from "@/components/Global/Dialog/BaseModal.vue";
import { ref } from "vue";
const comments = ref([]);
const openModal = async (data) => {
  comments.value = data;
};
</script>

<template>
  <div>
    <BaseModal
      name="clientCarComments"
      :title="'نظرات'"
      subtitle="COMMENTS"
      icon="mdi-comment"
      @open="openModal"
    >
      <div v-if="comments.length">
        <v-card
          v-for="comment in comments"
          :key="comment.id"
          :title="comment.title"
          class="ma-4"
          prepend-icon="mdi-comment"
          style="border-bottom: solid lightengray 1px"
        >
          <v-card-text>
            {{ "امتیاز نظر: " + comment.vote }}
            <br />
            {{ comment.author_name }}
            :
            {{ comment.content }}
          </v-card-text>
        </v-card>
      </div>

      <div v-else>
        <h4 class="text-center">نظری وجود ندارد.</h4>
      </div>
    </BaseModal>
  </div>
</template>
