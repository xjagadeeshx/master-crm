<template>
  <div>
    <div class="d-flex"></div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Insert</v-expansion-panel-header>
        <v-expansion-panel-content>
          <form>
            <v-container> </v-container>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label="  consultant name"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label=" Name (as in NRIC)"
                  counter="50"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="NRIC Number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label="  Salutation " outlined>
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="perferred name" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="FIN No" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Nationality" outlined>
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label=" Country of Residence"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Race" outlined>
                </v-select
              ></v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Entry Pass" outlined>
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Religion" outlined>
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Passport Number  "
                  outlined
                ></v-text-field> </v-col
            ></v-row>
          </form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container> </v-container>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Update</v-expansion-panel-header>
        <v-expansion-panel-content>
          <form>
            <v-container> </v-container>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label="  consultant name"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label=" Name (as in NRIC)"
                  counter="50"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="NRIC Number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label="  Salutation " outlined>
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="perferred name" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="FIN No" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Nationality" outlined>
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label=" Country of Residence"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Race" outlined>
                </v-select
              ></v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Entry Pass" outlined>
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Religion" outlined>
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Passport Number  "
                  outlined
                ></v-text-field> </v-col
            ></v-row>
          </form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container> </v-container>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Delete</v-expansion-panel-header>
        <v-expansion-panel-content>
          <form>
            <v-container> </v-container>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label="  consultant name"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label=" Name (as in NRIC)"
                  counter="50"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="NRIC Number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label="  Salutation " outlined>
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="perferred name" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="FIN No" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Nationality" outlined>
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label=" Country of Residence"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Race" outlined>
                </v-select
              ></v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Entry Pass" outlined>
                </v-select
              ></v-col>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select :items="items" filled label=" Religion" outlined>
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Passport Number  "
                  outlined
                ></v-text-field> </v-col
            ></v-row>
          </form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-container> </v-container>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>AutoSync</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card :elevation="0">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-col class="d-flex" cols="12" sm="6" md="3">
                <v-text-field
                  v-model="search"
                  append-icon=""
                  label="Search"
                  outlined
                  hide-details
                ></v-text-field
              ></v-col>
            </v-card-title>

            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
              :sort-desc="[false, true]"
              multi-sort
              class="elevation-1"
            >
            </v-data-table>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-container> </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,

    search: "",
    headers: [
      {
        text: "Record ID",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "API name", value: "API name" },
      { text: "Function Name", value: "Function Name" },
      { text: "Action Name", value: "Action Name" },
      { text: "Date and Time", value: "Date and Time" },

      { text: "Action", value: "Action" },
    ],
    e1: 1,
    drawer: null,
    dialog: false,
  }),
};
</script>
  
<style>
</style>