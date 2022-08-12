<script setup>
import { computed, ref } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import bg from '@/assets/Images/Header.jpg'
import { useRoute } from 'vue-router';
const mobile = computed(() => useDisplay().width.value < 1080);
const drawer = ref(false);
const loggedIn = ref(true);
const isAdmin = ref(true);
const user = ref('')
const props = defineProps(['currentPath']);
const routeName = computed(() => useRoute().meta.title)
</script>

<template>

    <div v-if="!mobile" class="toolbar" :style="currentPath !== '/' && currentPath !== '/Login' ?
    { background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : ''">
        <v-toolbar color="rgba(0,0,0,.6)" :style="{ color: 'white', fontFamily: 'ym', padding: '20px' }">
            <v-toolbar-title>
                <h2 class="app-bar-title mm">BEFARMAN APP</h2>
            </v-toolbar-title>
            <v-btn icon>
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn v-if="loggedIn">
                خروج
                <v-icon>mdi-logout</v-icon>
            </v-btn>
            <router-link to="/Login" class="link">
                <v-btn>
                    {{ loggedIn ? 'پروفایل' : 'ورود' }}
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </router-link>
            <div>{{ user ? user : 'کاربر' }} عزیز، خوش آمدی</div>
            <router-link to="/" class="link">
                <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </router-link>
        </v-toolbar>
        <div class="AdminHeader" v-if="currentPath.includes('Admin')">
            <div style="font-family:mm;font-size: 20px;letter-spacing: 10px;">MANAGEMENT</div>
            <div style="font-family:yr;font-size: 20px;">
                <router-link class="link" to="/Admin/Home">مدیریت</router-link>
                <span style="font-size:15px;margin-right:10px">
                    {{ currentPath !== '/Admin/Home' ? ' > ' + routeName : '' }}
                </span>
            </div>
        </div>
    </div>
    <div v-else>
        <v-app-bar color="black">
            <v-toolbar-title > 
                <h4 class="app-bar-title mm">BEFARMAN APP</h4>
            </v-toolbar-title>
            <v-btn class="menu-btn" size="large" icon="mdi-dots-vertical" @click="drawer = !drawer" />
        </v-app-bar>
    </div>
    <div>
        <v-card style="z-index:3">
            <v-navigation-drawer v-model="drawer" @click:outside="drawer=false" :rail="false" permanent location="right">
                <!-- <v-list-item :style="{ letterSpacing: '1.5px', fontFamily: 'mm' }" prepend-avatar="/favicon.ico"
                    title="BEFARMAN APP">
                </v-list-item>
                <v-divider></v-divider> -->
                <v-list density="compact" nav right :style="{ fontFamily: 'ym' }">
                    <router-link to="/" class="link">
                        <v-list-item prepend-icon="mdi-home" title="صفحه اصلی" value="home"></v-list-item>
                    </router-link>
                    <router-link to="/Login" class="link">
                        <v-list-item prepend-icon="mdi-account" :title="loggedIn ? 'پروفایل' : 'ورود'" value="Login">
                        </v-list-item>
                    </router-link>
                    <v-list-item prepend-icon="mdi-logout" title="خروج" value="logout" v-if="loggedIn"></v-list-item>
                    <v-list-item prepend-icon="mdi-twitter" title="twitter" value="twitter"></v-list-item>
                    <v-list-item prepend-icon="mdi-instagram" title="instagram" value="instagram"></v-list-item>
                </v-list>
                <v-btn variant="text" icon="mdi-chevron-right" @click="drawer = false"></v-btn>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>
<style scoped>
.toolbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    font-size: 15px;
}

.AdminHeader {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 10px 30px;
    color: white;
    background: rgba(0, 0, 0, .6);
}

.AdminHeader * {
    text-shadow: 0 0 4px black;
}

.app-bar-title {
    letter-spacing: 1.5px;
}

button {
    font-size: 15px;
}
</style>