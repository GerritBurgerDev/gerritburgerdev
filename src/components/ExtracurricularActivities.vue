<template>
    <div>
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
                   cols="12"
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
    </div>
</template>

<script>
import extracurricularJSON from "@/assets/json/Extracurricular.json";

export default {
    name: "ExtracurriculaActivities",

    data() {
        return {
            extracurricularData: extracurricularJSON,
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