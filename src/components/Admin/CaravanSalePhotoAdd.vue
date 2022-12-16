<template>
  <div>
    <div class="text-center">
      <h1>{{ $route.params.id }} ID'li Satılık Karavana Fotoğraf Ekleyebilirsin {{item}}</h1>
    </div>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      name="dropzonefile"
      @vdropzone-complete="changeList"
    ></vue-dropzone>
    <v-row >
      <v-col cols="12" md="4" v-for="(image,index) in caravanPictures">
        <v-card  class="ma-3" width="350" height="250">
          <v-img :src="image.imageUrl" alt="" max-height="250"
                 max-width="350">
          </v-img>
          <div class="text-center">
            <v-btn class="ma-1" color="red" @click="deleteImage(image,index)"><v-icon>mdi-trash-can</v-icon></v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  props:["item"],
  data() {
    return {
      dropzoneOptions: this.returnDropzoneSetting(),
      data: [],
      caravanPictures:[]
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  methods: {
    getCaravans(){
      var data =  this.$store.dispatch("getPicture",this.$route.params.id)
      data.then(res=>{
          this.caravanPictures = res
      })
    },
    changeList(response){
      this.getCaravans()
    },
    returnDropzoneSetting() {
      return {
        url:
          "https://localhost:44335/api/SaleCaravanPictureUpload/Upload/" +
          this.$route.params.id,
        thumbnailWidth: 150,
        maxFilesize: 2,
        uploadMultiple: true,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        dictDefaultMessage:
          "Resimleri buraya sürükle bırak ya da tıklayıp seçerek yükleyebilirsin",
      };

    },
    deleteImage(image,index){
      console.log(this.caravanPictures)
      this.$store.dispatch("deleteImage",image.id).then(res=>{
      })
      this.caravanPictures.splice(index,1)

    }


  },
  watch:{
    dropzoneOptions:{
      handler(){

      }
    }
  },
   mounted() {
    this.getCaravans()
  }
};
</script>
