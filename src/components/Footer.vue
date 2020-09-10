<template>
  <v-footer
      fixed
      class="font-weight-medium"
      elevation="4"
  >
    <v-col
        class="text-center"
        cols="12"
    >
      <v-btn icon href="https://github.com/GerritBurgerDev/" target="_blank">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
      <v-btn icon href="https://www.linkedin.com/in/gerritburgerdev/" target="_blank">
        <v-icon medium>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon href="#" target="_blank">
        <v-icon medium>mdi-email</v-icon>
      </v-btn>
      <v-btn icon href="#" target="_blank">
        <v-icon medium>mdi-phone</v-icon>
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {}
  },
};
</script>
