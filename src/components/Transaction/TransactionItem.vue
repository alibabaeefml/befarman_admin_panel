<script setup>
import { ref } from "vue";
defineProps(["request", "archived"]);
defineEmits(["editModal", "deleteModal"]);
const actions = ref(true);
const outgoing = ref(true);
</script>
<template>
  <div>
    <v-card
      class="border mt-3 text-center"
      :color="outgoing ? '#ee35521a' : '#32cad51a'"
    >
      <v-card-text dir="rtl" class="yl">
        <v-row class="align-center">
          <v-col
            cols="12"
            md="4"
            xs="12"
            class="d-flex justify-center flex-column"
            :style="{
              background: outgoing ? '#ee3552' : '#32cad5',
              color: 'white',
              height: '150px',
            }"
          >
            <h1 dir="ltr" class="mb lg-txt">
              {{ outgoing ? "-" : "+" }} 5000000
            </h1>
            <h2>تومان</h2>
          </v-col>
          <v-col cols="12" md="6" xs="12">
            <h1>بازگشت وجه کاربر</h1>
            <h2>
              وجه به مقدار 000000 تاریخ 0000/00/00 به کاربر بازگردانده شد.
            </h2>
          </v-col>
          <v-col cols="12" md="2" xs="12">
            <h1 class="sm-txt">کاربر مهمان</h1>
            <h2>09000000000</h2>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions style="position: absolute; bottom: 0">
        <v-btn
          v-if="!archived"
          color="primary"
          icon
          @click="actions = !actions"
        >
          <v-icon>{{
            !actions ? "mdi-dots-vertical" : "mdi-menu-down"
          }}</v-icon>
        </v-btn>
        <v-btn v-else color="orange" icon @click="restoreCar">
          <v-icon>mdi-restore</v-icon>
          <v-tooltip v-if="archived" activator="parent" location="bottom"
            >بازگشت تراکنش</v-tooltip
          >
        </v-btn>
        <div class="actionsGroup" v-if="actions">
          <v-btn
            icon
            color="primary"
            variant="elevated"
            @click="$emit('deleteModal')"
          >
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >حذف تراکنش</v-tooltip
            >
          </v-btn>
          <v-btn
            icon
            color="black"
            variant="elevated"
            :to="{ name: 'editTransaction', params: { id: ':id' } }"
          >
            <v-icon>mdi-pencil</v-icon>
            <v-tooltip activator="parent" location="bottom"
              >ویرایش تراکنش</v-tooltip
            >
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>
<style scoped>
.v-card:hover {
  box-shadow: 0px 3px 10px -1px rgb(0 0 0 / 20%);
}
</style>
