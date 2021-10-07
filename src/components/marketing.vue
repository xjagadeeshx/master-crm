<template>
  <div>
    <div class="d-flex"></div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Marketing Info</v-expansion-panel-header>
        <v-expansion-panel-content>
          <hr />
          <v-container> </v-container>
          <form>
            <v-row>
              <v-col cols="8" sm="6" md="2">
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <div><strong>CALL</strong></div>
                  </template>

                  <v-radio value="Yes">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="No">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="6" sm="6" md="4 ">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  :return-value.sync="date1"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date1"
                      label="Consent Date "
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date1" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu1 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu1.save(date1)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="3" sm="6" md="2">
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>MAIL</strong></div>
                    </v-row>
                  </template>

                  <v-radio value="Yes">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="No">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group></v-col
              >
              <v-col cols="6" sm="6" md="3 ">
                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="date2"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date2"
                      label="Consent Date "
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date4" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu2.save(date2)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" sm="6" md="2">
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>SMS</strong></div>
                    </v-row>
                  </template>

                  <v-radio value="Yes">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="No">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group></v-col
              >
              <v-col cols="6" sm="6" md="4 ">
                <v-menu
                  ref="menu3"
                  v-model="menu3"
                  :close-on-content-click="false"
                  :return-value.sync="date3"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date3"
                      label="Consent Date "
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date3" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu3 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu3.save(date3)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-spacer></v-spacer>
              <v-col cols="3" sm="6" md="2">
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>FAX</strong></div>
                    </v-row>
                  </template>

                  <v-radio value="Yes">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="No">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group></v-col
              >
              <v-col cols="6" sm="6" md="3 ">
                <v-menu
                  ref="menu4"
                  v-model="menu4"
                  :close-on-content-click="false"
                  :return-value.sync="date4"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date4"
                      label="Consent Date "
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date4" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu4 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu4.save(date4)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="3" sm="6" md="2">
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8">
                        <strong>LETTER</strong>
                      </div>
                    </v-row>
                  </template>

                  <v-radio value="Yes">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="No">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group></v-col
              >
              <v-col cols="6" sm="6" md="4 ">
                <v-menu
                  ref="menu5"
                  v-model="menu5"
                  :close-on-content-click="false"
                  :return-value.sync="date5"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date5"
                      label="Consent Date "
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date5" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu5 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu5.save(date5)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>

              <v-spacer></v-spacer>
              <v-col cols="8" sm="6" md="2">
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <div><strong>Only Receive Electronic Version</strong></div>
                  </template>
                  <v-radio value="Yes">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio value="NO">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="6" sm="6" md="3 ">
                <v-menu
                  ref="menu6"
                  v-model="menu6"
                  :close-on-content-click="false"
                  :return-value.sync="date6"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date6"
                      label="Consent Date "
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date6" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu6 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.menu6.save(date6)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
          </form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <hr />
    <v-container> </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    e1: 1,
    drawer: null,
    dialog: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    controls: ["calendar"],
    selectMultiple: true,
    selectCounter: true,
    modal: false,
    menu1:false,
    date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu3: false,
    date3: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu4: false,
    date4: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu5: false,
    date5: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu6: false,
    date6: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
};
</script>
  
<style>
</style>