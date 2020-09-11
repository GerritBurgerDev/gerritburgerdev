<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
        stateless
    >
        <v-list dense>
            <v-list-item link
                         v-for="item in this.sections"
                         :key="item"
                         @click="goTo(item.id)"
            >
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "NavDrawer",

    props: ['drawer'],

    data() {
        return {
            sections: [
                {name: 'About Me', id: '#aboutMe', icon: 'mdi-information'},
                {name: 'Experience', id: '#experience', icon: 'mdi-briefcase'},
                {name: 'Education', id: '#education', icon: 'mdi-school'},
                {name: 'Extracurricular Activities', id: '#extracurricularActivities', icon: 'mdi-clipboard-text'},
                {name: 'Honors & Awards', id: '#awards', icon: 'mdi-trophy'},
                {name: 'Projects', id: '#projects', icon: 'mdi-laptop'},
            ],
            options: {offset: 0, duration: 300, easing: 'linear'},
        }
    },

    methods: {
        goTo(target) {
            this.$nextTick(() => this.$vuetify.goTo(target, this.options));
        }
    }
}
</script>

<style scoped>

</style>