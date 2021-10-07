<template>
  <v-container>
    <div>
      <div class="d-flex"></div>
      <v-expansion-panels v-model="panel" multiple>
        <v-expansion-panel>
          <v-expansion-panel-header
            >Compliance Info
            <v-row justify="center">
              <v-dialog
                v-model="dialog"
                persistent
                max-width="1000px"
                max-hight="2000px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Add New
                  </v-btn>
                </template>

                <v-card class="mx-auto" max-width="1000" height="2200">
                  <v-toolbar flat dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Compliance</v-toolbar-title></v-toolbar
                  >
                  <v-form>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        >Accredited Investor (AI) / Oversea Investor
                        (OI)</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-card-actions>
                          <v-row>
                            <v-col cols="12" sm="6" md="4">
                              <v-radio-group v-model="radioGroup1">
                                <template v-slot:label>
                                  <div>
                                    <strong>Accredited Investor(AI)</strong>
                                  </div>
                                </template>
                                <v-radio @click.native="check3($event)">
                                  <template v-slot:label>
                                    <div>
                                      <strong class="success--text">Yes</strong>
                                    </div>
                                  </template>
                                </v-radio>
                                <v-radio @click.native="check4($event)">
                                  <template v-slot:label>
                                    <div>
                                      <strong class="primary--text">No</strong>
                                    </div>
                                  </template>
                                </v-radio>
                              </v-radio-group> </v-col
                            ><v-spacer></v-spacer>
                            <v-col cols="12" sm="6" md="4">
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
                                    label="Effective Date"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date1"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu1 = false"
                                  >
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

                            <v-col cols="12" sm="12" md="12">
                              <v-radio-group v-model="radios">
                                <template v-slot:label>
                                  <div>
                                    <strong>Oversea Investor(OI)</strong>
                                  </div>
                                </template>
                                <v-radio value="Yes">
                                  <template v-slot:label>
                                    <div>
                                      <strong class="success--text">Yes</strong>
                                    </div>
                                  </template>
                                </v-radio>
                                <v-radio value="NO">
                                  <template v-slot:label>
                                    <div>
                                      <strong class="primary--text">No</strong>
                                    </div>
                                  </template>
                                </v-radio>
                              </v-radio-group>
                            </v-col>
                          </v-row>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-form>

                  <hr />
                  <v-form>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        >Political Exposed Person (PEP)

                        <v-radio-group v-model="radioGroup" row>
                          <template v-slot:label>
                            <v-row> </v-row>
                          </template>

                          <v-radio @click.native="check5($event)">
                            <template v-slot:label>
                              <div>
                                <strong class="success--text">Yes</strong>
                              </div>
                            </template>
                          </v-radio>
                          <v-radio @click.native="check6($event)">
                            <template v-slot:label>
                              <div>
                                <strong class="primary--text">No</strong>
                              </div>
                            </template>
                          </v-radio>
                        </v-radio-group>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-card-actions>
                          <v-row>
                            <v-col class="d-flex" cols="8" sm="6" md="4">
                              <v-text-field label="Postal Code" outlined>
                              </v-text-field
                            ></v-col>
                            <v-col cols="8" sm="6" md="2">
                              <v-text-field
                                label="Unit Number"
                                counter="50"
                                outlined
                              ></v-text-field>
                            </v-col>

                            <v-col cols="8" sm="6" md="2">
                              <v-text-field
                                label="Block"
                                outlined
                              ></v-text-field>
                            </v-col>
                            <v-col cols="8" sm="6" md="4">
                              <v-text-field
                                label="Building"
                                outlined
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-form>
                  <hr />

                  <v-form>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        >Client Due Diligence (CDD)</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-card-actions>
                          <v-row>
                            <v-col cols="12" sm="6" md="6 ">
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
                                    label="CDD Date Of Search"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date2"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu2 = false"
                                  >
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

                            <v-col cols="8" sm="6" md="6">
                              <v-text-field
                                label="CDD Number Of Hits"
                                outlined
                              ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="6 ">
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
                                    label="CDD Date of Verification"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date3"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu3 = false"
                                  >
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
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label="CDD Outcome"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label=" CDD officer-in-Charge"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label="CDD Check Dept"
                                outlined
                              ></v-select>
                            </v-col>

                            <v-col cols="12" sm="12">
                              <v-textarea
                                filled
                                auto-grow
                                label="Comments/Remarks"
                                rows="4"
                                row-height="30"
                                shaped
                              ></v-textarea>
                            </v-col>
                          </v-row>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-form>
                  <hr />
                  <v-form>
                    <v-expansion-panel>
                      <v-expansion-panel-header
                        >Enhanced Client Due Diligence
                        (ECDD)</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-card-actions>
                          <v-row>
                            <v-col cols="12" sm="6" md="6 ">
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
                                    label="ECDD Date of Search"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date4"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu4 = false"
                                  >
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
                            <v-col cols="12" sm="6" md="6 ">
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
                                    label="ECDD Date of Verification"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date5"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu5 = false"
                                  >
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
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label="ECDD  Outcome"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-row>
                              <v-col cols="12" sm="12" md="12">
                                <v-radio-group v-model="radios">
                                  <template v-slot:label>
                                    <div>
                                      <strong>ECDD Comliance Approval</strong>
                                    </div>
                                  </template>
                                  <v-radio value="Yes">
                                    <template v-slot:label>
                                      <div>
                                        <strong class="success--text"
                                          >Yes</strong
                                        >
                                      </div>
                                    </template>
                                  </v-radio>
                                  <v-radio value="NO">
                                    <template v-slot:label>
                                      <div>
                                        <strong class="primary--text"
                                          >No</strong
                                        >
                                      </div>
                                    </template>
                                  </v-radio>
                                </v-radio-group>
                              </v-col></v-row
                            >

                            <v-col cols="12" sm="6" md="6 ">
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
                                    label="ECDD Approved Date "
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date6"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu6 = false"
                                  >
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
                            <v-row>
                              <v-col cols="12" sm="12" md="12">
                                <v-radio-group v-model="radios">
                                  <template v-slot:label>
                                    <div>
                                      <strong>ECDD Report To Authorised</strong>
                                    </div>
                                  </template>

                                  <v-radio value="Yes">
                                    <template v-slot:label>
                                      <div>
                                        <strong class="success--text"
                                          >Yes</strong
                                        >
                                      </div>
                                    </template>
                                  </v-radio>
                                  <v-radio value="NO">
                                    <template v-slot:label>
                                      <div>
                                        <strong class="primary--text"
                                          >No</strong
                                        >
                                      </div>
                                    </template>
                                  </v-radio>
                                </v-radio-group>
                              </v-col></v-row
                            >
                            <v-col cols="12" sm="6" md="6 ">
                              <v-menu
                                ref="menu7"
                                v-model="menu7"
                                :close-on-content-click="false"
                                :return-value.sync="date7"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-text-field
                                    v-model="date7"
                                    label="ECDD Date of Reporting"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    outlined
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date7"
                                  no-title
                                  scrollable
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="menu7 = false"
                                  >
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu7.save(date7)"
                                  >
                                    OK
                                  </v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label="ECDD Reporting Outcome"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label="ECDD Officer-in-charge"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                              <v-select
                                :items="items"
                                filled
                                label="ECDD Check Dept"
                                outlined
                              ></v-select>
                            </v-col>
                            <v-col cols="12" sm="12">
                              <v-textarea
                                filled
                                auto-grow
                                label="ECDD Additional Comments"
                                rows="4"
                                row-height="30"
                                shaped
                              ></v-textarea>
                            </v-col>
                          </v-row>

                          <v-spacer></v-spacer>
                        </v-card-actions>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-form>
                  <hr />

                  <div class="col-md-12 bg-light text-right">
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                      Save
                    </v-btn>
                  </div>
                </v-card>
              </v-dialog>
            </v-row>
          </v-expansion-panel-header>
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
                :sort-by="['calories', 'fat']"
                :sort-desc="[false, true]"
                multi-sort
                class="elevation-1"
              >
              </v-data-table>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "AI Client",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "OI Client", value: "OI Client" },
      { text: "PEP", value: "PEP" },
      { text: "CDD Date Of Search", value: "CDD Date Of Search" },
      { text: "CDD Number Of it", value: "CDD Number Of it" },
      { text: "CDD OutCome", value: "CDD OutCome" },
      { text: "ECDD OutCome", value: "ECDD OutCome" },
      { text: "Action", value: "Action" },
    ],
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
    menu7: false,
    date7: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    radios: "No",
  }),
   methods:{
        check5: function(e) {
      e.cancelBubble = true;
     this.radioGroup=0
    },
      check6: function(e) {
      e.cancelBubble = true;
     this.radioGroup=0
    },
      check3: function(e) {
      e.cancelBubble = true;
     this.radioGroup=1
    },
      check4: function(e) {
      e.cancelBubble = true;
     this.radioGroup=1
    },
   }
};
</script>
  
<style>
</style>