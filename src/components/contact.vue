<template>
  <div>
    <div class="d-flex"></div>
    <v-expansion-panels v-model="panel" multiple>
      <v-expansion-panel  >
        <v-expansion-panel-header>Contact Info</v-expansion-panel-header>
        <v-expansion-panel-content
          ><hr />
          <form>
            <v-container>
              <v-row>
                <v-col class="d-flex" cols="8" sm="6" md="3">
                  <v-select
                    :items="items"
                    filled
                    label="Primary Contact(HP)"
                    outlined
                  >
                  </v-select
                ></v-col>
                <v-col cols="8" sm="6" md="3">
                  <v-text-field outlined></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
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
                </v-radio-group>
                <v-spacer></v-spacer>
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
                        outlined="outset"
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
              </v-row>
              <v-row>
                <v-col class="d-flex" cols="8" sm="6" md="3">
                  <v-select
                    :items="items"
                    filled
                    label="Secondary Contact (HP)"
                    outlined
                  >
                  </v-select
                ></v-col>
                <v-col cols="8" sm="6" md="3">
                  <v-text-field outlined></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
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
                </v-radio-group>
                <v-spacer></v-spacer>

                <v-col cols="12" sm="6" md="4">
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
                        label="Effective Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined="outset"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date2" no-title scrollable>
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
                <v-col class="d-flex" cols="8" sm="6" md="3">
                  <v-select :items="items" filled label="Home Contact" outlined>
                  </v-select
                ></v-col>
                <v-col class="d-flex" cols="8" sm="6" md="3">
                  <v-text-field outlined></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
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
                </v-radio-group>
                <v-spacer></v-spacer>

                <v-col cols="12" sm="6" md="4">
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
                        label="Effective Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined="outset"
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
              </v-row>
              <v-row>
                <v-col class="d-flex" cols="8" sm="6" md="3">
                  <v-select
                    :items="items"
                    filled
                    label=" Office Contact "
                    outlined
                  >
                  </v-select
                ></v-col>
                <v-col class="d-flex" cols="8" sm="6" md="2">
                  <v-text-field outlined></v-text-field
                ></v-col>
                <v-col class="d-flex" cols="8" sm="6" md="1">
                  <v-text-field outlined></v-text-field
                ></v-col>
                <v-spacer></v-spacer>
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
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
                </v-radio-group>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="4">
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
                        label="Effective Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined="outset"
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
                <v-col cols="10" sm="2" md="6">
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="Primary Email Addresss"
                    outlined
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field
                ></v-col>
                <v-spacer></v-spacer>
                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
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
                </v-radio-group>
                <v-spacer></v-spacer>

                <v-col cols="12" sm="6" md="4">
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
                        label="Effective Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined="outset"
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
              </v-row>
              <v-row>
                <v-col cols="10" sm="2" md="6">
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="Secondary Email Address "
                    outlined
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field
                ></v-col>
                <v-spacer></v-spacer>

                <v-radio-group v-model="row" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
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
                </v-radio-group>
                <v-spacer></v-spacer>

                <v-col cols="12" sm="6" md="4">
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
                        label="Effective Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        outlined="outset"
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
            </v-container>
          </form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <hr />
    <v-container> </v-container>

    <div class="d-flex"></div>
    <v-expansion-panels v-model="panel1" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>Address Info</v-expansion-panel-header>
        <v-expansion-panel-content>
          <hr />
          <v-form>
            <v-expansion-panel>
              <v-expansion-panel-header >
                Local Residential Address
        <v-checkbox
                  v-model="checkbox"
                  :label="`also Mailing Adress`"
                  @click.native="check($event)"
                ></v-checkbox>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <hr />
                <v-form>
                  <v-container> </v-container>
                  <v-row>
                    <v-col class="d-flex" cols="8" sm="6" md="4">
                      <v-text-field label="Postal Code" outlined> </v-text-field
                    ></v-col>
                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="Unit Number" outlined></v-text-field>
                    </v-col>

                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="Block" outlined></v-text-field>
                    </v-col>
                    <v-col cols="8" sm="6" md="4">
                      <v-text-field label="Building" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="6" md="4">
                      <v-text-field label="StreetName" outlined> </v-text-field
                    ></v-col>
                    <v-col cols="8" sm="6" md="4">
                      <v-text-field label="City" outlined></v-text-field>
                    </v-col>
                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="State" outlined></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="8" sm="6" md="2">
                      <v-select :items="items" filled label="country" outlined>
                      </v-select
                    ></v-col>
                  </v-row>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-form>
          <hr />
          <v-form>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Over Residential Address
                <v-checkbox
                  v-model="checkbox1"
                  :label="`also Mailing Adress`"
                  @click.native="check1($event)"
                ></v-checkbox>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <hr />
                <v-form>
                  <v-container> </v-container>
                  <v-row>
                    <v-col class="d-flex" cols="8" sm="6" md="4">
                      <v-text-field label="Postal Code" outlined> </v-text-field
                    ></v-col>
                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="Unit Number" outlined></v-text-field>
                    </v-col>

                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="Block" outlined></v-text-field>
                    </v-col>
                    <v-col cols="8" sm="6" md="4">
                      <v-text-field label="Building" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="6" md="4">
                      <v-text-field label="StreetName" outlined> </v-text-field
                    ></v-col>
                    <v-col cols="8" sm="6" md="4">
                      <v-text-field label="City" outlined></v-text-field>
                    </v-col>
                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="State" outlined></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="8" sm="6" md="2">
                      <v-select :items="items" filled label="country" outlined>
                      </v-select
                    ></v-col>
                  </v-row>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-form>
          <hr />
          <v-form>
            <v-expansion-panel>
              <v-expansion-panel-header
                >Mailing Address <v-spacer></v-spacer>
                <v-radio-group v-model="radioGroup" row>
                  <template v-slot:label>
                    <v-row>
                      <div class="col-xs-6 col-md-8"><strong>DNC</strong></div>
                    </v-row>
                  </template>

                  <v-radio    @click.native="check3($event)">
                    <template v-slot:label>
                      <div><strong class="success--text">Yes</strong></div>
                    </template>
                  </v-radio>
                  <v-radio   @click.native="check4($event)">
                    <template v-slot:label>
                      <div><strong class="primary--text">No</strong></div>
                    </template>
                  </v-radio>
                </v-radio-group>
                <div class="col-md-6 bg-light text-left"></div>

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
                      label="Effective Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      class="m-0 p-0"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date7"
                    no-title
                    scrollable
                    class="m-0 p-0"
                  >
                    <v-btn text color="primary" @click="menu7 = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu7.save(date7)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <hr />
                <v-form>
                  <v-container> </v-container>
                  <v-row>
                    <v-col class="d-flex" cols="8" sm="6" md="4">
                      <v-text-field label="Postal Code" outlined> </v-text-field
                    ></v-col>
                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="Unit Number" outlined></v-text-field>
                    </v-col>

                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="Block" outlined></v-text-field>
                    </v-col>
                    <v-col cols="8" sm="6" md="4">
                      <v-text-field label="Building" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" cols="12" sm="6" md="4">
                      <v-text-field label="StreetName" outlined> </v-text-field
                    ></v-col>
                    <v-col cols="8" sm="6" md="4">
                      <v-text-field label="City" outlined></v-text-field>
                    </v-col>
                    <v-col cols="8" sm="6" md="2">
                      <v-text-field label="State" outlined></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="8" sm="6" md="2">
                      <v-select :items="items" filled label="country" outlined>
                      </v-select
                    ></v-col>
                  </v-row>
                </v-form>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-form>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <hr />
  </div>
</template>

<script>
export default {
  data: () => ({
    e1: 1,
    drawer: null,
    dialog: false,
  panel: [0,1],
  panel1:[0,1],
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
    checkbox: false,
     radioGroup: 1,
      checkbox1: false,
    includeFiles: true,
        includeFiles1: true,
    enabled: false,
  }),
  methods:{
        check: function(e) {
      e.cancelBubble = true;
      console.log('checkbox checked')
    },
    check1: function(e) {
      e.cancelBubble = true;
      console.log('checkbox checked')
    },
        check3: function(e) {
      e.cancelBubble = true;
     this.radioGroup=0
    },
           check4: function(e) {
      e.cancelBubble = true;
 this.radioGroup=1
},
  }
};
</script>
  
<style scoped>
.padLeft-10 {
  padding-left: 10px;
}
</style>