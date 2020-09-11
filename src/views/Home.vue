<template>
    <v-layout row wrap align-center class="pb-5">
        <v-flex xs8 offset-md2>
            <v-alert elevation="2" icon="mdi-cube-outline" tile type="error" color="red darken-3" colored-border
                     border="top">
                <div>Please Note: This is still a work in progress</div>
            </v-alert>

            <!-- STATUS SHEET -->
            <v-sheet
                height="160"
                elevation="2"
                tile="tile"
            >
                <v-row no-gutters>
                    <v-col cols="2">
                        <v-avatar
                            class="my-3 ml-5"
                            size="135"
                            rounded
                            v-if="this.showAvatar"
                        >
                            <v-img src="@/assets/images/avatar.jpg"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="10">
                        <v-row no-gutters class="my-2">
                            <v-col><h1 class="font-weight-light">Who am I?</h1>
                                <hr color="red" width="18%"/>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="mr-10">
                            <v-col>
                                <div class="font-weight-light">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">mdi-chevron-double-right
                                    </v-icon>
                                    Dedicated Computer Science graduate that loves fullstack development and creating
                                    exciting web applications. Always passionate and positive.
                                </div>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="float-right mr-10 my-1">
                            <v-col>
                                <div class="font-weight-light">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">mdi-school</v-icon>
                                    BSc Computer Science (Hons)
                                    <v-icon medium color="red darken-3" class="ml-2 mb-1">mdi-map-marker</v-icon>
                                    Stellenbosch University, South Africa
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-sheet>

            <!-- ABOUT ME -->
            <v-sheet
                id="aboutMe"
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
                            cols="12"
                            md="4"
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
                            cols="12"
                            md="1"
                            class="mb-0 pb-0"
                        >
                            <v-card
                                class="d-flex align-center"
                                height="50"
                                tile
                            >
                                <div
                                    class="text-center"
                                >
                                    <v-icon x-large color="grey darken-1" class="ml-5">
                                        {{ icon }}
                                    </v-icon>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col
                            v-for="src in this.languagesSRC"
                            :key="src"
                            cols="12"
                            md="1"
                            class="mb-0 pb-0"
                        >
                            <v-card
                                class="d-flex align-center"
                                height="50"
                                tile
                            >
                                <div
                                    class="text-center"
                                >
                                    <v-img :src="src" height="35" width="35" class="ml-6"/>
                                </div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container class="mb-0 pb-0 pt-0" v-else-if="aboutMeActiveSection === 'Technologies'">
                    <v-row>
                        <v-col
                            v-for="icon in this.technologiesIcons"
                            :key="icon"
                            cols="12"
                            md="1"
                            class="mb-0 pb-0"
                        >
                            <v-card
                                class="d-flex align-center"
                                height="50"
                                tile
                            >
                                <div
                                    class="text-center ml-1"
                                >
                                    <v-icon x-large color="grey darken-1" class="ml-4">
                                        {{ icon }}
                                    </v-icon>
                                </div>
                            </v-card>
                        </v-col>
                        <v-col
                            v-for="src in this.technologiesSRC"
                            :key="src"
                            cols="12"
                            md="1"
                            class="mb-0 pb-0"
                        >
                            <v-card
                                class="d-flex align-center"
                                height="50"
                                tile
                            >
                                <div
                                    class="text-center ml-1"
                                >
                                    <v-img :src="src" height="35" width="35" class="ml-5"/>
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

            <!-- EXPERIENCE CARDS -->
            <v-sheet
                id="experience"
                height="50"
                elevation="2"
                tile
                class="mt-3 pt-2 pb-2 pl-3"
            >
                <div style="display: flex">
                    <v-icon large color="red darken-3" class="pr-3">
                        mdi-briefcase
                    </v-icon>
                    <h2 class="font-weight-light">Experience</h2>
                </div>
            </v-sheet>
            <v-row
                v-for="i in this.getNumOfRows(this.experienceData)"
                :key="i"
            >
                <v-col class="text--white"
                       v-for="j in 3"
                       :key="j"
                >
                    <v-card
                        class="mx-auto"
                        min-height="100%"
                        elevation="2"
                        tile
                    >
                        <v-card-title class="justify-center mb-2 pb-2 pt-2">
                            <p class="ma-0 pa-0">
                                <span>{{ experienceData[((j - 1) + (i - 1) * 3).toString()].heading }}</span>
                                <span><hr color="red" width="100%" style=""/></span>
                            <p/>
                        </v-card-title>

                        <v-container class="mt-0 pt-0">
                            <div>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-calendar
                                            </v-icon>
                                            <span>{{ experienceData[((j - 1) + (i - 1) * 3).toString()].date }}</span>
                                        </span>
                                <br/>
                                <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-map-marker
                                            </v-icon>
                                            <span>{{
                                                    experienceData[((j - 1) + (i - 1) * 3).toString()].location
                                                }}</span>
                                        </span>
                            </div>
                            <div class="pt-2">
                                <div class="pb-1"
                                     v-for="item in experienceData[((j - 1) + (i - 1) * 3).toString()].items"
                                     :key="item"
                                >
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-chevron-double-right
                                    </v-icon>
                                    {{ item }}
                                </div>
                            </div>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>

            <!-- MY EDUCATION CARDS -->
            <v-sheet
                id="education"
                height="50"
                elevation="2"
                tile
                class="pt-2 pb-2 pl-3"
            >
                <div style="display: flex">
                    <v-icon large color="red darken-3" class="pr-3">
                        mdi-school
                    </v-icon>
                    <h2 class="font-weight-light">Education</h2>
                </div>
            </v-sheet>
            <v-row>
                <v-col class="text--white"
                       v-for="j in 3"
                       :key="j"
                >
                    <v-lazy
                        :options="{ threshold: .5 }"
                        min-height="200"
                    >
                        <v-expand-x-transition>
                            <v-card
                                class="mx-auto"
                                elevation="2"
                                tile
                                min-height="370"
                            >
                                <v-card-title class="justify-center mb-2 pb-2 pt-2">
                                    <p class="ma-0 pa-0">
                                        <span>{{ educationData[(j - 1).toString()].heading }}</span>
                                        <span><hr color="red" width="100%" style=""/></span>
                                    <p/>
                                </v-card-title>

                                <v-container class="mt-0 pt-0">
                                    <div>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-calendar
                                            </v-icon>
                                            <span>{{ educationData[(j - 1).toString()].date }}</span>
                                        </span>
                                        <br/>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-map-marker
                                            </v-icon>
                                            <span>{{
                                                    educationData[(j - 1).toString()].location
                                                }}</span>
                                        </span>
                                    </div>
                                    <div class="pt-2">
                                        <div class="pb-1"
                                             v-for="item in educationData[(j - 1).toString()].items"
                                             :key="item"
                                        >
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-chevron-double-right
                                            </v-icon>
                                            {{ item }}
                                        </div>
                                    </div>
                                </v-container>

                                <v-card-actions class="" style="position: absolute; bottom: 0; left: 35%">
                                    <v-btn tile outlined color="red darken-3" class="mr-2 mb-2">Results</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-expand-x-transition>
                    </v-lazy>
                </v-col>
            </v-row>

            <!-- MY EXTRACURRICULAR ACTIVITIES -->
            <v-sheet
                id="extracurricularActivities"
                height="50"
                elevation="2"
                tile
                class="pt-2 pb-2 pl-3"
            >
                <div style="display: flex">
                    <v-icon large color="red darken-3" class="pr-3">
                        mdi-clipboard-text
                    </v-icon>
                    <h2 class="font-weight-light">Extracurricular Activities</h2>
                </div>
            </v-sheet>
            <v-row
                v-for="i in this.getNumOfRows(this.extracurricularData)"
                :key="i"
            >
                <v-col class="text--white"
                       v-for="j in 1"
                       :key="j"
                >
                    <v-lazy
                        :options="{ threshold: .5 }"
                        min-height="200"
                    >
                        <v-expand-x-transition>
                            <v-card
                                class="mx-auto"
                                elevation="2"
                                tile
                            >
                                <v-card-title class="justify-center mb-2 pb-2 pt-2">
                                    <p class="ma-0 pa-0">
                                        <span>{{
                                                extracurricularData[((j - 1) + (i - 1) * 3).toString()].heading
                                            }}</span>
                                        <span><hr color="red" width="100%" style=""/></span>
                                    <p/>
                                </v-card-title>

                                <v-container class="mt-0 pt-0">
                                    <div>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-calendar
                                            </v-icon>
                                            <span>{{
                                                    extracurricularData[((j - 1) + (i - 1) * 3).toString()].date
                                                }}</span>
                                        </span>
                                        <br/>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-map-marker
                                            </v-icon>
                                            <span>{{
                                                    extracurricularData[((j - 1) + (i - 1) * 3).toString()].location
                                                }}</span>
                                        </span>
                                    </div>
                                    <div class="pt-2">
                                        <div class="pb-1"
                                             v-for="item in extracurricularData[((j - 1) + (i - 1) * 3).toString()].items"
                                             :key="item"
                                        >
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-chevron-double-right
                                            </v-icon>
                                            {{ item }}
                                        </div>
                                    </div>
                                </v-container>
                            </v-card>
                        </v-expand-x-transition>
                    </v-lazy>
                </v-col>
            </v-row>

            <!-- MY HONORS AND AWARDS -->
            <v-sheet
                id="awards"
                height="50"
                elevation="2"
                tile
                class="pt-2 pb-2 pl-3"
            >
                <div style="display: flex">
                    <v-icon large color="red darken-3" class="pr-3">
                        mdi-trophy
                    </v-icon>
                    <h2 class="font-weight-light">Honors & Awards</h2>
                </div>
            </v-sheet>
            <v-row
                v-for="i in this.getNumOfRows(this.awardsData)"
                :key="i"
            >
                <v-col class="text--white"
                       v-for="j in 2"
                       :key="j"
                >
                    <v-lazy
                        :options="{ threshold: .5 }"
                        min-height="200"
                    >
                        <v-expand-x-transition>
                            <v-card
                                class="mx-auto"
                                min-height="200"
                                elevation="2"
                                tile
                            >
                                <v-card-title class="justify-center mb-2 pb-2 pt-2">
                                    <p class="ma-0 pa-0">
                                        <span>{{
                                                awardsData[((j - 1) + (i - 1) * 3).toString()].heading
                                            }}</span>
                                        <span><hr color="red" width="100%" style=""/></span>
                                    <p/>
                                </v-card-title>

                                <v-container class="mt-0 pt-0">
                                    <div>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-calendar
                                            </v-icon>
                                            <span>{{
                                                    awardsData[((j - 1) + (i - 1) * 3).toString()].date
                                                }}</span>
                                        </span>
                                        <br/>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-map-marker
                                            </v-icon>
                                            <span>{{
                                                    awardsData[((j - 1) + (i - 1) * 3).toString()].location
                                                }}</span>
                                        </span>
                                    </div>
                                    <div class="pt-2">
                                        <div class="pb-1"
                                             v-for="item in awardsData[((j - 1) + (i - 1) * 3).toString()].items"
                                             :key="item"
                                        >
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-chevron-double-right
                                            </v-icon>
                                            {{ item }}
                                        </div>
                                    </div>
                                </v-container>
                            </v-card>
                        </v-expand-x-transition>
                    </v-lazy>
                </v-col>
            </v-row>

            <!-- MY PROJECTS -->
            <v-sheet
                id="projects"
                height="50"
                elevation="2"
                tile
                class="pt-2 pb-2 pl-3"
            >
                <div style="display: flex">
                    <v-icon large color="red darken-3" class="pr-3">
                        mdi-laptop
                    </v-icon>
                    <h2 class="font-weight-light">Projects</h2>
                </div>
            </v-sheet>
            <v-row
                v-for="i in this.getNumOfRows(this.experienceData)"
                :key="i"
            >
                <v-col class="text--white"
                       v-for="j in 3"
                       :key="j"
                >
                    <v-card
                        class="mx-auto"
                        min-height="100%"
                        elevation="2"
                        tile
                    >
                        <v-card-title class="justify-center mb-2 pb-2 pt-2">
                            <p class="ma-0 pa-0">
                                <span>{{ experienceData[((j - 1) + (i - 1) * 3).toString()].heading }}</span>
                                <span><hr color="red" width="100%" style=""/></span>
                            <p/>
                        </v-card-title>

                        <v-container class="mt-0 pt-0">
                            <div>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-calendar
                                            </v-icon>
                                            <span>{{ experienceData[((j - 1) + (i - 1) * 3).toString()].date }}</span>
                                        </span>
                                <br/>
                                <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-map-marker
                                            </v-icon>
                                            <span>{{
                                                    experienceData[((j - 1) + (i - 1) * 3).toString()].location
                                                }}</span>
                                        </span>
                            </div>
                            <div class="pt-2">
                                <div class="pb-1"
                                     v-for="item in experienceData[((j - 1) + (i - 1) * 3).toString()].items"
                                     :key="item"
                                >
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-chevron-double-right
                                    </v-icon>
                                    {{ item }}
                                </div>
                            </div>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
            <v-row
                v-for="i in this.getNumOfRows(this.experienceData)"
                :key="i"
            >
                <v-col class="text--white"
                       v-for="j in 3"
                       :key="j"
                >
                    <v-card
                        class="mx-auto"
                        min-height="100%"
                        elevation="2"
                        tile
                    >
                        <v-card-title class="justify-center mb-2 pb-2 pt-2">
                            <p class="ma-0 pa-0">
                                <span>{{ experienceData[((j - 1) + (i - 1) * 3).toString()].heading }}</span>
                                <span><hr color="red" width="100%" style=""/></span>
                            <p/>
                        </v-card-title>

                        <v-container class="mt-0 pt-0">
                            <div>
                                        <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-calendar
                                            </v-icon>
                                            <span>{{ experienceData[((j - 1) + (i - 1) * 3).toString()].date }}</span>
                                        </span>
                                <br/>
                                <span>
                                            <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                                mdi-map-marker
                                            </v-icon>
                                            <span>{{
                                                    experienceData[((j - 1) + (i - 1) * 3).toString()].location
                                                }}</span>
                                        </span>
                            </div>
                            <div class="pt-2">
                                <div class="pb-1"
                                     v-for="item in experienceData[((j - 1) + (i - 1) * 3).toString()].items"
                                     :key="item"
                                >
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-chevron-double-right
                                    </v-icon>
                                    {{ item }}
                                </div>
                            </div>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>


        </v-flex>
    </v-layout>
</template>

<script>
import db from '@/components/firebaseInit';

import experienceJSON from "@/assets/json/Experience.json";
import educationJSON from "@/assets/json/Education.json";
import extracurricularJSON from "@/assets/json/Extracurricular.json";
import awardsJSON from "@/assets/json/Awards.json";

export default {
    name: 'Home',

    props: ['darkMode'],

    components: {},

    data() {
        return {
            showAvatar: false,
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
            experienceData: experienceJSON,
            educationData: educationJSON,
            extracurricularData: extracurricularJSON,
            awardsData: awardsJSON,
            references: [],
        };
    },

    methods: {
        getNumOfRows: function (data) {
            return Math.ceil(Object.keys(data).length / 3);
        },
        showAboutMe(active, section) {
            if (!active) this.aboutMeActiveSection = section;
            else this.aboutMeActiveSection = "";
        }
    },

    created() {
        db.collection('References').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data());
                let data = {
                    'id': doc.id,
                    'ref_id': doc.data().ref_id,
                    'name': doc.data().name,
                    'email': doc.data().email,
                    'phone': doc.data().phone,
                    'position': doc.data().position,
                    'ref_letter': doc.data().ref_letter
                };
                this.references.push(data);
            });
        });

        this.showAvatar = true;
    }
}
</script>
