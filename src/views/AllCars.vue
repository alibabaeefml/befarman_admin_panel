<template>
  <div>
      <Details/>
      <add-new-request/>
    <CarFilter />
    <search-item v-for="car in getRentCarsPublic" :key="car.id" :car="car"/>
    <infinite-loading @infinite="infiniteHandler"> </infinite-loading>
  </div>
</template>
<script>
import CarFilter from "../components/Global/CarFilter/CarFiltersPublic";
import SearchItem from "../components/Home/SearchItem";
import { mapActions, mapGetters, mapMutations } from "vuex";
import AddNewRequest from "../components/public/AddNewRequest";
import Details from "../components/CarRent/Details";
export default {
  name: "AllCars",
  components: {Details, AddNewRequest, SearchItem, CarFilter },
  data: () => ({
    page: 0,
  }),
  methods: {
    ...mapActions("RentCarsPublic", ["loadCarsPublic"]),
    ...mapMutations("RentCarsPublic", ["SET_RENT_CARS_FILTERS_PUBLIC"]),
    async infiniteHandler($state) {
      const response = await this.loadCarsPublic(this.page + 1);
      if (response.status === 200) {
        if (response.data.meta.current_page < response.data.meta.last_page) {
          this.page = response.data.meta.current_page;
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },
  },
  computed: {
    ...mapGetters("RentCarsPublic", ["getRentCarsPublic"]),
  },
};
</script>

<style scoped>
</style>
