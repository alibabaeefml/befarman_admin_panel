<script setup>
import { ref } from "vue";
import TransactionFilter from "@components/Transaction/TransactionFilter.vue";
import TransactionItem from "@components/Transaction/TransactionItem.vue";
const tab = ref("one");
</script>

<template>
  <div>
    <TransactionFilter />
    <v-card>
      <v-tabs v-model="tab" color="secondary" fixed-tabs>
        <v-tab value="two">تراکنش های حذف شده</v-tab>
        <v-tab value="one">تراکنش های فعال</v-tab>
      </v-tabs>
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="two">
            <TransactionItem
              v-for="transaction of 5"
              :key="transaction.id"
              :transaction="transaction"
              :archived="true"
            />
          </v-window-item>
          <v-window-item value="one">
            <TransactionItem
              v-for="transaction of 5"
              :key="transaction.id"
              :transaction="transaction"
            />
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
    <v-btn
      :to="{ name: 'addTransaction' }"
      size="x-large"
      class="add-btn"
      icon
      color="secondary"
    >
      <v-icon color="white">mdi-plus</v-icon>
    </v-btn>
  </div>
</template>
