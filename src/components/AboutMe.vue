<template>
    <div>
        <v-sheet
            height="50"
            elevation="2"
            tile
            class="mt-3 pt-2 pb-2 pl-3"
        >
            <div style="display: flex">
                <v-icon large color="red darken-3" class="pr-3">
                    mdi-information
                </v-icon>
                <h2 class="font-weight-light">More about me</h2>
            </div>
        </v-sheet>
        <v-item-group active-class="red darken-3">
            <v-container class="mb-0 pb-0">
                <v-row class="pb-0 mb-0">
                    <v-col
                        v-for="n in 3"
                        :key="n"
                        class="mb-0 pb-0 pt-0"
                    >
                        <v-item v-slot:default="{ active, toggle }">
                            <v-card
                                class="d-flex align-center"
                                height="200"
                                tile
                                v-on:click="showAboutMe(active, aboutMeSection[n - 1])"
                                @click="toggle"
                            >
                                <div
                                    v-if="active"
                                    class="display-2 flex-grow-1 text-center font-weight-light"
                                >
                                    <span style="color: white">{{ aboutMeSection[n - 1] }}</span>
                                </div>
                                <div
                                    v-else
                                    class="display-2 flex-grow-1 text-center font-weight-light"
                                >
                                    {{ aboutMeSection[n - 1] }}
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
        <!-- LANGUAGES & FRAMEWORKS, TECHNOLOGIES, SOFT SKILLS -->
        <v-slide-x-transition>
            <v-container class="mb-0 pb-0 pt-0" v-if="aboutMeActiveSection === 'Languages & Frameworks'">
                <v-row>
                    <v-col
                        v-for="icon in this.languagesIcons"
                        :key="icon"
                        cols="3"
                        md="1"
                        class="mb-0 pb-0"
                    >
                        <v-card
                            class="d-flex align-center justify-center"
                            height="50"
                            tile
                        >
                            <div
                                class="text-center justify-center"
                            >
                                <v-icon x-large color="grey darken-1" class="">
                                    {{ icon }}
                                </v-icon>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col
                        v-for="src in this.languagesSRC"
                        :key="src"
                        cols="3"
                        md="1"
                        class="mb-0 pb-0"
                    >
                        <v-card
                            class="d-flex align-center justify-center"
                            height="50"
                            tile
                        >
                            <div
                                class="text-center"
                            >
                                <v-img :src="src" height="35" width="35"/>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class="mb-0 pb-0 pt-0" v-else-if="aboutMeActiveSection === 'Technologies'">
                <v-row justify="center">
                    <v-col
                        v-for="icon in this.technologiesIcons"
                        :key="icon"
                        md="1"
                        class="mb-0 pb-0"
                    >
                        <v-card
                            class="d-flex align-center justify-center"
                            height="50"
                            tile
                        >
                            <div
                                class="text-center"
                            >
                                <v-icon x-large color="grey darken-1">
                                    {{ icon }}
                                </v-icon>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col
                        v-for="src in this.technologiesSRC"
                        :key="src"
                        cols="3"
                        md="1"
                        class="mb-0 pb-0"
                    >
                        <v-card
                            class="d-flex align-center justify-center"
                            height="50"
                            tile
                        >
                            <div>
                                <v-img :src="src" height="35" width="35"/>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-container class="mb-0 pb-0 pt-0" v-else-if="aboutMeActiveSection === 'Soft Skills'">
                <div class="text-center">
                    <v-chip
                        v-for="item in this.softSkills"
                        :key="item"
                        label
                        outlined
                        large
                        text-color="white"
                        class="ma-2 mb-0 mt-3"
                    >
                        <v-icon color="grey darken-1" class="mr-2">
                            {{ item.icon }}
                        </v-icon>
                        <span v-if="darkMode" class="text--white">{{ item.value }}</span>
                        <span v-else style="color: black">{{ item.value }}</span>
                    </v-chip>
                </div>
            </v-container>
        </v-slide-x-transition>
    </div>
</template>

<script>
export default {
    name: "AboutMe",

    props: ['darkMode'],

    data() {
        return {
            aboutMeSection: [
                "Languages & Frameworks",
                "Technologies",
                "Soft Skills"
            ],
            aboutMeActiveSection: "",
            languagesIcons: [
                "mdi-language-java",
                "mdi-language-python",
                "mdi-language-c",
                "mdi-language-html5",
                "mdi-language-javascript",
                "mdi-language-css3",
                "mdi-language-haskell",
                "mdi-flask",
                "mdi-vuejs",
                "mdi-vuetify",
            ],
            languagesSRC: [
                require("@/assets/images/elixir.png"),
                require("@/assets/images/phoenix.png"),
                require("@/assets/images/nosql.png"),
                require("@/assets/images/sql.png")
            ],
            technologiesIcons: [
                "mdi-git",
                "mdi-google-cloud",
                "mdi-firebase"
            ],
            technologiesSRC: [
                require('@/assets/images/azure.png'),
                require('@/assets/images/arango.png'),
                require('@/assets/images/neo4j.png'),
            ],
            softSkills: [
                {value: "Collaborative", icon: "mdi-account-group"},
                {value: "Friendly", icon: "mdi-emoticon"},
                {value: "Calm", icon: "mdi-tailwind"},
                {value: "Curios", icon: "mdi-head-question"},
                {value: "Organized", icon: "mdi-archive"},
                {value: "Hard worker", icon: "mdi-cog"},
                {value: "Passionate", icon: "mdi-heart-flash"},
                {value: "Responsible", icon: "mdi-tie"},
                {value: "Focussed", icon: "mdi-head-snowflake"},
            ],
        };
    },

    methods: {
        showAboutMe(active, section) {
            if (!active) this.aboutMeActiveSection = section;
            else this.aboutMeActiveSection = "";
        }
    }
}
</script>

<style scoped>

</style>