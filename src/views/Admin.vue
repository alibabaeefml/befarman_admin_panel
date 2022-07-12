<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
import Toolbar from "@Components/Global/Toolbar/Toolbar.vue"

export default {
    name: 'App',
    components: {
        Toolbar
    },
}

</script>
