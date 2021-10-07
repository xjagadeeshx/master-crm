<template>
  <v-container>
    <div>
      <div class="d-flex"></div>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header>Education Info</v-expansion-panel-header>
          <v-expansion-panel-content>
            <form>
              <v-container> </v-container>
              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <v-text-field label="Highest Education" outlined>
                  </v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="School" outlined></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Qulification" outlined></v-text-field>
                </v-col>
              </v-row>
            </form>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <hr />
        <v-container> </v-container>
        <v-expansion-panel>
          <v-expansion-panel-header>Employment Info</v-expansion-panel-header>
          <v-expansion-panel-content>
            <form>
              <v-container> </v-container>
              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="8">
                  <v-text-field label="Employer" outlined> </v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label=" Nature of Business"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="4">
                  <v-text-field label="Occupation" outlined> </v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label=" Nature of Employment"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label=" Designation" outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex" cols="12" sm="6" md="8">
                  <v-text-field label="Length Of Service" outlined>
                  </v-text-field
                ></v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Annual Income" outlined></v-text-field>
                </v-col>
              </v-row>
            </form>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <hr />
    </div>
    <v-container> </v-container>
  </v-container>
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