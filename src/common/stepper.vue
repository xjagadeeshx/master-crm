<template>
  <section>
    <v-stepper v-model="index">
      <v-stepper-header>
        <v-stepper-step :complete="index > 1" step="1">
          <div>Personal Info</div>
        </v-stepper-step>

        <v-stepper-step :complete="index > 2" step="2" color="#2eb82e">
          <div>Contact Info</div>
        </v-stepper-step>

        <v-stepper-step :complete="index > 3" step="3" color="#999900">
          <div>Educational & Employment Info</div>
        </v-stepper-step>
        <v-stepper-step :complete="index > 4" step="4" color="#b30086">
          <div>Compliance Info</div>
        </v-stepper-step>
        <v-stepper-step :complete="index > 5" step="5" color="#cc3300">
          <div>AMDL Info</div>
        </v-stepper-step>

        <v-stepper-step :complete="index > 6" step="6" color="#663300">
          <div>Marketing Info</div>
        </v-stepper-step>
        <v-stepper-step step="7" color="#b30000">
          <div>Log Info</div>
        </v-stepper-step>
      </v-stepper-header>
      <v-container>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title> Personal Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="check">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
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
                      label="  consultant name"
                      outlined
                    >
                    </v-select
                  ></v-col>
                  <v-col cols="12" sm="6" md="8">
                    <v-text-field
                      label=" Name (as in NRIC)"
                      counter="50"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6" md="4">
                    <v-select
                      :items="items"
                      filled
                      label="  Salutation "
                      outlined
                    >
                    </v-select
                  ></v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="perferred name"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="NRIC Number" outlined></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6" md="4">
                    <v-select
                      :items="items"
                      filled
                      label=" Nationality"
                      outlined
                    >
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
                    <v-select
                      :items="items"
                      filled
                      label=" Entry Pass"
                      outlined
                    >
                    </v-select
                  ></v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="FIN No" outlined></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Passport Number  "
                      outlined
                    ></v-text-field> </v-col
                ></v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Picker in menu"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          outlined
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(date)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Age Last Birthday"
                      placeholder="Age Last Birthday"
                      filled
                      outline
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Age Next Birthday"
                      placeholder="Age Next Birthday"
                      filled
                      outline
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6" md="4">
                    <v-select :items="items" filled label=" Gender" outlined>
                    </v-select
                  ></v-col>
                  <v-col class="d-flex" cols="12" sm="6" md="4">
                    <v-select
                      :items="items"
                      filled
                      label="Marital Status "
                      outlined
                    >
                    </v-select
                  ></v-col>
                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="10" sm="10" md="2">
                    <v-radio-group v-model="radios">
                      <template v-slot:label>
                        <div><strong class="a">Smoking Status</strong></div>
                      </template>

                      <v-radio value="yes">
                        <template v-slot:label>
                          <div><strong class="success--text">yes</strong></div>
                        </template>
                      </v-radio>

                      <v-radio value="No">
                        <template v-slot:label>
                          <div><strong class="primary--text">No</strong></div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="12" md="1">
                    <v-radio-group v-model="radios">
                      <template v-slot:label>
                        <div><strong class="b">FAiWA Client</strong></div>
                      </template>
                      <v-radio value="yes">
                        <template v-slot:label>
                          <div><strong class="success--text">yes</strong></div>
                        </template>
                      </v-radio>
                      <v-radio value="No">
                        <template v-slot:label>
                          <div><strong class="primary--text">No</strong></div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="d-flex" cols="12" sm="6" md="4 ">
                    <v-select
                      :items="items"
                      filled
                      label="Perferred Language"
                      outlined
                    >
                    </v-select
                  ></v-col>
                  <v-col class="d-flex" cols="12" sm="6" md="4 ">
                    <v-select :items="items" filled label="Religion" outlined>
                    </v-select
                  ></v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="12" md="3">
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Remarks"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </form>
          </v-stepper-content>
          <!-- <div class="col-md-12 bg-light text-right">
            <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
              goBack
            </v-btn>
            <v-btn color="#00cc99" class="mr-4" @click="save"> Save </v-btn>
            <v-btn color="#ff9933" class="mr-4" v-on:click="check">
              Save & Next
            </v-btn>
          </div> -->
          <v-stepper-content step="2">
                      <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title> Personal Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
                  </v-btn>
                </div>
              </div>
              <v-spacer></v-spacer>
              <hr />
            </v-container>
            
            <contact></contact>
  
          </v-stepper-content>

          <v-stepper-content step="3">
                     <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title>Education & Employment  Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
                  </v-btn>
                </div>
              </div>
              <v-spacer></v-spacer>
              <hr />
            </v-container>
            <education></education>
            <div class="row">
              <div class="col"></div>

              <div class="col bg-light text-right">
                <v-btn color="#1a53ff" class="mr-5" v-on:click="index -= 1">
                  back </v-btn
                ><v-btn color="#00cc99" class="mr-5" @click="submit">
                  submit
                </v-btn>

                <v-btn class="mr-5" color="#ff9933" v-on:click="check">
                  Save & Next
                </v-btn>
              </div>
            </div>
            <v-spacer></v-spacer>
          </v-stepper-content>
          <v-stepper-content step="4">
                     <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title>compliance Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
                  </v-btn>
                </div>
              </div>
              <v-spacer></v-spacer>
              <hr />
            </v-container>
            <compliance></compliance>
            <div class="row">
              <div class="col"></div>

              <div class="col bg-light text-right">
                <v-btn color="#1a53ff" class="mr-5" v-on:click="index -= 1">
                  back </v-btn
                ><v-btn color="#00cc99" class="mr-5" @click="submit">
                  submit
                </v-btn>

                <v-btn class="mr-5" color="#ff9933" v-on:click="check">
                  Save & Next
                </v-btn>
              </div>
            </div>
            <v-spacer></v-spacer>
          </v-stepper-content>
          <v-stepper-content step="5">
                     <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title>Amdl Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
                  </v-btn>
                </div>
              </div>
              <v-spacer></v-spacer>
              <hr />
            </v-container>
            <AMDL></AMDL>
            <div class="row">
              <div class="col"></div>

              <div class="col bg-light text-right">
                <v-btn color="#1a53ff" class="mr-5" v-on:click="index -= 1">
                  back </v-btn
                ><v-btn color="#00cc99" class="mr-5" @click="submit">
                  submit
                </v-btn>

                <v-btn class="mr-5" color="#ff9933" v-on:click="index += 1">
                  Save & Next
                </v-btn>
              </div>  
            </div>
          </v-stepper-content>
          <v-spacer></v-spacer>
          <v-stepper-content step="6">
                     <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title>Marketing  Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
                  </v-btn>
                </div>
              </div>
              <v-spacer></v-spacer>
              <hr />
            </v-container>
            <marketing></marketing>
            <div class="row">
              <div class="col"></div>

              <div class="col bg-light text-right">
                <v-btn color="#1a53ff" class="mr-5" v-on:click="index -= 1">
                  back </v-btn
                ><v-btn color="#00cc99" class="mr-5" @click="submit">
                  submit
                </v-btn>

                <v-btn class="mr-5" color="#ff9933" v-on:click="check">
                  Save & Next
                </v-btn>
              </div>
            </div>
          </v-stepper-content>
          <v-spacer></v-spacer>
          <v-stepper-content step="7">
                     <v-container>
              <div class="row mb-2 d-flex justify-content-center">
                <div class="col-md-6 mt-1">
                  <v-toolbar-title> Log Info </v-toolbar-title>
                </div>

                <div class="col-md-6 bg-light text-right">
                  <v-btn color="#1a53ff" class="mr-4" v-on:click="index -= 1">
                    goBack
                  </v-btn>
                  <v-btn color="#00cc99" class="mr-4" @click="save">
                    Save
                  </v-btn>
                  <v-btn color="#ff9933" class="mr-4" v-on:click="check">
                    Save & Next
                  </v-btn>
                </div>
              </div>
              <v-spacer></v-spacer>
              <hr />
            </v-container>
            <log></log>
            <div class="row">
              <div class="col"></div>

              <div class="col bg-light text-right">
                <v-btn color="#1a53ff" class="mr-5" v-on:click="index -= 1">
                  back
                </v-btn>
              </div>
            </div>
          </v-stepper-content>
        </v-stepper-items>
      </v-container>
    </v-stepper>
  </section>
</template>
<script>
import compliance from "../components/compliance.vue";
 import contact from "../components/contact.vue";
import education from "../components/education.vue";
import marketing from "../components/marketing.vue";
import log from "../components/log.vue";
import AMDL from "../components/AMDL.vue";
export default {
  name: "stepper",
  components: {
     contact,
    education,
    compliance,
    marketing,
    log,
    AMDL,
  },
  data: () => ({
    index: 1,

    text: "consultant name",

    items: ["Foo", "Bar", "Fizz", "Buzz"],

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  methods:{
        check: function() {
         if(this.index>=7){
          this.index=1
         }else{
         var res=this.index +=1
         this.index=res
        }
        }
  }
};
</script>
<style>
.card {
  height: 40px;
  width: 200px;
  background-color: #00cc99;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  margin-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  cursor: pointer;
}
.a {
  font-weight: 900;
  font-style: normal;
}
.b {
  font-weight: 900;
}
</style>