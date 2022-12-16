<template>
  <v-card :loading="loading" max-width="500">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/93689ce8-4210-4459-8df4-f1ee84953f5e"
    ></v-img>

    <v-card-title class="text-center text-break">
      Karavanınızı Beraber Tasarlayalım
    </v-card-title
    >

    <v-card-text>
      <div class="my-4 subtitle-1">Online Komple Tasarım</div>

      <div>
        Karavanınızı anlık olarak isteklerinize göre beraber oluşturalım
      </div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <div class="text-center">Bir Tarih Ve Saat Seçin</div>
    <v-card-text>
      <v-date-picker v-model="picker" locale="tr" color="deep-purple"></v-date-picker>
      <div class="d-flex justify-center">
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
          class="d-flex"
        >
          <v-chip large class="mx-1" v-for="(hour,index) in hours" :key="index" :value="hour">{{ hour }}</v-chip>
        </v-chip-group>
      </div>
    </v-card-text>
    <v-btn color="deep-purple" depressed @click="reserve" class="mx-1" href="#iletisim" width="18rem">
      Bu Tarİhİ Reserve Et
    </v-btn>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="deep-purple">
      İsim,Telefon ve/veya Email Adresinizi Yaztıktan Sonra Mesajınızı Gönderin En Kısa Zamanda Sizlerle İletişime Geçeceğiz.
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Kapat
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
import {eventBus} from "../../main";
export default {
  data: () => ({
    picker: new Date().toISOString().substr(0, 9),
    selection: {},
    hours: [
      "17:30", "19:30", "20:00", "21:00"
    ],
    snackbar:false,
  }),
  methods:{
    reserve(){
      this.snackbar = true;
      eventBus.$emit("dateSelected",this.picker +" "+ (this.selection!=null ? this.selection : "uygun bir saat belirledikten sonra bu"))
    }
  }
};
</script>
