<template>
    <v-container fluid class="attr pa-13">
        <v-row>
            <v-col v-for="(attribute, key) in attributes" :key="key" align-self="center" cols="12" lg="4" xl="4" md="4" sm="12" >
                <attr-items
                    :icon="attribute.icon"
                    :title="attribute.title"
                    :des="attribute.des"
                />
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
    </v-container>
</template>

<script>
    import AttrItems from "../Global/attrItems";

    export default {
        name: "Attributes",
        components: {AttrItems},
        data: () => ({
            attributes: [
                {
                    icon: 'WMi-shield',
                    title: 'پرداخت امن',
                    des: 'ما به رضایت شما اهمیت می دهیم',
                }, {
                    icon: 'WMi-align-right',
                    title: 'تنوع خودرو',
                    des: 'همه را گرد هم آورده ایم',
                }, {
                    icon: 'WMi-donut',
                    title: 'تنها در 3 مرحله',
                    des: 'ساده ترین که توانستیم',
                },
            ]
        })
    }
</script>
<style scoped>
    .attr {
        background-color: #eeeeee;
        border-bottom: 1px solid #d1d1d1;
    }
</style>
