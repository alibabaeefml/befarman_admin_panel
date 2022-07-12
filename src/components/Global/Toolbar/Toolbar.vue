<script setup>
import { computed, ref } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import BreadCrumbs from './BreadCrumbs.vue';

const mobile = computed(() => useDisplay().width.value < 820);
const height = computed(() => useDisplay().height.value)
const drawer = ref(true);
const rail = ref(true);
const loggedIn = ref(false);
const isAdmin = ref(false);
const props = defineProps(['currentroute']);
const home = ref(props.currentroute === 'main-home');
</script>

<template>
    <div v-if="!mobile" class="toolbar">
        <v-toolbar color="rgba(0,0,0,.6)" :style="{ color: 'white', fontFamily: 'ym' }">
            <v-toolbar-title>
                <h2 :style="{ letterSpacing: '1.5px', fontFamily: 'mm' }">BEFARMAN APP</h2>
            </v-toolbar-title>
            <v-btn icon>
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn>
                درباره ما
            </v-btn>
            <v-btn v-if="loggedIn">
                خروج
                <v-icon>mdi-logout</v-icon>
            </v-btn>
            <router-link to="/login" class="login-link">
                <v-btn @click="toggleModal">
                    {{ loggedIn ? 'پروفایل' : 'ورود' }}
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </router-link>

            <v-btn v-if="isAdmin">
                پنل ادمین
            </v-btn>
            <v-btn>
                دانلود اپلیکیشن اندروید
            </v-btn>
            <router-link to="/" class="login-link">
                <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </router-link>
        </v-toolbar>
    </div>
    <v-card v-else :style="{zIndex:999999}">
        <v-navigation-drawer v-model="drawer" @mouseenter="rail = false" @mouseleave="rail = true" :rail="rail"
            permanent location="right">
            <v-list-item :style="{ letterSpacing: '1.5px', fontFamily: 'mm' }" prepend-avatar="/favicon.ico"
                title="BEFARMAN APP">
            </v-list-item>
            <v-divider></v-divider>

            <v-list density="compact" nav right :style="{ fontFamily: 'ym' }">
                <v-list-item prepend-icon="mdi-home" title="صفحه اصلی" value="home"></v-list-item>
                <v-list-item prepend-icon="mdi-android" title="دانلود اپلیکیشن اندروید" value="android">
                </v-list-item>
                <v-list-item prepend-icon="mdi-information" title="درباره ما" value="aboutus"></v-list-item>
                <v-list-item prepend-icon="mdi-account-key" title="پنل ادمین" value="logout" v-if="isAdmin">
                </v-list-item>
                <router-link to="/login" class="login-link">
                    <v-list-item prepend-icon="mdi-account" :title="loggedIn ? 'پروفایل' : 'ورود'" value="login">
                    </v-list-item>
                </router-link>

                <v-list-item prepend-icon="mdi-logout" title="خروج" value="logout" v-if="loggedIn"></v-list-item>
                <v-list-item prepend-icon="mdi-twitter" title="twitter" value="twitter"></v-list-item>
                <v-list-item prepend-icon="mdi-instagram" title="instagram" value="instagram"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<style scoped>
.toolbar {
    position: fixed;
    top: 0;
    width: 100%;
}

.login-link {
    color: inherit;
    text-decoration: none;
}

.right-nav {
    height: 100vh;
}
</style>