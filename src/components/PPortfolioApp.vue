<template>
  <v-card class="container-pj" height="100%" @click="$router.push('/projects/' + project.name)">
    <v-card flat color="transparent" class="align-stretch" width="100%">
      <v-layout wrap>
        <v-card-title style="width: 100%">
          <v-layout>
            <v-card
              :href="project.platforms[0].link"
              class="pj-resume"
              elevation="5"
              style="border-radius: 20px"
              width="100px"
              height="100px"
            >
              <v-img :src="logo(project.logo)" />
            </v-card>

            <v-flex xs7 style="margin-left:5%">
              <span>{{project.name}} <v-btn class="subtitle-2"  
              style="font-size: 12px !important; padding:0% !important; min-width:0px; top:-10px" text>
              {{project.type}}</v-btn></span>
              
              <div>
                <v-chip small pill :color="statutColor(project.statut)" dark>{{project.statut}}</v-chip>
              </div>

              <template v-for="(platform, i) in project.platforms">
                <!-- <div> -->
                <v-btn :href="platform.link" target="_blank" icon :key="i">
                  <v-icon>{{platform.icon}}</v-icon>
                </v-btn>
                <!-- </div> -->
              </template>
            </v-flex>
          </v-layout>
        </v-card-title>
        <v-card-text>
          <div>{{project.description}}</div>
          <div class="title mt-2 pt-2">Technologies utilisées</div>
          <v-layout>
            <template v-for="(tech, i) in project.technologies">
              <v-flex xs3 :key="i">
                <div class="text-center">
                  <v-btn icon>
                    <v-icon>{{tech.icon}}</v-icon>
                  </v-btn>
                  <div class="caption">{{tech.name}}</div>
                </div>
              </v-flex>
            </template>
          </v-layout>
          <div v-if="project.code.link">
            <div class="title mt-2">Code</div>
            <v-btn icon :href="project.code.link" target="_blank">
              <v-icon>{{project.code.icon}}</v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-layout>
    </v-card>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    logo(name) {
      return require("../assets/images/" + name);
    },
    statutColor(statut) {
      switch(statut){
        case 'EN COURS': return 'orange';
        case 'DÉPLOYÉE': return 'green';
        case 'EN TEST': return 'yellow darken-1';
        case 'TERMINÉE': return 'green lighten-2';
        default: return 'dark'
      }
    }
  }
};
</script>

<style>
.container-pj {
  box-shadow: none;
  margin: 2%;
}
.container-pj:hover {
  background-color: #e0e0e0;
}
.no-flex {
  flex: 0 0;
}
</style>