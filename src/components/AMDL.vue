<template>
  <div>
    <v-row>
      <v-col class="d-flex" cols="12" sm="6" md="6">
        <v-text-field
          v-model="search"
          append-icon=""
          label="Name"
          outlined
          hide-details
        ></v-text-field
      ></v-col>

      <v-col class="d-flex" cols="12" sm="6" md="6">
        <v-btn color="blue" outlined>Search</v-btn>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-container> </v-container>
    <div class="d-flex"></div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Wong chiew yee jenny -searched</v-expansion-panel-header
        >
        <v-expansion-panel-content> </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container> </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    e1: 1,
    drawer: null,
    dialog: false,
  }),
};
</script>
  
<style>
</style>