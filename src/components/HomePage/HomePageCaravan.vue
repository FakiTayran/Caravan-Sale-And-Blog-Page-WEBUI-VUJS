<template>
  <section class="page-section" id="karavan">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Karavan</h2>
        <h3 class="section-subheading text-muted">
          Hayallerinizi Ertelemeyin...
        </h3>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-caravan fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="my-3" @click="scrollToTop">
            <router-link tag="a" to="karavansatis" class="nav-link">
              Karavan Almak İstiyorum <i class="fas fa-hand-point-left"></i>
            </router-link>
          </h4>
          <p class="text-muted">
            Stoğumuzdaki Satılık Karavanlar İçin Tıklayınız
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="my-3" @click="scrollToTop">
            <router-link tag="a" to="karavantasarimi" class="nav-link">
              Karavan Tasarlatmak İstiyorum <i class="fas fa-hand-point-left"></i>
            </router-link>
          </h4>
          <p class="text-muted">
            Uzman Tasarımcılarımız Tarafından Sizin İsteklerinize Göre
            Oluşturulmuş Karavan Tasarımı Yaptırmak İçin Tıklayınız.
          </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="my-3" @click="scrollToTop">
            <router-link tag="a" to="karavankiralama" class="nav-link">
              Karavan Kiralamak İstiyorum <i class="fas fa-hand-point-left"></i>
            </router-link>
          </h4>
          <p class="text-muted">
            Günlük,Haftalık,Aylık Karavan Kiralamak İçin Tıklayınız.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      this.$store.dispatch("scrollToTop");
    },
  },
};
</script>
