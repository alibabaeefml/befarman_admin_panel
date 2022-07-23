<script setup>

</script>
<template>
    <div class="container">
        <v-card title="فیـــلترهــا" subtitle="F I L T E R S" prepend-icon="mdi-filter">
            <slot>
            </slot>
            <v-card-actions style="direction:ltr;position: absolute;left: 10px;top: 10px;">
                <v-btn color="secondary" icon="mdi-close" variant="elevated"></v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<style scoped>
.container {
    font-family: ym;
    margin: 0 15px;
    direction: rtl;
}
</style>
