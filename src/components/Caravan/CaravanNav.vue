<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top"
      id="mainNav"
      :class="display"
    >
      <div class="container">
         <a class="navbar-brand" href="#page-top"
          ><img src="../../assets/img/Logo.png" style="width:150px;height:auto;"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item" @click="scrollToTop">
              <router-link
                class="nav-link"
                tag="a"
                active-class="active"
                exact
                to="/"
                >AnaSayfa
              </router-link>
            </li>
            <li class="nav-item" @click="scrollToTop">
              <router-link
                class="nav-link"
                tag="a"
                active-class="active"
                to="karavansatis"
                >Karavan Satış</router-link
              >
            </li>
            <li class="nav-item" @click="scrollToTop">
              <router-link
                class="nav-link"
                tag="a"
                active-class="active"
                to="karavankiralama"
                >Karavan Kiralama
              </router-link>
            </li>
            <li class="nav-item" @click="scrollToTop">
              <router-link
                class="nav-link"
                tag="a"
                active-class="active"
                to="karavantasarimi"
                >Karavan Tasarımı
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="masthead2">
      <div class="container">
        <a class="btn btn-primary btn-xl text-uppercase" href="#iletisim" @click="openSnack"
          >Hemen İLETİŞİME GEÇ</a
        >
        <v-snackbar v-model="snackbar" :timeout="timeout" color="deep-purple">
          İsim,Telefon ve/veya Email Adresinizi Yaztıktan Sonra Mesajınızı Gönderin En Kısa Zamanda Sizlerle İletişime Geçeceğiz.
          <template v-slot:action="{ attrs }">
            <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
              Kapat
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      display: "displayBlock",
      snackbar:false
    };
  },
  methods: {
    scrollToTop() {
      this.$store.dispatch("scrollToTop");
    },
    openSnack(){
      this.snackbar=true
    }
  },
};
</script>
<style scoped>
.displayBlock {
  display: block !important;
}

header.masthead2 {
  padding-top: 10.5rem;
  padding-bottom: 2rem;
  text-align: center;
  color: #fff;
  background-image: url("../../assets/img/photo-1515876305430-f06edab8282a.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}
header.masthead2 .masthead2-subheading {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
header.masthead2 .masthead2-heading {
  font-size: 2rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 0rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead2 {
    padding-top: 17rem;
    padding-bottom: 12.5rem;
  }
  header.masthead2 .masthead2-subheading {
    font-size: 2.25rem;
    font-style: italic;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }
  header.masthead2 .masthead2-heading {
    font-size: 3rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
}
</style>
