<template>
  <div id="app">
    <v-app id="inspire">
      <appbar
        @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"
        ref="name"
      ></appbar>

      <navbar ref="drawer"></navbar>

      <v-main>
        <v-container>
          <div class="row mb-2 d-flex justify-content-center">
            <div class="col-md-6 mt-1">
              <v-toolbar-title> filter </v-toolbar-title>
            </div>

            <div class="col-md-6 bg-light text-right">
              <v-btn color="#00cc99" class="mr-4" to="Personal">
                New personal Info
              </v-btn>
              <v-btn color="#ff9933" class="mr-4" @click="Newcorporateinfo">
                New corporate Info
              </v-btn>
            </div>
          </div>
          <v-spacer></v-spacer>
          <hr />
        </v-container>

        <form>
          <v-container>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6" md="4">
                <v-select
                  :items="items"
                  filled
                  label="search by consultant"
                  outlined
                >
                </v-select
              ></v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="client Name"
                  counter="50"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field label="NRIC Number" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Passport Number" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="FIN Number" outlined></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Client ID" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-text-field label="Contact" outlined></v-text-field>
              </v-col>
              <v-col cols="6" sm="2" md="">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="E-mail"
                  outlined
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field
              ></v-col>
            </v-row>
            <div class="row">
              <div class="col">
                <v-btn color="#00cc99" class="mr-12">
                  Export
                  <i class="mdi mdi-export-variant" aria-hidden="true"></i>
                </v-btn>
              </div>

              <div class="col bg-light text-right">
                <v-btn color="#00cc99" class="mr-5" @click="submit">
                  submit
                </v-btn>
                <v-btn class="mr-5" @click="clear"> clear </v-btn>
              </div>
            </div>
          </v-container>
        </form>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import appbar from "../common/appbar";
import navbar from "../common/navbar";

export default {
  components: {
    navbar,
    appbar,
  },
  data: () => ({
    drawer: null,
    dialog: false,

    items: [
      { text: "thinkbig" },
      { text: " besant" },
      { text: "green tech" },
      {
        text: "all",
        model: true,
      },
      {
        text: "Master Account",
        model: false,
      },
      {
        text: "biz tran.Register",
        model: false,
      },
      {
        text: "Document Mgt.",
        model: false,
      },
      { text: "otheres" },
      { text: "eDOCU (FAR)" },
      { text: "AutoSync LI" },
    ],
  }),
};
</script>
  
<style>
.hidden-sm-and-down {
  color: gray;
}
.yash {
  font-size: 5;
}
.new {
  color: gray;
  text-align: end;
}
.wan {
  color: white;
}
</style>