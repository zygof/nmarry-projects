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
    downloadCV() {}
  }
};
</script>

<style>
</style>