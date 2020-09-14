<template>
    <div>
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
                   cols="12"
                   md="4"
            >
                <v-card
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
    </div>
</template>

<script>
import experienceJSON from "@/assets/json/Experience.json";

export default {
    name: "Experience",

    data() {
        return {
            experienceData: experienceJSON,
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