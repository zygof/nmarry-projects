<template>
  <v-footer height="auto" dark>
    <v-layout justify-center row wrap class="text-center">
      <v-card-text>
        <v-btn
          v-for="contact in profile.contacts"
          :key="contact.icon"
          :href="contact.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ contact.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-btn class="white--text pt-0" color="red" @click="downloadCV()">
        Télécharger CV
        <v-icon size="20px">mdi-adobe-acrobat</v-icon>
      </v-btn>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>{{profile.firstname}} {{profile.name}}</strong>
      </v-card-text>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      url: "/CV_NM.pdf"
    };
  },

  props: {
    profile: {
      type: Object,
      default: function() {
        return {};
      }
    },
    icons: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    forceFileDownload(response){
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'CV Nicolas MARRY.pdf') //or any other extension
      document.body.appendChild(link)
      link.click()
    },
      
      downloadCV(){
      this.$axios({
        method: 'get',
        url: this.url,
        responseType: 'arraybuffer'
      })
      .then(response => {
        
        this.forceFileDownload(response)
        
      })
      .catch(() => console.log('error occured'))
    },
  }
};
</script>

<style>
</style>