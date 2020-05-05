<template>
  <div class="home">
    <v-img dark max-height="500px" src="../assets/images/home.jpg">
      <v-layout fill-height align-center>
        <v-container>
          <v-row style="height: 70px"></v-row>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div class="display-1 font-weight-bold">
                {{profile.firstname}} {{profile.name}},
                {{ Math.abs(new Date(Date.now()- new Date(profile.birthday_y, profile.birthday_m, profile.birthday_d).getTime()).getUTCFullYear() - 1970) }} ans
                <img
                  src="../assets/images/france.jpg"
                  height="25px"
                />
              </div>
              <div class="headline">{{profile.job}}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5">
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="about">À propos</div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{profile.aboutText}}</div>
          <div class="body-1 mt-3">{{profile.aboutText2}}</div>
        </v-flex>
      </v-layout>

      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="training">Formations</div>
        </v-flex>
        <v-flex class="mt-5">
          <Timeline
            :timeline-items="training.data"
            :message-when-no-items="training.messageWhenNoItems"
          />
        </v-flex>
      </v-layout>

      <v-layout wrap my-5 justify-center>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="projects">Mes projets</div>
        </v-flex>
        <v-card xs12 class="mt-5" elevation="7">

          <v-layout wrap justify-center style="max-width:1160px">
            <template v-for="(project, i) in projects.data" >
              <v-flex :key="i" xs12 sm6 md4 v-if="i < 6">
                <p-portfolio-app :project="project"/>
              </v-flex>
            </template>
          </v-layout>

          <v-card-actions class="text-right">
            <v-spacer></v-spacer>
            <v-btn dark style="margin-top:1%" width="100%" @click="$router.push('/projects')">Voir plus (<span>{{Object.keys(projects.data).length}}</span>)...</v-btn>
          </v-card-actions>
        </v-card>
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
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";
import Timeline from "@/components/Timeline.vue";
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
    PContactInfo,
    Timeline
  },
  data() {
    return {
      profile: json_profile,
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
