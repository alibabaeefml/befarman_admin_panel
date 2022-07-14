<script setup>
import { computed, onMounted } from '@vue/runtime-core'
import { useDisplay } from 'vuetify/lib/framework.mjs'
const carsCount = 10000
const requestsCount = 1000
const rantablesCount = 100000
const transCount = 1000
const usersCount = 100
const smsCounts = 100
const sm = computed(() => useDisplay().width.value < 800)
</script>

<template>
    <v-container :style="{ margin: sm ? '0' : '230px auto 0 auto', width: sm ? '88%' : auto, direction: 'rtl' }">
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="5" xl="4">

                <router-link class="link" to="/admin/Cars">
                    <v-btn class="adminbtn" color="pink lighten" variant="outlined">
                        <v-icon>mdi-car</v-icon>
                        <div>
                            <div>خـــــودرو ها</div>
                            <div class="sub">AUTOMOBILE</div>
                            <div class="badge">{{ carsCount }} خودرو</div>
                        </div>
                    </v-btn>
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" to="/admin/Cars">
                    <v-btn class="adminbtn" color="grey lighten" variant="outlined">
                        <v-icon>mdi-clock</v-icon>
                        <div>
                            <div>خـــــودرو های اجاره ای</div>
                            <div class="sub">RENTABLES</div>
                            <div class="badge">{{ rantablesCount }} خودرو</div>
                        </div>
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" to="/admin/Cars">
                    <v-btn class="adminbtn" color="orange lighten" variant="outlined">
                        <v-icon>mdi-account-question</v-icon>
                        <div>
                            <div>درخواست ها</div>
                            <div class="sub">REQUESTS</div>
                            <div class="badge">{{ requestsCount }} درخواست</div>
                        </div>
                    </v-btn>
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" to="/admin/Cars">
                    <v-btn class="adminbtn" color="cyan lighten" variant="outlined">
                        <v-icon>mdi-account-group</v-icon>
                        <div>
                            <div>کاربران</div>
                            <div class="sub">USERS</div>
                            <div class="badge">{{ usersCount }} کاربر</div>
                        </div>
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col class="pa-1" cols="12" lg="7" xl="8">
                <router-link class="link" to="/admin/Cars">
                    <v-btn class="adminbtn" color="blue lighten" variant="outlined">
                        <v-icon>mdi-cash</v-icon>
                        <div>
                            <div>پنل تراکنش ها</div>
                            <div class="sub">TRANSACTIONS</div>
                            <div class="badge">{{ transCount }} تراکنش</div>
                        </div>
                    </v-btn>
                </router-link>
            </v-col>
            <v-col class="pa-1" cols="12" lg="5" xl="4">
                <router-link class="link" to="/admin/Cars">
                    <v-btn class="adminbtn" color="red lighten" variant="outlined">
                        <v-icon>mdi-message-text</v-icon>
                        <div>
                            <div>مدیریت پیامک ها</div>
                            <div class="sub">SMS</div>
                            <div class="badge">{{ smsCounts }} پیامک</div>
                        </div>
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
button {
    font-family: ym;
    font-size: 20px;
}

.adminbtn {
    width: 100%;
    height: 150px;
}

.sub {
    font-family: mm;
    font-size: 15px;
    letter-spacing: 10px;
}
.badge{
    position: absolute;
    left: 5px;
    bottom: 5px;
    color: black;
    font-size: 10px;
}
</style>