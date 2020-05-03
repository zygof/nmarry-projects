<template>
  <div>
    <v-app-bar flat absolute dark height="100px" max-height="500px" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
      <v-toolbar color="transparent" class="no-shadow" justify-center>
        <v-container>
          <v-layout>
            <v-toolbar-title
              href="/"
              color="transparent"
              class="no-shadow display-1 font-weight-bold"
            >NM P.</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.title">
              <v-btn @click="$vuetify.goTo(item.link,options )" text>{{item.title}}</v-btn>
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
                  @click="$vuetify.goTo(item.link,options )"
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
        { title: "À propos", link: "#about" },
        { title: "Formations", link: "#training" },
        { title: "Mes projets", link: "#projects" },
        { title: "Contact", link: "#contact" }
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