<template>
<section>
   <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      dark
    >
      <v-app-bar-nav-icon color="white" style="background-color:#00cc99" @click.stop="$emit('toggle-drawer')"  @click="drawer = !drawer" ></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 400px"
        class="ml-0 pl-4"
        color="primary"
      >
        <span class="hidden-sm-and-down">MASTER CRM INFO
          <v-toolbar-items class="yash" >MASTER CRM INFO / INDEX</v-toolbar-items>
        </span>
      </v-toolbar-title>
 
      <v-spacer></v-spacer>
      

      <v-btn icon>
        <v-icon color="black">mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="black">mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          color="yellow"
          item
        >
          </v-avatar>
      </v-btn>
    </v-app-bar>

</section>
</template>

<script>

  export default {
 name: 'appbar',

data: () => ({ 
  
    
  dialog: false,
      drawer: false
      
     
}),
  };
    
    
  </script>
  
<style>
.hidden-sm-and-down{
  color: gray;
}
.yash{
  font-size: 5;
}
.new{
  color: gray;
  text-align: end;
}
.wan{
  color:white;
}

</style>