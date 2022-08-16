<script setup>

</script>

<template>
    <v-card dir="rtl" class="ma-4 ym"  prepend-icon="mdi-cash-plus">
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3">
                    <v-select :items="['تراکنش خروجی', 'تراکنش ورودی']" editable variant="underlined" label="نوع تراکنش"
                        prepend-icon="mdi-cash">
                    </v-select>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field type="number" variant="underlined" label="مبلغ تراکنش"
                        prepend-icon="mdi-currency-usd">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field variant="underlined" label="طرف حساب تراکنش" prepend-icon="mdi-account">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field variant="underlined" label="شماره تراکنش" prepend-icon="mdi-numeric">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field variant="underlined" label="تاریخ تراکنش" prepend-icon="mdi-calendar">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field variant="underlined" label="ساعت تراکنش" prepend-icon="mdi-clock">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field variant="underlined" label="عنوان تراکنش" prepend-icon="mdi-text">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea variant="underlined" label="توضیحات تراکنش" prepend-icon="mdi-text">
                    </v-textarea>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
    <v-btn to="/Admin/Transactions" class="add-btn" icon color="primary" size="large">
        <v-icon>mdi-arrow-left</v-icon>
        <v-tooltip activator="parent">بازگشت</v-tooltip>
    </v-btn>
</template>
