<template>
    <div>
        <sms-filter @filtered="filter" />
        <div v-for="sms in getSms" :key="sms.id">
            <item :itemData="sms"/>
        </div>
        <infinite-loading ref="InfiniteLoading" @infinite="infiniteHandler" />
    </div>
</template>

<script>
    import smsFilter from "../../components/Sms/Filter";
    import Item from "../../components/Sms/Item";
    import InfiniteLoading from "vue-infinite-loading";
    import {mapActions, mapGetters, mapMutations} from "vuex";
    export default {
        name: "Transaction",
        components: {Item, smsFilter, InfiniteLoading},
        data: () => ({
            page: 0
        }),
        methods:{
            ...mapActions("Sms", ["loadSms"]),
            ...mapMutations("Sms", ["RESET_SMS"]),
            async infiniteHandler($state) {
                const response = await this.loadSms(this.page + 1);
                if (response.status === 200) {
                    if (response.data.meta.current_page < response.data.meta.last_page) {
                        this.page = response.data.meta.current_page;
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                }
            },
            filter() {
                this.page = 0;
                if(this.$refs.InfiniteLoading){
                    this.$refs.InfiniteLoading.stateChanger.reset();
                }
            }
        },
        computed:{
            ...mapGetters('Sms',["getSms"])
        },
        beforeMount() {
            this.RESET_SMS();
        },
    }
</script>

<style scoped>

</style>
