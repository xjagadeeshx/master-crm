<template>
  <div id="app">
    <v-app id="inspire">
      <appbar
        @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"
        ref="name"
      ></appbar>

      <navbar ref="drawer"></navbar>

      <v-main>
        <stepper></stepper>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import appbar from "../common/appbar";
import navbar from "../common/navbar";
import stepper from "../common/stepper";
export default {
  components: {
    navbar,
    appbar,
    stepper,
  },

  data: () => ({
    model: null,
    panel: [0, 1],
    drawer: null,
    dialog: false,
  }),
  methods: {
    click() {
      console.log("check");
    },
  },
};
</script>
  
<style>
.card {
  height: 40px;
  width: 200px;
  background-color: #00cc99;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  margin-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  cursor: pointer;
}
.card:hover {
  height: 40px;
  width: 200px;
  background-color: #0ba37d;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  margin-left: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  cursor: pointer;
}
</style>a