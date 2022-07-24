<script setup>
import { computed, ref } from '@vue/runtime-core';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import bg from '@/assets/Images/Header.jpg'
import { useRoute } from 'vue-router';
const mobile = computed(() => useDisplay().width.value < 820);
const height = computed(() => useDisplay().height.value)
const drawer = ref(true);
const rail = ref(true);
const loggedIn = ref(true);
const isAdmin = ref(true);
const user = ref('')
const props = defineProps(['currentPath']);
const routeName = computed(() => useRoute().meta.title)
</script>

<template>
    <div v-if="!mobile" class="toolbar"
        :style="currentPath !== '/' && currentPath !== '/login' ? { background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : ''">
        <v-toolbar color="rgba(0,0,0,.6)" :style="{ color: 'white', fontFamily: 'ym', padding: '20px' }">
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
            <router-link to="/login" class="link">
                <v-btn>
                    {{ loggedIn ? 'پروفایل' : 'ورود' }}
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </router-link>
            <router-link class="link" to="/admin/home">
                <v-btn v-if="isAdmin">
                    پنل ادمین
                </v-btn>
            </router-link>
            <div>{{ user ? user : 'کاربر' }} عزیز، خوش آمدی</div>
            <v-btn>
                دانلود اپلیکیشن اندروید
            </v-btn>
            <router-link to="/" class="link">
                <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                </v-btn>
            </router-link>
        </v-toolbar>
        <div class="adminHeader" v-if="currentPath.includes('admin')">
            <div style="font-family:mm;font-size: 20px;letter-spacing: 10px;">MANAGEMENT</div>
            <div style="font-family:yr;font-size: 20px;">
                <router-link class="link" to="/admin/home">مدیریت</router-link>
                <span style="font-size:15px;margin-right:10px">
                    {{ currentPath !== '/admin/home' ? ' > ' + routeName : '' }}
                </span>
            </div>
        </div>
    </div>
    <v-card v-else :style="{ zIndex: 999999, cursor: rail?'cell':'default' }">

        <v-navigation-drawer v-model="drawer" @click="rail = false" :rail="rail" permanent location="right">

            <v-list-item :style="{ letterSpacing: '1.5px', fontFamily: 'mm' }" prepend-avatar="/favicon.ico"
                title="BEFARMAN APP">
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav right :style="{ fontFamily: 'ym' }">
                <router-link to="/" class="link">
                    <v-list-item prepend-icon="mdi-home" title="صفحه اصلی" value="home"></v-list-item>
                </router-link>
                <v-list-item prepend-icon="mdi-android" title="دانلود اپلیکیشن اندروید" value="android">
                </v-list-item>
                <v-list-item prepend-icon="mdi-information" title="درباره ما" value="aboutus"></v-list-item>
                <router-link class="link" to="/admin/home">
                    <v-list-item prepend-icon="mdi-account-key" title="پنل ادمین" value="adminpanel" v-if="isAdmin">
                    </v-list-item>
                </router-link>

                <router-link to="/login" class="link">
                    <v-list-item prepend-icon="mdi-account" :title="loggedIn ? 'پروفایل' : 'ورود'" value="login">
                    </v-list-item>
                </router-link>

                <v-list-item prepend-icon="mdi-logout" title="خروج" value="logout" v-if="loggedIn"></v-list-item>
                <v-list-item prepend-icon="mdi-twitter" title="twitter" value="twitter"></v-list-item>
                <v-list-item prepend-icon="mdi-instagram" title="instagram" value="instagram"></v-list-item>
            </v-list>
            <v-btn v-if="!rail" variant="text" icon="mdi-chevron-right" @click.stop="rail = !rail"></v-btn>
        </v-navigation-drawer>
    </v-card>
</template>
<style scoped>
.toolbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
}

.adminHeader {
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 20px 0;
    padding: 10px 30px;
    color: white;
    background: rgba(0, 0, 0, .6);
}

.adminHeader * {
    text-shadow: 0 0 4px black;
}
</style>