<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <img src="https://i.ytimg.com/vi/COFmtZqaVNs/maxresdefault.jpg"  width="230" height="auto" alt="fiatDucato">
      </v-col>
      <v-col cols="12" md="4">
        <p><strong>Kendi Getireceğiniz Aracınıza Başlangıç Pakete Ek Aşağıdaki Tablodan Ekstra Modül Ekleyebilir ve Maliyetlerinizi Hesaplayabilirsiniz.</strong></p>
        <small class="text-muted">Aracı Bizim Seçmemizi istiyorsanız <a href="#iletisim">İletişime Geçin</a></small>
      </v-col>
      <v-col cols="12" md="4">
        <v-chip color="warning">Başlangıç Fiyatı 80000 ₺ </v-chip>
        <hr>
        <v-chip color="warning" v-if="selected.length>0">Ekstra Modül Dahil Fiyat {{this.totalAmount}} ₺</v-chip>
      </v-col>
    </v-row>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="getModules"
      item-key="id"
      show-select
      class="elevation-1"
      :footer-props="{'items-per-page-text':'Sayfa Başına Modül'}"
    >
      <template v-slot:[`item.Image`]="{ item }">
        <img
          :src="item.modulePicture.pictureUri"
          :alt="item.name"
          height="100"
          width="100"
        />
      </template>
      <template top>
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </template>
    </v-data-table>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar" :timeout="timeout">
        Toplam Tutar <v-chip color="warning">{{totalAmount}} ₺</v-chip>
        <template v-slot:action="{ attrs }">
          <v-btn color="warning" text v-bind="attrs" @click="snackbar = false">
            Kapat
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      totalAmount: 80000,
      singleSelect: false,
      snackbar:false,
      selected: [],
      timeout:10000,
      headers: [
        { text: "Resim", value: "Image" },
        {
          text: "Ekstra Karavan Modülleri",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Açıklama", value: "description" },
        { text: "Fiyat", value: "price" },
      ],
    };
  },
  computed: {
    ...mapGetters(["getModules"]),
  },
  created() {
    this.$store.dispatch("getAllModules");
  },
  watch:{
    selected:{
      handler(val){
        console.log(val)
        this.snackbar = true;
        if(val){
          this.totalAmount = 80000
          val.map(x=>{
             this.totalAmount += x.price;
          })
        }
      }
    }
  }
};
</script>
