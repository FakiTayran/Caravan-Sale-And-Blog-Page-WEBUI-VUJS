<template>
  <body>
    <HomePageNav></HomePageNav>
    <HomePageHeader></HomePageHeader>
    <HomePageCaravan></HomePageCaravan>
    <HomePageCamping></HomePageCamping>
    <HomePageArt></HomePageArt>
    <HomePageAbout></HomePageAbout>
    <Footer></Footer>
  </body>
</template>
<script>
import HomePageNav from "./HomePageNav";
import HomePageHeader from "./HomePageHeader";
import HomePageCaravan from "./HomePageCaravan";
import HomePageCamping from "./HomePageCamping";
import HomePageArt from "./HomePageArt";
import HomePageAbout from "./HomePageAbout";
import Footer from '../Layout/Footer';
export default {
  components: {
    HomePageNav,
    HomePageHeader,
    HomePageCaravan,
    HomePageCamping,
    HomePageArt,
    HomePageAbout,
    Footer
  },
};
</script>