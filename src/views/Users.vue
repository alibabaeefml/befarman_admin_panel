<script setup>
// ------------- imports

// compomnents
import UserFilter from "@components/User/UserFilter.vue";
import UserItem from "@components/User/UserItem.vue";
import UserComments from "@components/User/UserComments.vue";
import AcceptUserArchive from "@components/User/AcceptUserArchive.vue";
import SendMessage from "@components/User/SendMessage.vue";
import InfiniteScroll from "infinite-loading-vue3";

// modules
import { ref,onUnmounted } from "vue";
import { useUser } from "@/composables/user/user";
import {useUserStore} from "@/store/user.ts"
const { indexUser, indexArchivedUser, getUsers, getArchivedUsers, paginate } =
  useUser();

// ---------------

//---------------- native code
const tab = ref("active");

indexUser();
indexArchivedUser();

// infinite loading
const noResult = ref(false);
let loadingData = false;
const infiniteUser = async () => {
  if (loadingData || paginate.value.page >= paginate.value.pageCount) {
    if (paginate.value.page >= paginate.value.pageCount) {
      noResult.value = true;
    }
    return true;
  }
  const data = { pagination: {} };
  data["pagination"] = { ...paginate.value };
  data.pagination.page++;
  loadingData = true;
  try {
    await indexUser(data);
  } catch (e) {
    console.log(e);
  } finally {
    loadingData = false;
  }
};

onUnmounted(()=>{
  useUserStore().users = []
})
</script>

<template>
  <div>
    <UserFilter />
    <v-card>
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="archived">کاربران حذف شده</v-tab>
        <v-tab value="active">کاربران فعال</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="archived">
            <UserItem
              v-for="user of getArchivedUsers"
              :key="user.id"
              :user="user"
            />
          </v-window-item>
          <v-window-item value="active">
            <infinite-scroll
              @infinite-scroll="infiniteUser"
              :noResult="noResult"
            >
              <UserItem v-for="user of getUsers" :key="user.id" :user="user" />
            </infinite-scroll>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <v-btn
      size="x-large"
      class="add-btn"
      icon
      color="secondary"
      :to="{ name: 'addUser' }"
    >
      <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
    <AcceptUserArchive />
    <UserComments />
    <SendMessage />
  </div>
</template>
