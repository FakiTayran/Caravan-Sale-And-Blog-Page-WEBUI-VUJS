<template>
  <div>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Eleven Feet </v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <h4 class="text-center">Karavan</h4>
      <v-divider></v-divider>

      <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            active-class="active"
            to="/karavansatiskontrolpanel"
            >Karavan Satış Panel
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            active-class="active"
            to="karavankiralamakontrolpanel"
            >Karavan Kiralama Panel</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            active-class="active"
            to="tasarimranduvalarim"
            >Karavan Tasarım Panel
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            tag="a"
            active-class="active"
            to="karavanmodulkontrolpanel"
            >Karavan Modül Panel
          </router-link>
        </li>
      </ul>
      <v-divider></v-divider>
      <h4 class="text-center">Camping</h4>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon x-large>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Yazı Ekle</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon medium>fas fa-caravan</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lorem</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon x-large>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lorem</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <h4 class="text-center">Sanat</h4>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon x-large>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Yazı Ekle</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon medium>fas fa-caravan</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lorem</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon x-large>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Lorem</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="d-flex justify-content-end">
      <div>
        <v-btn block depressed color="error" @click="logoutFromAdmin">
          Çıkış
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import router from "../../router";
export default {
  methods: {
    logoutFromAdmin() {
      localStorage.removeItem("token");
      router.replace("/login");
    },
  },
};
</script>

<style>
body {
  background-color: #a7a0bb5c;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-active {
  transition: opacity 0.5s ease-out;
  opacity: 0;
}
</style>