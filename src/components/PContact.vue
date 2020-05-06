<template>
  <v-list-item :href="contact.link" target="_blank">
    <v-list-item-icon class="pa-0 mr-2">
      <span icon>
        <v-icon>{{contact.icon}}</v-icon>
      </span>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title>{{contact.value}}</v-list-item-title>
      <v-list-item-subtitle>{{contact.name}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

<style>
</style>