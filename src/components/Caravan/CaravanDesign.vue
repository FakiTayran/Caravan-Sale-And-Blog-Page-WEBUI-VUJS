<template>
  <div style="margin-top: 2" class="text-center container">
    <div class="row">
      <h1 class="rounded text-warning">Kendi Karavanını Oluştur</h1>
      <hr>
      <div class="col-md-4"><CaravanDesignMeet></CaravanDesignMeet></div>
      <div class="col-md-8"><CaravansModule></CaravansModule></div>
    </div>
  </div>
</template>
<script>
import CaravanDesignMeet from "./CaravanDesignMeet";
import CaravansModule from "./CaravansModule";

export default {
  components: {
    CaravanDesignMeet,
    CaravansModule,
  },
};
</script>
<style>
</style>
