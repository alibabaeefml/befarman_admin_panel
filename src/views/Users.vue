<script setup>
import { ref } from "vue";
import UserFilter from "@components/User/UserFilter.vue";
import UserItem from "@components/User/UserItem.vue";
import UserComments from "@components/User/UserComments.vue";
import AcceptUserDelete from "@components/User/AcceptUserDelete.vue";
import SendMessage from "@components/User/SendMessage.vue";
const tab = ref("one");
const commentsModal = ref(false);
const addModal = ref(false);
const deleteConfirm = ref(false);
const smsModal = ref(false);
</script>

<template>
  <UserFilter />
  <v-card>
    <v-tabs v-model="tab" color="secondary" fixed-tabs>
      <v-tab value="two">کاربران حذف شده</v-tab>
      <v-tab value="one">کاربران فعال</v-tab>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="two">
          <UserItem
            v-for="user of 5"
            :key="user.id"
            :user="user"
            :archived="true"
          />
        </v-window-item>
        <v-window-item value="one">
          <UserItem
            v-for="user of 5"
            :key="user.id"
            :user="user"
            @showCommentsModal="commentsModal = true"
            @editModal="addModal = true"
            @deleteModal="deleteConfirm = true"
            @smsModal="smsModal = true"
          />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <v-btn
    size="x-large"
    class="add-btn"
    icon
    color="secondary"
    :to="{ name: 'ADD USER' }"
  >
    <v-icon color="white">mdi-plus</v-icon>
  </v-btn>
  <AcceptUserDelete
    :dialog="deleteConfirm"
    @toggleModal="deleteConfirm = false"
  />
  <UserComments :dialog="commentsModal" @toggle-modal="commentsModal = false" />
  <SendMessage :dialog="smsModal" @toggle-modal="smsModal = false" />
</template>
