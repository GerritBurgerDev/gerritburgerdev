<template>
  <v-app id="inspire">
    <NavDrawer :drawer="drawer"/>

    <v-app-bar
        app
        clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Gerrit Burger Online Resume</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
          class="fill-height pb-15"
          fluid
      >
        <Home/>
<!--        <wip/>-->
      </v-container>
    </v-main>

    <Footer/>
  </v-app>
</template>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer.vue";
// import wip from "@/components/WIP.vue";

export default {
  name: "App",

  props: {},

  components: {
    NavDrawer,
    Home,
    Footer,
    // wip,
  },

  data() {
    return {
      drawer: false,
    };
  },

  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>
