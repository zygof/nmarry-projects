<template>
  <v-app>
    <p-toolbar />
    <v-content style="background-color: white">
      <!-- <HelloWorld /> -->
      <router-view />
    </v-content>
    <p-footer :profile="profile" :icons="icons" />
  </v-app>
</template>

<script>
import PToolbar from "./components/PToolbar";
import PFooter from "./components/PFooter";
import json_profile from "./assets/data/profile.json";

export default {
  name: "App",

  components: {
    PToolbar,
    PFooter
  },

  data: () => ({
    profile: json_profile,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ]
  })
};
</script>