<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-img
      dark
      max-height="500px"
      src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    >
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div class="display-2 font-weight-bold">{{profil.firstname}} {{profil.name}}, 
                {{  Math.abs(new Date(Date.now()- new Date(profil.birthday_y, profil.birthday_m, profil.birthday_d).getTime()).getUTCFullYear() - 1970) }} ans 
                <img src='../assets/pictures/france.jpg' height="25px">
              </div>
              <div class="headline">{{profil.job}}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="about">À propos de moi</div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{profil.aboutText}}</div>
          <div
            class="body-1 mt-3"
          > Mon rêve?? Développer mon île La Réunion d'une toute autre manière... 😌😌</div>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="portfolio">Mes projets</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in projects.data">
              <v-flex :key="i" xs12 sm6 md4>
                <p-portfolio-app :app="app" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold" id="contact">Contact</div>
        </v-flex>
        <template v-for="(contact, i) in contactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info :contact="contact" />
          </v-flex>
        </template>
      </v-layout>
      <!-- <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold">Press</div>
        </v-flex>
        <v-flex xs12>
          <v-layout>
            <v-card width="">
              <v-card-title>Press card</v-card-title>
            </v-card>
          </v-layout>
        </v-flex>
      </v-layout>-->
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";
import json_profile from "../assets/data/profile.json";
import json_projects from "../assets/data/projects.json";
import json_experiences from "../assets/data/experiences.json";
import json_training from "../assets/data/training.json";
import json_hobbies from "../assets/data/hobbies.json";
import json_links from "../assets/data/links.json";

export default {
  name: "home",
  components: {
    PPortfolioApp,
    PContactInfo
  },
  data() {
    return {
      profil: json_profile,
      projects: json_projects,
      experiences: json_experiences,
      training: json_training,
      hobbies: json_hobbies,
      links: json_links,
      contactLinks: json_profile.contacts
    };
  }
};
</script>
