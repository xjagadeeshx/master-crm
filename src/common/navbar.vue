<template>
<section>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      persistent
      
    >

      <v-list dense>
        <template v-for="item in items">
          <v-row
        
            v-if="item.heading"
            :key="item.heading"
            align="center"
          
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
        
              cols="6"
              class="text-center"
          
            >
              
            </v-col>
          </v-row>
          <v-list-group 
            v-else-if="item.children"
           :key="item.text"  
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item.icon"
            :append-icon="!item.model ? 'mdi-chevron-down' : item['icon-alt']"
            
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              color="white"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
            color="white"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
        
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
         
        </template>
      </v-list>
    </v-navigation-drawer>
    
      </section>

</template>

<script>

  export default {
 name: 'navbar',
data: () => ({ 
  
    
    drawer: true,  
    
      items: [
        { icon: 'mdi-account', text: 'dashborad' },
        { icon: 'mdi-alert-circle-outline', text: ' FAR info' },
        { icon: 'mdi-cogs', text: 'Policy Transfer' },
        {
          
          icon: 'mdi-account-arrow-right',
    
        'icon-alt': 'mdi-chevron-down',
        text: 'Master CRM',
          model: true,
          children: [
             { icon: 'mdi-hand-pointing-right',text: 'Master CRM Index' },
            {icon:'mdi-hand-pointing-right',text: 'audit Info' },
            { icon:'mdi-hand-pointing-right',text: 'Update Address' },
            {icon:'mdi-hand-pointing-right', text: 'AML Index' },
            {icon:'mdi-hand-pointing-right', text: 'Consultant Change' },
               {icon:'mdi-hand-pointing-right',text: 'Move Document' },
          ],
        },
        {
          icon: 'mdi-database',
          'icon-alt': 'mdi-chevron-down',
          text: 'Master Account',
          model: false,
          children: [
            {icon:'mdi-hand-pointing-right', text: 'Import' },
            { icon:'mdi-hand-pointing-right',text: 'Export' },
            {icon:'mdi-hand-pointing-right', text: 'Export' },
            { icon:'mdi-hand-pointing-right',text: 'Print' },
            {icon:'mdi-hand-pointing-right', text: 'Undo changes' },
            {icon:'mdi-hand-pointing-right', text: 'Other contacts' },
          ],
        },
        {
          icon: 'mdi-format-list-bulleted',
          'icon-alt': 'mdi-chevron-down',
          text: 'biz tran.Register',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-file-replace', text: 'Report' },
        {
         icon: 'mdi-cloud-upload',
          'icon-alt': 'mdi-chevron-down',
         text: 'Document Mgt.',
          model: false,
          children: [
            
            { text: 'Import', },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-file-replace', text: 'Customer Servicing' },
        { icon: 'mdi-format-list-bulleted', text: 'eDOCU (FAR)' },
        { icon: 'mdi-cogs', text: 'AutoSync LI' },
     
      ],         
    
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