<script setup>
import { computed, ref } from "@vue/runtime-core"
import { useDisplay } from "vuetify/lib/framework.mjs"
import { isMobile } from '@/plugins/isMobile.js';
const props = defineProps(["icon", "title", "subtitle", "sm"]);

</script>
<template>

    <div class="headlogin">
        <v-btn class="close-btn" color="black" @click="$emit('toggleModal')" icon="mdi-close"></v-btn>
        <v-icon color="white" size="x-large">{{ icon }}</v-icon>
        <div class="filterInfo">
            <h1 class="filter_pr">{{ title }}</h1>
            <h1 class="filter_en" :style="{ letterSpacing: sm ? '5px' : isMobile() ? '0px' : '10px' }">{{ subtitle }}</h1>
        </div>

    </div>
</template>

<style scoped>
* {
    font-family: yl;
}

.filterInfo {
    color: #ffffff;
    padding-right: 4%;
}

.headlogin {
    height: 100px;
    background-color: black;
    justify-content: flex-start;
    width: 100%;
    height: 100px;
    background-color: black;
    display: flex;
    align-items: center;
    direction: rtl;
    padding: 10px 20px;
}

.filter_pr {
    font-size: 20px;
}

.filter_en {
    font-family: mm;
    font-size: 16px;
    font-weight: 100;
    margin-right: -15px;
}

.close-btn {
    position: absolute;
    left: 5px;
    top: 8px;
}
</style>