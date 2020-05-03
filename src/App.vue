<template>
  <v-app>
    <v-layout v-if="this.$route.path == '/'">
      <p-toolbar />
    </v-layout>
    <v-layout v-else>
      <p-toolbar2 :profile="profile"/>
    </v-layout>
    <v-content style="background-color: white">
      <!-- <HelloWorld /> -->
      <router-view />
    </v-content>
    <p-footer :profile="profile" :icons="icons" />
  </v-app>
</template>

<script>
import PToolbar from "./components/PToolbar";
import PToolbar2 from "./components/PToolbar2";
import PFooter from "./components/PFooter";
import json_profile from "./assets/data/profile.json";

export default {
  name: "App",

  components: {
    PToolbar,
    PToolbar2,
    PFooter
  },

  data: () => ({
    profile: json_profile,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>