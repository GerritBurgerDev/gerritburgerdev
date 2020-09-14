<template>
    <v-app id="inspire">
        <NavDrawer :drawer="drawer"/>

        <v-app-bar
            app
            clipped-left
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Gerrit Burger Online Resume</v-toolbar-title>

            <v-spacer/>

            <div class="mr-5">
                <v-icon v-if="this.darkMode"
                        medium
                        @click="changeTheme"
                >
                    mdi-white-balance-sunny
                </v-icon>
                <v-icon v-else
                        medium
                        @click="changeTheme"
                >
                    mdi-moon-waning-crescent
                </v-icon>
            </div>
        </v-app-bar>

        <v-main>
            <v-container
                v-if="darkMode"
                class="fill-height pb-15"
                fluid
            >
                <Home :darkMode="darkMode"/>
            </v-container>
            <v-container
                v-else
                class="fill-height pb-15"
                fluid
                style="background-color: #F5F5F5;"
            >
                <Home :dark-mode="darkMode"/>
            </v-container>
        </v-main>

        <Footer :footerColor="footerColor"/>
    </v-app>
</template>

<style>
#inspire {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>

<script>
import NavDrawer from "@/components/NavDrawer.vue";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "App",

    props: {},

    components: {
        NavDrawer,
        Home,
        Footer,
    },

    data() {
        return {
            drawer: false,
            darkMode: true,
            footerColor: '',
        };
    },

    methods: {
        changeTheme() {
            this.darkMode = !this.darkMode
            this.$vuetify.theme.dark = this.darkMode;

            if (this.darkMode) this.footerColor = '';
            else this.footerColor = 'background-color: #d1d1d1';
        }
    },

    created() {
        this.$vuetify.theme.dark = this.darkMode;
    },
};
</script>
