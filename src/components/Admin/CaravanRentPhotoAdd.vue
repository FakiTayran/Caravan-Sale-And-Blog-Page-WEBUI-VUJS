<template>
  <div>
    <div class="text-center">
      <h1>{{ $route.params.id }} ID'li Kiralık Karavana Fotoğraf Ekleyebilirsin</h1>
    </div>
    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
      name="dropzonefile"
    ></vue-dropzone>
  </div>
</template>
<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  data() {
    return {
      dropzoneOptions: this.returnDropzoneSetting(),
      data: [],
    };
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  methods: {
    returnDropzoneSetting() {
      return {
        url:
          "https://localhost:44335/api/RentCaravanPictureUpload/Upload/" +
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
    // onAdded(files) {
    //   // let reader = new FileReader();
    //   // console.log(JSON.stringify(e));
    //   // reader.readAsDataURL(e[0]);
    //   // reader.onload = () => {
    //   //   const base64 = reader.result;
    //   // };

    //   var formData = new FormData();
    //   formData.(files);
    //   this.data.push(formData);
    //   this.$refs.myVueDropzone.manuallyAddFile(this.data,"https://localhost:44335/api/SaleCaravanPictureUpload/Upload/" +
    //   this.$route.params.id)
    //   this.$refs.myVueDropzone.processQueue();
    // },
  },
};
</script>