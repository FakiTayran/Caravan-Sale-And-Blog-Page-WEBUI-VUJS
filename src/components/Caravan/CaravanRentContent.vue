<template>
  <section id="kiralikkaravanlar">
    <div style="margin-top:0" class="text-center">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-12"
          v-for="caravan in getCaravansForRent"
          :key="caravan.id"
        >
          <CaravanRentCard :caravan="caravan"></CaravanRentCard>
        </div>
        
      </div>
    </div>
  </section>
</template>
<script>
import CaravanRentCard from "./CaravanRentCard";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      caravans: [],
    };
  },
  components: {
    CaravanRentCard,
  },
  computed: {
    ...mapGetters(["getCaravansForRent"]),
  },
  created() {
    this.$store.dispatch("getAllRentCaravans");
  },
};
</script>
<style scoped>
  section #kiralikkaravanlar{
    padding: 0px;
  }
 @media (min-width: 768px)
 {
   section {
       padding: 0;
   }
 }
</style>