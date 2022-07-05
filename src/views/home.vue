<script setup>
import Header from "@components/Home/Header.vue";
// import Footer from "@components/Home/Footer.vue";
// import Details from "@components/CarRent/Details.vue";
// import attributs from "@components/Home/Attributes.vue";
// import SearchResult from "@components/Home/SearchResult.vue";
import { ref } from "vue";
const searchResultsVisible = ref(false);
function scrollToResults() {
    this.searchResultsVisible = true;

    let searchResultsContainer = this.$refs.searchResults;
    searchResultsContainer.style.minHeight = "400px";

    searchResultsContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
};
</script>
<template>
    <div>
        <!-- <Details /> -->
        <Header @scrollToResults="scrollToResults" />
        <!-- <attributs />
        <div ref="searchResults">
            <Search-result v-if="searchResultsVisible" />
        </div>
        <Footer /> -->
    </div>
</template>