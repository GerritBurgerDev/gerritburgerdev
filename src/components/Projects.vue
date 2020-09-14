<template>
    <div>
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
        <!-- Interactive Science Yearbook -->
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    min-height="200"
                    elevation="2"
                    tile
                >
                    <v-card-title class="justify-center mb-2 pb-2 pt-2">
                        <p class="ma-0 pa-0">
                            <span>Interactive Science Yearbook</span>
                            <span><hr color="red" width="100%" style=""/></span>
                        <p/>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-map-marker
                                    </v-icon>
                                    <span>Stellenbosch University</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span class="float-left">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-calendar
                                    </v-icon>
                                    <span>2020</span>
                                </span>
                                <span class="float-right">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-clock
                                    </v-icon>
                                    <span>1 year</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <a href="#" class="float-md-right text-decoration-none">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-github
                                    </v-icon>
                                    <span>Source code</span>
                                </a>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Developed an interactive webapp for the Stellenbosch faculty of science yearbook.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Developed functionalities to ease the life of prospective, undergraduate and
                                postgraduate students as well as staff.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Performed data preparation on data read from a hard copy of the yearbook.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Converted raw data from the hard copy to JSON objects.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Worked with ArangoDB.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Used VueJS and Vuetify to create a modern and creative single page application.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="d-flex"
                            >
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey" class="pt-2 pl-2">
                                        mdi-language-python
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey" class="pt-2 pl-2">
                                        mdi-flask
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey" class="pt-2 pl-2">
                                        mdi-vuejs
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                >
                                    <v-img :src="require('@/assets/images/arango.png')" height="35" width="35"
                                           class="mt-2 ml-2"/>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Software Engineering -->
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    min-height="200"
                    elevation="2"
                    tile
                >
                    <v-card-title class="justify-center mb-2 pb-2 pt-2">
                        <p class="ma-0 pa-0">
                            <span>Software Engineering</span>
                            <span><hr color="red" width="100%" style=""/></span>
                        <p/>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-map-marker
                                    </v-icon>
                                    <span>Stellenbosch University</span>
                                </span>
                            </v-col>
                            <v-col class="text-md-center pt-0 pt-md-3"
                                   cols="6"
                                   md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-calendar
                                    </v-icon>
                                    <span>2019/07 - 2019/11</span>
                                </span>

                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="6"
                                md="4"
                            >
                                <span class="float-right">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-clock
                                    </v-icon>
                                    <span>5 months</span>
                                </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Group project in collaboration with Impact Radius to develop a website that displayed
                                and
                                categorized scraped websites.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Lead and managed the team.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Worked with the Google Cloud Platform.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="d-flex"
                            >
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-python
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-flask
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-javascript
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-html5
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-css3
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-google-cloud
                                    </v-icon>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Othello Project -->
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    min-height="200"
                    elevation="2"
                    tile
                >
                    <v-card-title class="justify-center mb-2 pb-2 pt-2">
                        <p class="ma-0 pa-0">
                            <span>Othello Project</span>
                            <span><hr color="red" width="100%" style=""/></span>
                        <p/>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-map-marker
                                    </v-icon>
                                    <span>Stellenbosch University</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span class="float-left">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-calendar
                                    </v-icon>
                                    <span>2019/02 - 2019/06</span>
                                </span>
                                <span class="float-right">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-clock
                                    </v-icon>
                                    <span>5 months</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <a href="https://github.com/GerritBurgerDev/Othello" target="_blank"
                                   class="float-md-right text-decoration-none">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-github
                                    </v-icon>
                                    <span>Source code</span>
                                </a>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Developed an AI player for the Othello board game using tree search algorithms.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Used the MPI library for concurrency.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="d-flex"
                            >
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-c
                                    </v-icon>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Networking Project -->
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    min-height="200"
                    elevation="2"
                    tile
                >
                    <v-card-title class="justify-center mb-2 pb-2 pt-2">
                        <p class="ma-0 pa-0">
                            <span>Networking Project</span>
                            <span><hr color="red" width="100%" style=""/></span>
                        <p/>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-map-marker
                                    </v-icon>
                                    <span>Stellenbosch University</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span class="float-left">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-calendar
                                    </v-icon>
                                    <span>2019/07 - 2019/11</span>
                                </span>
                                <span class="float-right">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-clock
                                    </v-icon>
                                    <span>5 months</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <a href="https://github.com/GerritBurgerDev/Networking" target="_blank"
                                   class="float-md-right text-decoration-none">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-github
                                    </v-icon>
                                    <span>Source code</span>
                                </a>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Developed a multi-threaded client-server chat program.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Used the PySide2 library for front-end development.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="d-flex"
                            >
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-python
                                    </v-icon>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Holiday Accommodation Site -->
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    min-height="200"
                    elevation="2"
                    tile
                >
                    <v-card-title class="justify-center mb-2 pb-2 pt-2">
                        <p class="ma-0 pa-0">
                            <span>Holiday Accommodation Site</span>
                            <span><hr color="red" width="100%" style=""/></span>
                        <p/>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-map-marker
                                    </v-icon>
                                    <span>Stellenbosch University</span>
                                </span>
                            </v-col>
                            <v-col class="text-center pt-0 pt-md-3"
                                   cols="6"
                                   md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-calendar
                                    </v-icon>
                                    <span>2019/03 - 2019/04</span>
                                </span>

                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="6"
                                md="4"
                            >
                                <span class="float-right">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-clock
                                    </v-icon>
                                    <span>2 months</span>
                                </span>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Group project to develop a mock holiday accommodation website.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Lead and managed the team.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="d-flex"
                            >
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-php
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-javascript
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-html5
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-css3
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-img :src="require('@/assets/images/sql.png')" height="35" width="35"
                                           class="mt-2 ml-2"/>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Twitter Lite -->
        <v-row>
            <v-col>
                <v-card
                    class="mx-auto"
                    min-height="200"
                    elevation="2"
                    tile
                >
                    <v-card-title class="justify-center mb-2 pb-2 pt-2">
                        <p class="ma-0 pa-0">
                            <span>Twitter Lite</span>
                            <span><hr color="red" width="100%" style=""/></span>
                        <p/>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span>
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-map-marker
                                    </v-icon>
                                    <span>Stellenbosch University</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <span class="float-left">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-calendar
                                    </v-icon>
                                    <span>2019/05</span>
                                </span>
                                <span class="float-right">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-clock
                                    </v-icon>
                                    <span>1 month</span>
                                </span>
                            </v-col>
                            <v-col
                                class="pt-0 pt-md-3"
                                cols="12"
                                md="4"
                            >
                                <a href="https://github.com/GerritBurgerDev/TwitterLite" target="_blank"
                                   class="float-md-right text-decoration-none">
                                    <v-icon medium color="red darken-3" class="pr-1 mb-1">
                                        mdi-github
                                    </v-icon>
                                    <span>Source code</span>
                                </a>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Group project to develop a mock Twitter website
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="ma-0 pa-0"
                            >
                                <v-icon medium color="red darken-3" class="pr-1 ml-3 mb-1">
                                    mdi-chevron-double-right
                                </v-icon>
                                Lead and managed the team.
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                                class="d-flex"
                            >
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-python
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-flask
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-javascript
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-html5
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                    class="mr-2"
                                >
                                    <v-icon large color="grey " class="pt-2 pl-2">
                                        mdi-language-css3
                                    </v-icon>
                                </v-card>
                                <v-card
                                    height="50"
                                    width="52"
                                >
                                    <v-img :src="require('@/assets/images/neo4j.png')" height="35" width="35"
                                           class="mt-2 ml-2"/>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Projects"
}
</script>

<style scoped>

</style>