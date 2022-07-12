<script setup>
import AllBroadCamb from '@/router/breadcrumbs.js';
import { useRoute } from "vue-router";
import { computed } from '@vue/runtime-core';
const broadCambs = computed(
    () => {
        const route = useRoute().name;
        if (route) {
            return AllBroadCamb[route] ? AllBroadCamb[route] : AllBroadCamb.Home
        } else {
            return AllBroadCamb.Home;
        }
    }
)

</script>
<template>
    <div class="SubHead">
        <h1 id="management">MANAGEMENT</h1>
        <span v-for="(broadCamb, key) in broadCambs" :key="key">
            <router-link v-if="!broadCamb.disabled" :to="broadCamb.route_name">
                <h1 id="admin">{{ broadCamb.name }}</h1>
            </router-link>
            <h1 v-else id="admin">{{ broadCamb.name }}</h1>
            <v-icon v-if="key !== broadCambs.length - 1" class="broad"></v-icon>
        </span>
    </div>
</template>

<style scoped>
.v-application a {
    color: #fff;
}

.SubHead {
    width: 100%;
    background-color: rgba(24, 23, 23, 0.603);
    padding: 10px;
    margin: 10px 0 0 0;
}

#management {
    color: white;
    float: left;
    font-family: 'mm';
    font-weight: 100;
    letter-spacing: 13px;
    padding-left: 30px;
    font-size: 18px;
    padding-top: .58%;
}

#admin {
    float: right;
    font-family: 'ym';
    padding-right: 2%;
    font-weight: 100;
    font-size: 18px;
    padding-top: .58%;
}

.broad {
    float: right;
    padding-top: .7%;
}
</style>
