<template>
    <v-layout row wrap align-center class="pb-8">
        <v-flex class="pl-4 pr-4"
                xs12
                xl8 offset-xl2
        >
            <v-alert elevation="2" icon="mdi-cube-outline" tile type="error" color="red darken-3" colored-border
                     border="top">
                <div>Please Note: This is still a work in progress</div>
            </v-alert>

            <!-- STATUS SHEET -->
            <v-sheet
                id="aboutMe"
                class="about-me-sheet"
                height="160"
                elevation="2"
                tile="tile"
            >
                <v-row no-gutters>
                    <v-col cols="2" class="d-none d-sm-flex">
                        <v-avatar
                            class="my-xl-3 ml-xl-5"
                            size="135"
                            :aspect-ratio="16/9"
                            rounded
                            v-if="this.showAvatar"
                        >
                            <v-img src="@/assets/images/avatar.jpg"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col class="ml-2 mr-2">
                        <v-row no-gutters class="my-2">
                            <p class="ma-0 pa-0">
                                <span><h1 class="font-weight-light">Who am I?</h1></span>
                                <span><hr color="red" width="100%" style=""/></span>
                            <p/>
                        </v-row>
                        <v-row no-gutters class="mr-xl-10">
                            <v-col>
                                <div class="font-weight-light">
                                    <v-icon medium color="red darken-3" class="pr-xl-1 mb-xl-1">mdi-chevron-double-right
                                    </v-icon>
                                    Dedicated Computer Science graduate that loves fullstack development and creating
                                    exciting web applications. Always passionate and positive.
                                </div>
                            </v-col>
                        </v-row>
                        <v-row no-gutters class="float-xl-right mr-xl-10 my-2">
                            <div class="font-weight-light">
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">mdi-school</v-icon>
                                    BSc Computer Science (Hons)
                                </span>
                                <br class="d-flex d-sm-none"/>
                                <span>
                                    <v-icon medium color="red darken-3" class="ml-xl-2 mb-1">mdi-map-marker</v-icon>
                                    Stellenbosch University, South Africa
                                </span>
                            </div>
                        </v-row>
                    </v-col>
                </v-row>
            </v-sheet>

            <!-- ABOUT ME -->
            <about-me :dark-mode="darkMode"/>

            <!-- EXPERIENCE CARDS -->
            <experience/>

            <!-- MY EDUCATION CARDS -->
            <education/>

            <!-- MY EXTRACURRICULAR ACTIVITIES -->
            <ExtracurricularActivities/>

            <!-- MY HONORS AND AWARDS -->
            <awards/>

            <!-- MY PROJECTS -->
            <projects/>
        </v-flex>
    </v-layout>
</template>

<style scoped>
@media only screen and (max-width: 5000px) {
}

@media only screen and (max-width: 1904px) {
}

@media only screen and (max-width: 1264px) {
}

@media only screen and (max-width: 960px) {
}

@media only screen and (max-width: 600px) {
    .about-me-sheet {
        height: 30vh !important;
    }
}
</style>

<script>
// Connection to firebase
import db from '@/components/firebaseInit';

// Import components
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ExtracurricularActivities from "@/components/ExtracurricularActivities";
import Awards from "@/components/Awards";
import Projects from "@/components/Projects";

// Import JSON files

export default {
    name: 'Home',

    props: ['darkMode'],

    components: {
        AboutMe,
        Education,
        Experience,
        ExtracurricularActivities,
        Awards,
        Projects,
    },

    data() {
        return {
            showAvatar: false,
            references: [],
        };
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
