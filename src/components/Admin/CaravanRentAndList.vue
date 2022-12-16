<template>
  <v-row>
    <v-col>
      <v-form v-model="form.valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.brand"
                :counter="10"
                label="Araç Markası"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.model"
                :counter="10"
                label="Araç Modeli"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                :items="form.types"
                label="Tipi"
                v-model="form.selectedType"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.price"
                label="Fiyatı"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.kilometer"
                label="Kilometre"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                :items="form.gears"
                label="Vites"
                v-model="form.selectedGear"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.capacity"
                label="Yatak Kapasitesi"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                :items="form.status"
                label="Durumu"
                v-model="form.selectedStatus"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="form.year"
                label="Üretim Yılı"
                required
                type="number"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-textarea
                v-model="form.description"
                label="Açıklama"
                required
                type="textarea"
              ></v-textarea>
            </v-col>
            <v-btn depressed color="primary" @click="submitForm">Ekle</v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="getCaravansForRent"
          :search="search"
        >
          <template v-slot:[`item.delete`]="{item}">
            <v-btn color="danger" depressed>
              <v-icon large color="red darken-2" @click="deleteCaravan(item.id)"> mdi-delete </v-icon>
            </v-btn>
          </template>
          <template v-slot:[`item.addPicture`]="{ item }">
            <router-link tag="v-btn" color="danger" depressed :to="'/karavankiralamakontrolpanel/'+(item.id)+'/karavankiralamafotografekleme'">
              <v-icon large color="primary darken-2">
                mdi-arrow-up-bold-box-outline
              </v-icon>
            </router-link>
          </template>
          <template v-slot:[`item.edit`]>
            <v-btn color="danger" depressed>
              <v-icon large color="orange darken-2"> mdi-table-edit </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },

        {
          text: "Kiralık Karavanlarım",
          align: "start",
          filterable: false,
          value: "brand",
        },
        { text: "Fiyat", value: "price" },
        { text: "Sil", value: "delete" },
        { text: "Fotoğraf Ekle", value: "addPicture" },
        { text: "Düzenle", value: "edit" },
      ],
      caravans: [],
      form: {
        brand: "",
        model: "",
        types: ["Alkovenli", "Panelvan", "Yarı Entegre"],
        selectedType: "",
        price: Number,
        kilometer: Number,
        gears: ["Otomatik", "Yarı Otomatik", "Manuel"],
        selectedGear: "",
        capacity: Number,
        status: ["Sıfır", "İkinci El"],
        selectedStatus: "",
        year: Number,
        description: "",
        pictures: [],
      },
    };
  },
  methods: {
    submitForm() {
      this.$store
        .dispatch("addCaravanForRent", {
          brand: this.form.brand,
          model: this.form.model,
          type: this.form.selectedType,
          price: this.form.price,
          kilometer: this.form.kilometer,
          gear: this.form.selectedGear,
          capacity: this.form.capacity,
          status: this.form.selectedStatus,
          year: this.form.year,
          description: this.form.description,
        })
        .then((res) => {
          
        });
    },
    deleteCaravan(id){
      console.log(id)
      this.$store.dispatch("deleteRentCaravan",id)
    }
  },
  watch: {
    getToken() {
      return localStorage.getItem("token").value;
    },
  },
  computed: {
    ...mapGetters(["getCaravansForRent"])
  },
  created() {
    this.$store.dispatch("getAllRentCaravans");
  },
};
</script>