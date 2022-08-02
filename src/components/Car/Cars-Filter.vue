<script setup>
import Filters from "@components/Global/Filters/Filters.vue";
</script>
<template>
    <filters style="margin-top:20px">
        <v-card-text>
            <v-row>
                <v-col>
                    <v-text-field v-model="nameFilter" prepend-icon="mdi-car" label="نام خوردرو" variant="underlined">
                    </v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="brandFilter" prepend-icon="mdi-alpha-b-circle" label="نام برند"
                        variant="underlined"></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>
    </filters>
</template>