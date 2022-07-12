<template>
    <div style="direction: rtl">
        <request-filter/>
        <v-card class="my-2 mx-12">
            <v-tabs v-model="tab" center-active fixed-tabs >
                <v-tab>درخواست های فعال</v-tab>
                <v-tab>درخواست های حذف شده</v-tab>
            </v-tabs>
        </v-card>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <item v-for="request in getRequest" :key="getRequest.id" :request="request"/>
                <infinite-loading @infinite="infiniteHandler" />
            </v-tab-item>
            <v-tab-item>
                <item v-for="request in getArchiveRequest" :key="getRequest.id" :request="request" :show-actions="false" />
                <infinite-loading @infinite="archiveInfiniteHandler" />
            </v-tab-item>
        </v-tabs-items>

        <v-btn
            fab
            fixed
            bottom
            left
            Icon
            x-large
            color="#32cad5"
            @click="$_toggleModal('Newrequest')"
        >
            <v-icon color="white">WMi-plus</v-icon>
        </v-btn>

        <add-request/>
        <edit-request/>
        <accept-or-reject/>
        <change-time/>
        <accept-or-delete/>
        <accept-or-delete/>
        <change-request-time/>
        <show-request v-if="$_isOpen('ShowRequest')" />
        <accept-request-delete />
    </div>
</template>
<script>
import requestFilter from "../../components/Request/requestFilter";
import item from "../../components/Request/Item";
import AddRequest from "../../components/Request/AddRequest";
import {mapActions, mapGetters, mapMutations} from "vuex";
import InfiniteLoading from "vue-infinite-loading";
import Button from "../../components/Global/Buttons/circle"
import EditRequest from "../../components/Request/EditRequest";
import ShowRequest from "../../components/Request/ShowRequest";
import AcceptOrReject from "../../components/Request/AcceptOrReject";
import ChangeTime from "../../components/CarRent/ChangeTime";
import ChangeRequestTime from "../../components/Request/ChangeRequestTime";
import AcceptOrDelete from "../../components/Request/acceptOrDelete"
import AcceptRequestDelete from "../../components/Request/AcceptRequestDelete"
export default {
    name: "Requests",
    data: () => ({
        tab: 0,
        page: 0,
        archivePage: 0
    }),
    components: {
        ChangeRequestTime,
        ChangeTime,
        AcceptOrReject,
        Button,
        InfiniteLoading,
        AcceptOrDelete,
        requestFilter,
        item,
        AddRequest,
        EditRequest,
        ShowRequest,
        AcceptRequestDelete
    },
    beforeMount() {
        this.RESET_REQUESTS();
        this.RESET_ARCHIVE_REQUESTS();
    },
    methods: {
        ...mapMutations("Requests", ["RESET_REQUESTS", "RESET_ARCHIVE_REQUESTS"]),
        ...mapActions("Requests", ["loadRequests", "loadArchiveRequests"]),
        async infiniteHandler($state) {
            const response = await this.loadRequests(this.page + 1);
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
            const response = await this.loadArchiveRequests(this.archivePage + 1);
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
        ...mapGetters("Requests", ["getRequest", "getArchiveRequest"]),
    },
};
</script>
<style >
.item {
    position: relative;
    direction: rtl;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    width: 95%;
    height: 130px;
    border-radius: 6px;
    transition: 0.2s;
}

.infobarD {
    position: absolute;
    right: 17%;
    text-align: center;
    bottom: 28%;
}
</style>
