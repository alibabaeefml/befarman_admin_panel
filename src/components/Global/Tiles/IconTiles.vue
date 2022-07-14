<script setup>
import { computed } from "@vue/runtime-core"
import { useDisplay } from "vuetify/lib/framework.mjs"

const sm = computed(() => useDisplay().width.value < 800)
const props = defineProps({
    // Tile:TileData,
    height: { default: "180px" },
    theme: { default: "theme-black" },
    Iconcolor: { default: "#686868" },
    // --------------------------------------------
    TitleFa: { default: " عنوان بخش " },
    TitleEn: { default: " Section Title " },
    Desc: { default: "" },
    // --------------------------------------------
    GradientDirection: { default: "to right" },
    GradientBegin: { default: "eeeeee" },
    GradientEnd: { default: "dadada" },
    border: { default: "" },
    // --------------------------------------------
    icon: { default: "" },
    iconColor: { default: "black" },
    // --------------------------------------------
    Quantity: { default: "" },
    QuantitySize: { default: "100" },
    QuantityClass: { default: "quantity" },
    QuantityColor: { default: "#9e9e9e" },
    QuantityTopLabel: { default: "#" },
    QuantityBottomLabel: { default: "" },
    //--------------------------------------------
    numberic: { default: "" },
    DES: { default: "" },
    Fa_title_color: { default: "" },
})
</script>
<template>
    <div :class="`we-icon-tile ${theme}`" :style="
    {
        background: 'linear-gradient(' + GradientDirection + ', #' + GradientBegin + ' , #' + GradientEnd + ')',
        height: height + 'px', border: border, justifyContent: !sm ? 'space-evenly' : 'flex-start'
    }">
        <div class="item">
            <div>
                <v-icon :style="'color:' + Iconcolor" class="ic">{{ icon }}</v-icon>
                <div class="info">
                    <div :style="'color:' + Fa_title_color" class="Fa medium"> {{ TitleFa }} </div>
                    <div :style="'color:' + Fa_title_color" class="En"> {{ TitleEn }} </div>
                    <div class="desc Fa Thin" v-if="Desc != ''" v-html="Desc"></div>
                </div>
            </div>

        </div>
        <div class="numberic" :style="{ color: Fa_title_color }">
            <h1 style="font-family: mb;">{{ numberic }}</h1>
            <h4>{{ DES }}</h4>
        </div>
    </div>
</template>
<style scoped>
.we-icon-tile {
    display: flex;
    align-items: center;
    margin: 5px;
    padding: 30px;
    border-radius: 5px;
    font-family: ym;
    transition: 0.5s;
}

.we-icon-tile:hover {
    filter: grayscale(25);
    border: black 1px solid;
}

.item {
    display: flex;
    justify-content: right;
    align-items: center;
}
</style>