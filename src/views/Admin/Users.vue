<script setup>
import { ref } from 'vue';
import UsersFilter from '../../components/Users/Users-Filter.vue';
import UserItem from '../../components/Users/User-Item.vue';
const tab = ref('one');
const addModal = ref(false);
const deleteConfirm = ref(false);
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
                    <UserItem v-for="user of 5" :key="user.id" :user="user" @editModal="addModal = true"
                        @deleteModal="deleteConfirm = true">
                    </UserItem>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>

</template>
