<template>
    <v-footer
        fixed
        class="font-weight-light"
        :style="footerColor"
    >
        <v-row
            no-gutters
        >
            <v-col
                class="text-center"
                cols="12"
                md="12"
            >
                <v-btn icon href="https://github.com/GerritBurgerDev/" target="_blank">
                    <v-icon medium>mdi-github</v-icon>
                </v-btn>
                <v-btn icon href="https://www.linkedin.com/in/gerritburgerdev/" target="_blank">
                    <v-icon medium>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon href="#" target="_blank">
                    <v-icon medium>mdi-email</v-icon>
                </v-btn>
                <v-btn icon href="#" target="_blank">
                    <v-icon medium>mdi-phone</v-icon>
                </v-btn>
                <hr style="width: 10%; margin: auto; height: 1px"/>
            </v-col>
            <v-col
                class="text-center"
                cols="12"
                md="12"
            >
                Source code:
                <v-btn icon href="https://github.com/GerritBurgerDev/gerritburgerdev" target="_blank">
                    <v-icon medium>mdi-xml</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: "Footer",

    props: ['footerColor'],

    data() {
        return {}
    },

    methods: {},

    created() {
    }
};
</script>
