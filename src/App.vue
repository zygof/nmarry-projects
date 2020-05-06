<template>
  <v-app>
    <v-layout v-if="this.$route.path == '/'">
      <p-toolbarHome :profile="profile"/>
    </v-layout>
    <v-layout v-else style="flex : 0; margin-top: 70px;">
      <p-toolbar :profile="profile"/>
    </v-layout>
    <v-content style="background-color: white">
      <router-view />
    </v-content>

    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      @click="toTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

    <p-footer :profile="profile" :icons="icons" />
  </v-app>
</template>

<script>
import PToolbarHome from "./components/PToolbarHome";
import PToolbar from "./components/PToolbar";
import PFooter from "./components/PFooter";
import json_profile from "./assets/data/profile.json";

export default {
  name: "App",

  components: {
    PToolbarHome,
    PToolbar,
    PFooter
  },

  data: () => ({
    fab: false,
    profile: json_profile,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>