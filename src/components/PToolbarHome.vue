<template>
  <v-app-bar flat absolute color="transparent" dark height="120px" class="pb-5">
    <v-toolbar color="transparent" class="no-shadow" justify-center style="padding:0%">
      <v-container style="padding:0%">
        <v-layout style="padding:0%">
            <v-toolbar-title color="transparent" style="line-height:2.7rem;" class="display-1 font-weight-bold">NM</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down" v-for="item in items" :key="item.title">
              <v-btn @click="$vuetify.goTo(item.link,options )" text>{{item.title}}</v-btn>
            </v-toolbar-items>

          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on" class="hidden-md-and-up">
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
</template>

<script>
import data_profile from "../assets/data/profile.json";

export default {
  data() {
    return {
      profile: data_profile,
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

.profile {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: center;
}
.v-toolbar__content{
    padding-right: 5px !important;
    padding-left: 5px !important;
}
</style>