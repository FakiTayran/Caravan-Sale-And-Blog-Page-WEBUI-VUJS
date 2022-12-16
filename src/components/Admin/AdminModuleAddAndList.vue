<template>
  <v-row>
    <h3>Modül Paneli</h3>
    <v-col>
      <v-form>
        <v-container>
          <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="module.name"
                  :counter="50"
                  label="Modül İsmi"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="module.price"
                  label="Modül Fiyatı"
                  required
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-file-input
                  v-model="module.image"
                  accept="image/*"
                  name="file"
                  label="Modül Görseli"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="module.description"
                  label="Modül açıklaması"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="text-right">
                <v-btn color="primary" @click="createModule">Ekle</v-btn>
              </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
    <v-col>
      <v-card>
        <v-card-title> </v-card-title>
        <v-data-table
          :headers="headers"
          :items="getModules"
          :search="search"
          item-key="id"
        >
          <template v-slot:[`item.Image`]="{ item }">
            <img :src="item.modulePicture.pictureUri" :alt="item.name" height="100" width="100" />
          </template>
           <template v-slot:[`item.delete`]="{item}">
            <v-btn color="danger" depressed>
              <v-icon large color="red darken-2" @click="deleteModule(item.id)"> mdi-delete </v-icon>
            </v-btn>
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
      module: {
        name: "",
        price: "",
        description: "",
        image: File,
      },
      search: "",
      headers: [
        { text: "Resim", value: "Image" },
        {
          text: "Karavan Modülleri",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Fiyat", value: "price" },
        { text: "Açıklama", value: "description" },
        { text: "Sil", value: "delete" },
        { text: "Düzenle", value: "edit" },
      ]
    };
  },
  methods: {
    createModule() {
       let formData = new FormData();
       formData.append("file", this.module.image);
      this.$store
        .dispatch("addModule", {
          Name: this.module.name,
          Price: this.module.price,
          Description: this.module.description,
          file: formData,
        });
    },
     deleteModule(id){
      this.$store.dispatch("deleteModule",id)
    }
  },
 computed: {
    ...mapGetters(["getModules"])
  },
  created(){
      this.$store.dispatch("getAllModules")
  }
};
</script>
