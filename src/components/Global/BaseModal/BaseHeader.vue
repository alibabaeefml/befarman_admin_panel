<script setup>
const props = defineProps(["icon", "title", "subtitle"])
</script>
<template>
    <div class="headlogin">
        <v-btn class="close-btn" color="black" @click="$emit('toggleModal')" icon="mdi-close"></v-btn>
        <v-icon color="white" size="x-large">{{ icon }}</v-icon>
        <div class="filterInfo">
            <h1 class="filter_pr">{{ title }}</h1>
            <h1 class="filter_en">{{ subtitle }}</h1>
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
    letter-spacing: 10px;
    margin-right: -15px;
}
.close-btn{
    position: absolute;
    left:5px;
    top: 8px;
}
</style>