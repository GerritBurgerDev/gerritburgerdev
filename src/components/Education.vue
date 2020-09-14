<template>
    <div>
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
                   cols="12"
                   md="4"
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
    </div>
</template>

<script>
import educationJSON from "@/assets/json/Education.json";

export default {
    name: "Education",

    data() {
        return {
            educationData: educationJSON,
        };
    },

    methods: {
        getNumOfRows: function (data) {
            return Math.ceil(Object.keys(data).length / 3);
        },
    },
}
</script>

<style scoped>

</style>