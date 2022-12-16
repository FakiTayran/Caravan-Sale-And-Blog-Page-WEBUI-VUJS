<template>
  <section id="satilikkaravanlar">
    <div style="margin-top:0" class="text-center">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-sm-12"
          v-for="caravan in getCaravansForSale"
          :key="caravan.id"
        >
          <CaravanSaleCard :caravan="caravan"></CaravanSaleCard>
        </div>
        
      </div>
    </div>
  </section>
</template>
<script>
import CaravanSaleCard from "./CaravanSaleCard";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      caravans: [],
    };
  },
  components: {
    CaravanSaleCard,
  },
  computed: {
    ...mapGetters(["getCaravansForSale"]),
  },
  created() {
    this.$store.dispatch("getAllCaravans");
  },
};
</script>
<style scoped>
  section #satilikkaravanlar{
    padding: 0px;
  }
 @media (min-width: 768px)
 {
   section {
       padding: 0;
   }
 }
</style>