<template>
    <div>
        <v-btn
            fab
            fixed
            bottom
            x-large
            left
            x-large
            Icon
            color="#32cad5"
            @click="$_toggleModal('Add-user')"
        >
            <v-icon color="white">WMi-plus</v-icon>
        </v-btn>
        <user-filters/>
        <v-card class="my-2 mx-12">
            <v-tabs v-model="tab" center-active fixed-tabs >
                <v-tab>کاربران فعال</v-tab>
                <v-tab>کاربران حذف شده</v-tab>
            </v-tabs>
        </v-card>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <UserItem v-for="user in getUsers" :key="user.id" :user="user"/>
                <infinite-loading @infinite="infiniteHandler"></infinite-loading>
            </v-tab-item>
            <v-tab-item>
                <UserItem v-for="user in getArchiveUsers" :show-actions="false" :key="user.id" :user="user"/>
                <infinite-loading @infinite="archiveInfiniteHandler" />
            </v-tab-item>
        </v-tabs-items>

        <CommentList v-if="$_isOpen('commentList')" />
        <detalis/>
        <send-message/>
        <add-user/>
        <accept-delete/>
    </div>
</template>
<script>
import detalis from "../../components/User/Details"
import InfiniteLoading from "vue-infinite-loading";
import UserFilters from "@Components/User/UserFilters";
import CommentList from "@Components/Comment/CommentListModal";
import UserItem from "@Components/User/UserItem";
import AddUser from "@Components/User/AddUser";
import {mapActions, mapGetters} from "vuex";
import SendMessage from "@Components/User/SendMessage";
import AcceptDelete from "../../components/User/AcceptDelete";
export default {
    name: "Users",
    components: {
        detalis,
        AddUser,
        UserItem,
        UserFilters,
        InfiniteLoading,
        SendMessage,
        AcceptDelete,
        CommentList
    },
    data() {
        return {
            page: 0,
            archivePage: 0,
            tab: 0,
        };
    },
    methods: {

        ...mapActions("Users", ["loadUsers", "loadArchiveUsers"]),
        async infiniteHandler($state) {
            const response = await this.loadUsers(this.page + 1);
            if (response.status === 200) {
                if (response.data.meta.current_page < response.data.meta.last_page) {
                    this.page = response.data.meta.current_page;
                    $state.loaded();
                } else {
                    $state.complete();
                }
            }
        },
        async archiveInfiniteHandler($state) {
            const response = await this.loadArchiveUsers(this.archivePage + 1);
            if (response.status === 200) {
                if (response.data.meta.current_page < response.data.meta.last_page) {
                    this.archivePage = response.data.meta.current_page;
                    $state.loaded();
                } else {
                    $state.complete();
                }
            }
        },
    },
    computed: {
        ...mapGetters("Users", ["getUsers", "getArchiveUsers"]),

    },
};
</script>

<style scoped>
.AddUser__btn {
    cursor: pointer;
    text-align: center;
    width: 50px;
    height: 50px;
    padding: 20px;
    background-color: #32cad5;
    border-radius: 500px;
}

.AddUser__btn-plus {
    color: white;
}
</style>

