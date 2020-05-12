<template>
  <div class="projects">
    <v-container class justify-center>
      <v-layout wrap justify-center>
        <v-flex xs12>
          <div class="display-1 font-weight-bold mb-3">Mes projects</div>
        </v-flex>
        <v-flex xs12>
          <v-card fluid>
            <v-data-iterator
              :items="items"
              :items-per-page.sync="itemsPerPage"
              :page="page"
              :search="search"
              :sort-by="sortBy.toLowerCase()"
              :sort-desc="sortDesc"
              hide-default-footer
              :loading-text="loadingText"
              :no-data-text="noDataText"
              :no-results-text="noResultsText"
            >
              <template v-slot:header>
                <v-toolbar dark class="mb-1">
                  <v-text-field
                    v-model="search"
                    clearable
                    flat
                    solo-inverted
                    hide-details
                    prepend-inner-icon
                    label="Rechercher"
                    dark
                  ></v-text-field>
                  <template v-if="$vuetify.breakpoint.mdAndUp">
                    <v-spacer></v-spacer>
                    <v-select
                      v-model="sortBy"
                      flat
                      solo
                      hide-details
                      :items="keys"
                      prepend-inner-icon
                      label="Trier par"
                      background-color="#4A4A4A"
                    ></v-select>
                    <v-spacer></v-spacer>
                    <v-btn-toggle v-model="sortDesc" mandatory>
                      <v-btn large depressed :value="false">
                        <v-icon>mdi-arrow-up</v-icon>
                      </v-btn>
                      <v-btn large depressed :value="true">
                        <v-icon>mdi-arrow-down</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </template>
                </v-toolbar>
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    sm="6"
                    md="6"
                    lg="4"
                    xl="3"
                    style="padding: 5px;"
                  >
                    <v-layout justify-center>
                      <v-layout>
                        <v-flex>
                          <p-project :project="item" />
                        </v-flex>
                      </v-layout>
                    </v-layout>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:footer>
                <v-layout justify-center class="mt-4">
                  <span class="mr-4 grey--text">Page {{ page }} sur {{ numberOfPages }}</span>
                </v-layout>

                <v-layout class="pb-4" align="center" justify-center>
                  <!-- <span class="grey--text">Projet par page</span>
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn dark text class="ml-2" v-on="on">
                        {{ itemsPerPage }}
                        <v-icon>mdi-chevron-down</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(number, index) in itemsPerPageArray"
                        :key="index"
                        @click="updateItemsPerPage(number)"
                      >
                        <v-list-item-title>{{ number }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>-->

                  <!-- <v-spacer></v-spacer> -->

                  <v-btn-toggle mandatory>
                    <v-btn large primary depressed @click="formerPage">
                      <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn large primary depressed @click="nextPage">
                      <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                  </v-btn-toggle>

                  <!-- <v-btn fab dark class="mr-1" @click="formerPage">
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn fab dark class="ml-1" @click="nextPage">
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>-->
                </v-layout>
              </template>
            </v-data-iterator>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import PProject from "@/components/PProject.vue";
import data_projects from "../assets/data/projects.json";
import PProject from "@/components/PProject.vue";

export default {
  name: "projects",
  components: {
    PProject
  },
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      loadingText: "Chargement en cours...",
      noDataText: "Pas de données",
      noResultsText: "Aucun projet correspondant trouvé",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      sortBy: "name",
      keys: ["Name", "Statut", "Type"],
      keysName: ["Nom", "Statut", "Type"],
      items: data_projects.data
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter(key => key !== `Name`);
    },
    keyName() {
      // let keyName = [],
      // switch(this.keys){
      //   // case 'Name'
      // }
      return 0;
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  watch: {
    windowHeight(newHeight, oldHeight) {
      // console.log(oldHeight);
      console.log("Taille : " + screen.size);
      oldHeight
      newHeight;
    }
  },
  methods: {
    myEventHandler(e) {
      console.log("Taille : " + screen.width);
      if (e.target.innerWidth > 1903) {
        this.itemsPerPage = 8;
      }
      if (e.target.innerWidth < 1904 && e.target.innerWidth > 1263) {
        this.itemsPerPage = 6;
      }
      if (e.target.innerWidth < 1264 && e.target.innerWidth > 600) {
        this.itemsPerPage = 4;
      }
    },
    displayData(item, key) {
      var data;
      if (key == "technologies") {
        var technologies = "";
        item[key].sort().forEach(tech => (technologies += tech.name + " "));
        data = technologies;
      } else {
        data = item[key.toLowerCase()];
      }
      return data;
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    }
  }
};
</script>

