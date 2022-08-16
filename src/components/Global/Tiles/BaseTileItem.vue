<script setup>
defineProps(['color', 'icon', 'txt', 'sub', 'badgeTxt'])
</script>
<template>
    <v-btn :color="color" variant="tonal" block height="150">
        <v-icon style="font-size:60px">mdi-{{ icon }}</v-icon>
        <div>
            <div>{{ txt }}</div>
            <div class="sub">{{ sub }}</div>
            <div :style="{color:color}" class="badge">{{ badgeTxt }}</div>
        </div>
    </v-btn>
</template>
<style scoped>
button {
    font-family: ym;
    font-size: 25px;
    border-radius: 8px;
}

.sub {
    font-family: mm;
    font-size: 15px;
    letter-spacing: 10px;
}

.badge {
    position: absolute;
    left: 5px;
    bottom: 5px;
    font-size: 15px;
    font-family: ym;
}
</style>