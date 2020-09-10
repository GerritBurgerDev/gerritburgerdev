<template>
    <v-layout row wrap align-center>
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

            <!-- EXPERIENCE CARDS -->
            <v-sheet
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
                v-for="i in this.getNumOfExpRows(this.experienceData)"
                :key="i"
            >
                <v-col class="text--white"
                       v-for="j in 3"
                       :key="j"
                >
                    <v-card
                        class="mx-auto"
                        max-width="75vw"
                        elevation="2"
                        tile
                    >
                        <v-card-title class="justify-center mb-2 pb-2 pt-2">
                            {{ experienceData[((j - 1) + (i - 1) * 3).toString()].heading }}
                            <hr color="red" width="80%" style=""/>
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
                height="50"
                elevation="2"
                tile
                class="pt-2 pb-2 pl-3"
            >
                <div style="display: flex">
                    <v-icon large color="red darken-3" class="pr-3">
                        mdi-briefcase
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
                                max-width="75vw"
                                elevation="2"
                                tile
                            >
                                <v-card-title class="justify-center mb-2 pb-2 pt-2">
                                    {{ educationData[(j - 1).toString()].heading }}
                                    <hr color="red" width="80%" style=""/>
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

                                <v-card-actions class="justify-center pt-0">
                                    <v-btn tile outlined color="red darken-3" class="mr-2 mb-2">Results</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-expand-x-transition>
                    </v-lazy>
                </v-col>
            </v-row>

            <v-row v-for="i in 10" :key="i">
                <v-col>
                    <v-lazy
                        :options="{ threshold: .5 }"
                        min-height="200"
                    >
                        <v-expand-x-transition>
                            <v-card
                                class="mx-auto"
                                max-width="75vw"
                            >
                                <v-card-title>Card title</v-card-title>

                                <v-card-text>
                                    Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis
                                    eros vehicula leo,
                                    at
                                    malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum
                                    nec, tempor a,
                                    commodo
                                    mollis, magna.

                                    In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In
                                    turpis. Pellentesque
                                    dapibus hendrerit tortor. Ut varius tincidunt libero.
                                </v-card-text>
                            </v-card>
                        </v-expand-x-transition>
                    </v-lazy>
                </v-col>
                <v-col>
                    <v-lazy
                        :options="{ threshold: .5 }"
                        min-height="200"
                    >
                        <v-expand-x-transition>
                            <v-card
                                class="mx-auto"
                                max-width="75vw"
                            >
                                <v-card-title>Card title</v-card-title>

                                <v-card-text>
                                    Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet, felis
                                    eros vehicula leo,
                                    at
                                    malesuada velit leo quis pede. Aliquam lobortis. Quisque libero metus, condimentum
                                    nec, tempor a,
                                    commodo
                                    mollis, magna.

                                    In turpis. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In
                                    turpis. Pellentesque
                                    dapibus hendrerit tortor. Ut varius tincidunt libero.
                                </v-card-text>
                            </v-card>
                        </v-expand-x-transition>
                    </v-lazy>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
</template>

<script>
import experienceJSON from "@/assets/json/Experience.json";
import educationJSON from "@/assets/json/Education.json";

export default {
    name: 'Home',

    components: {},

    data() {
        return {
            showAvatar: false,
            experienceData: experienceJSON,
            educationData: educationJSON,
        };
    },

    methods: {
        getNumOfExpRows: function (data) {
            return Object.keys(data).length / 3;
        }
    },

    created() {
        this.showAvatar = true;
    }
}
</script>
