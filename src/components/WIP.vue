<template>
  <v-row
      align="center"
      justify="center"
  >
    <v-col class="shrink">
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn
              :href="source"
              icon
              large
              target="_blank"
              v-on="on"
          >
            <v-icon large>mdi-cube-outline</v-icon>
          </v-btn>
        </template>
        <span>Work in progress</span>
      </v-tooltip>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "WIP"
}
</script>

<style scoped>

</style>