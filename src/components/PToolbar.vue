<template>
  <div>
    <v-app-bar flat absolute dark height="70px" src="../assets/images/home.jpg">
      <v-toolbar color="transparent" class="no-shadow" justify-center>
        <v-container>
          <v-layout>
            <v-toolbar-title
              color="transparent"
              style="cursor: pointer"
              class="no-shadow display-1 font-weight-bold"
              @click="$router.push('/')"
            >NM P.</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.title">
              <v-btn :href="item.link" text>{{item.title}}</v-btn>
            </v-toolbar-items>

            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" class="hidden-md-and-up">
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :href="item.link"
                >
                  <v-list-item-title>
                    <div>{{item.title}}</div>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-layout>
        </v-container>
      </v-toolbar>
    </v-app-bar>
  </div>
</template>

<script>
import json_profile from "../assets/data/profile.json";

export default {
  data() {
    return {
      title: "Mes projets",
      profile: json_profile,
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      },
      items: [
        { title: "À propos", link: "/#about" },
        { title: "Formations", link: "/#training" },
        { title: "Mes projets", link: "/#projects" },
        { title: "Contact", link: "/#contact" }
      ]
    };
  },

  methods: {
    menuItems() {
      return this.items;
    }
  }
};
</script>

<style>
.no-shadow {
  box-shadow: none !important;
}
</style>