<script setup>
import { ref } from 'vue';
import UsersFilter from '../../components/Users/Users-Filter.vue';
import UserItem from '../../components/Users/User-Item.vue';
import UserComments from '../../components/Users/User-Comments.vue';
import AcceptUserDelete from '../../components/Users/Accept-User-Delete.vue';
import SendMessage from '../../components/Users/Send-Message.vue';
const tab = ref('one');
const commentsModal = ref(false);
const addModal = ref(false);
const deleteConfirm = ref(false);
const smsModal = ref(false);
</script>

<template>
    <UsersFilter></UsersFilter>
    <v-card>
        <v-tabs v-model="tab" color="secondary" fixed-tabs>
            <v-tab value="two">کاربران حذف شده</v-tab>
            <v-tab value="one">کاربران فعال</v-tab>
        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="two">
                    <UserItem v-for="user of 5" :key="user.id" :user="user" :archived="true">
                    </UserItem>
                </v-window-item>
                <v-window-item value="one">
                    <UserItem v-for="user of 5" :key="user.id" :user="user" @showCommentsModal="commentsModal = true"
                        @editModal="addModal = true" @deleteModal="deleteConfirm = true" @smsModal="smsModal = true">
                    </UserItem>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
    <v-btn size="x-large" class="add-btn" icon color="secondary" to="/Admin/Add-User">
        <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
    <AcceptUserDelete :dialog="deleteConfirm" @toggleModal="deleteConfirm = false"></AcceptUserDelete>
    <UserComments :dialog="commentsModal" @toggle-modal="commentsModal = false"></UserComments>
    <SendMessage :dialog="smsModal" @toggle-modal="smsModal = false"></SendMessage>
</template>
