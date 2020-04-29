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
              <div class="display-2 font-weight-bold">Nicolas MARRY, 
                {{  Math.abs(new Date(Date.now()- new Date(1997, 7, 31).getTime()).getUTCFullYear() - 1970) }} ans 
                <img src="france.ico" height="25px">
              </div>
              <div class="headline">Concepteur développeur d'application</div>
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
          <div class="body-1">{{aboutText}}</div>
          <div
            class="body-1 mt-3"
          > Mon rêve?? Développer mon île La Réunion d'une tout autre manière... 😌😌</div>
        </v-flex>
      </v-layout>
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="portfolio">Mes projets</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in apps">
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

export default {
  name: "home",
  components: {
    // HelloWorld,
    PPortfolioApp,
    PContactInfo
  },
  data() {
    return {
      aboutText:
        "Se réveiller chaque matin pour développer mon sens artistique est ce qui me rend le plus en joie. Voir la satisfaction des clients et le résultat d'un travail bien fait est d'autant plus gratifiant.",
      apps: [
        {
          name: "MySeance",
          statut: "EN COURS",
          logo: "sport.svg",
          platforms: [
            {
              name: "apple",
              icon: "mdi-android",
              link: ""
            },
            {
              name: "apple",
              icon: "mdi-apple",
              link: ""
            }
          ],
          description:
            "Gestion du trafic d'entrée d'adhérent de club de sport. Intégration d'un système de statistique.",
          technologies: [
            {
              name: "Swift",
              icon: "mdi-language-swift",
              link: ""
            },
            {
              name: "XCode",
              icon: "mdi-apple-ios",
              link: ""
            },
            {
              name: "Firebase",
              icon: "mdi-firebase",
              link: ""
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github-circle",
            link: ""
          }
        }
      ],
      contactLinks: [
        {
          name: "Email",
          value: "n.marry@outlook.fr",
          link: "mailto:n.marry@outlook.fr",
          icon: "mdi-email"
        },
        {
          name: "LinkedIn",
          value: "Nicolas MARRY",
          link: "https://www.linkedin.com/in/nicolas-marry-45551b166/",
          icon: "mdi-linkedin"
        },
        {
          name: "YouTube",
          value: "Nicolas MARRY",
          link: "https://www.youtube.com/channel/UCNWxVewsjH97hXFFIYHlJJA",
          icon: "mdi-youtube"
        },
        {
          name: "Github",
          value: "zygof",
          link: "https://github.com/zygof/",
          icon: "mdi-github"
        },
        {
          name: "Facebook",
          value: "Nicolas MARRY",
          link: "https://www.facebook.com/nikos.alewe1",
          icon: "mdi-facebook"
        },
        {
          name: "Instagram",
          value: "@zygof",
          link: "https://www.instagram.com/zygof_/",
          icon: "mdi-instagram"
        }
      ]
    };
  }
};
</script>
