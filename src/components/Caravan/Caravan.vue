<template>
  <transition name="fade" mode="out-in">
    <div>
      <CaravanNav></CaravanNav>
      <div class="container">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
  </transition>
</template>
<script>
import CaravanNav from "./CaravanNav";
import Footer from "../Layout/Footer";

export default {
  components: {
    CaravanNav,
    Footer,
  },
};
</script>
<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
</style>