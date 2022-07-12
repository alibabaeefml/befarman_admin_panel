<template>
    <div>
        <v-btn fab fixed bottom left Icon x-large color="#32cad5" @click="$_toggleModal('addTransaction')">
            <v-icon color="white">WMi-plus</v-icon>
        </v-btn>
        <transaction-filter/>
        <v-card class="my-2 mx-12">
            <v-tabs v-model="tab" @change="changed" center-active fixed-tabs >
                <v-tab>تراکنش های فعال</v-tab>
                <v-tab>تراکنش های حذف شده</v-tab>
            </v-tabs>
        </v-card>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <div v-for="transaction in getTransactions">
                    <item :itemData="transaction"/>
                </div>
            </v-tab-item>
            <v-tab-item>
                <div v-for="transaction in getArchiveTransactions">
                    <item :itemData="transaction" :show-actions="false"/>
                </div>
            </v-tab-item>
        </v-tabs-items>


        <addTransaction/>
        <edit-transaction/>
    </div>
</template>

<script>
import transactionFilter from "../../components/transactions/transactionFilter";
import Item from "../../components/transactions/Item";
import addTransaction from "../../components/transactions/addTransaction"
import {mapActions, mapGetters} from "vuex";
import editTransaction from "../../components/transactions/editTransaction";
export default {
name: "Transaction",
    components: {editTransaction, Item, transactionFilter,addTransaction},
    data: () => ({
        tab: 0
    }),
    methods:{
        ...mapActions("Transactions", ["loadTransactions", "loadArchiveTransactions"]),
        changed() {
            if (this.tab === 1 && this.getArchiveTransactions.length === 0) {
                this.loadArchiveTransactions();
            }
        }
    },
    computed:{
    ...mapGetters('Transactions',["getTransactions", "getArchiveTransactions"])
    },
    mounted() {
        this.loadTransactions()
    }
}
</script>

<style scoped>

</style>
