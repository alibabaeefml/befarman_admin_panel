<script setup>
import { ref } from 'vue';
import RequestItem from '../../components/Requests/Request-Item.vue';
import RequestsFilter from '../../components/Requests/Requests-Filter.vue';
import AddEditRequest from '../../components/Requests/Add-Edit-Request.vue';
import AcceptReqDelete from '../../components/Requests/Accept-Req-Delete.vue';
const tab = ref('one');
const addModal = ref(false);
const deleteConfirm = ref(false)
</script>
<template>
    <requests-filter></requests-filter>
    <v-card>
        <v-tabs v-model="tab" color="secondary" fixed-tabs>
            <v-tab value="two">درخواست های حذف شده</v-tab>
            <v-tab value="one">درخواست های فعال</v-tab>
        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="two">
                    <RequestItem v-for="request of 5" :key="request.id" :request="request" :archived="true">
                    </RequestItem>
                </v-window-item>
                <v-window-item value="one">
                    <RequestItem v-for="request of 5" :key="request.id" :request="request"
                        @editModal="addModal = true" @deleteModal="deleteConfirm = true">
                    </RequestItem>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
    <v-btn size="x-large" class="add-btn" icon color="secondary" @click="addModal = true">
        <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
    <add-edit-request :dialog="addModal" @toggle-modal="addModal = false"></add-edit-request>
    <accept-req-delete :dialog="deleteConfirm" @toggle-modal="deleteConfirm=false"></accept-req-delete>
</template>
