<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <v-carousel cycle height="400" :show-arrows="true">
      <v-carousel-item
        v-for="(picture, i) in pictures"
        :key="i"
        :src="picture.imageUrl"
      >
      </v-carousel-item>
    </v-carousel>
    <v-card-title
    class="justify-center text-center"
    primary-title
      >
      <h6>{{ caravan.brand }} {{ caravan.model }} {{ caravan.year }}</h6>
      <v-spacer></v-spacer>

      <v-dialog transition="dialog-bottom-transition" width="1200">
        <template v-slot:activator="{ on, attrs }" class="mt-5">
          <v-btn
            color="warning"
            depressed
            small
            @click="reserve"
            v-bind="attrs"
            v-on="on"
            class="white--text"
          >
            Daha Fazla Detay
            <v-chip small class="ml-1"> {{ caravan.price }} ₺</v-chip>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card max-width="1200px" class="overflow-hidden">
            <v-toolbar color="warning" dark class="mt-10">Aracımızın Detayları</v-toolbar>
            <v-card :loading="loading" class="my-6 " max-width="1200">
              <v-row>
                <v-col  class="col-12 col-lg-6 col-md-6 col-sm-12">
                  <v-carousel cycle height="360" :show-arrows="true">
                    <v-carousel-item
                      v-for="(picture, i) in pictures"
                      :key="i"
                      :src="picture.imageUrl"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col  class="col-12 col-lg-6 col-md-6 col-sm-12 ">
                  <v-card-title
                    >{{ caravan.brand }} {{ caravan.model }} {{ caravan.year }}
                    <v-spacer></v-spacer>
                  </v-card-title>

                  <v-card-text>
                    <h6>Açıklama</h6>
                    {{caravan.description}}
                  </v-card-text>
                  <v-card-text>
                    <h6>Teknik Özellikler</h6>
                    <v-row>
                      <v-col cols="6">
                        <ul>
                          <li><strong>Marka : </strong>{{ caravan.brand }}</li>
                          <li><strong>Model : </strong>{{ caravan.model }}</li>
                          <li><strong>Durumu : </strong>{{ caravan.status }}</li>
                          <li><strong>Vites : </strong>{{ caravan.gear }}</li>
                          <li><strong>Kilometre : </strong>{{ caravan.kilometer }}</li>
                        </ul>
                      </v-col>
                      <v-col cols="6">
                        <ul>
                         <li><strong>Fiyatı : </strong>{{ caravan.price }} ₺</li>
                         <li><strong>Yatak Kapasitesi : </strong>{{ caravan.capacity }}</li>
                         <li><strong>Tipi : </strong>{{ caravan.type }}</li>
                         <li><strong>Yıl : </strong>{{ caravan.year }}</li>
                        </ul>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">Detaydan ÇIK</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-title>
  </v-card>
</template>
<script>
export default {
  props: ["caravan"],
  data() {
    return {
      pictures: this.caravan.caravanPictures,
    };
  },
};
</script>