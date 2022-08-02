<script setup>
const props = defineProps(['btnColor', 'btnSize','btnText', 'variant', 'isIcon', 'icon', 'iconColor',
    'size', 'variant', 'tooltipTxt', 'tooltipLoc'])
</script>
<template>
    <v-btn :icon="isIcon" :color="btnColor" :size="btnSize" :variant="variant || 'elevated'">
        <v-icon v-if="icon" :style="{ fontSize: size }" :color="iconColor">{{ icon }}</v-icon>
        {{ btnText }}
        <v-tooltip v-if="tooltipTxt" activator="parent" :location="tooltipLoc || 'bottom'">{{tooltipTxt}}</v-tooltip>
    </v-btn>

</template>

<style>

</style>