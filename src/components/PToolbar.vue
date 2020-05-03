<template>
  <v-app-bar flat absolute color="transparent" dark height="120px" class="pb-5">
    <v-toolbar color="transparent" class="toolbar" justify-center>
      <v-container>
        <v-layout>
          <v-toolbar-title class="display-1 font-weight-bold">NM P.</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item">
            <v-btn @click="$vuetify.goTo(item.link,options )" text>{{item.title}}</v-btn>
          </v-toolbar-items>

          <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  icon
                  v-on="on"
                  class="hidden-md-and-up"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
  
              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" @click="$vuetify.goTo(item.link,options )">
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
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
  data() {
    return {
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
.toolbar {
  box-shadow: none !important;
}
</style>