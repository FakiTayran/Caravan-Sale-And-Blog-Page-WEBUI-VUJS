<template>
  <header class="masthead">
    <div class="container">
      <div class="masthead-subheading">Yeni Hayatınıza Hoşgeldiniz</div>
      <a class="btn btn-primary btn-xl text-uppercase" href="#iletisim" @click="openSnack"
        >Hemen İletİşİme Geç</a
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
</template>
<script>
export  default {
  data(){
    return{
      snackbar:false
    }
  },
  methods:{
    openSnack(){
      this.snackbar=true
    }
  }
}
</script>

