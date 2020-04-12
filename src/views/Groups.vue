<template>
  <div class="groups">
    <v-container class="header">
      <v-row justify="space-between" align="center">
        <v-col>
          <h1>Groups</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-select
            :items="group_types"
            v-model="selected_group_type"
            class="select_group_type"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(group,i) in filteredGroups"
        :key="i"
      >
        <v-expansion-panel-header><h2>{{group.name}}</h2></v-expansion-panel-header>
        <v-expansion-panel-content>
          <div>{{group.description}}</div>
          <div class="group_links">
            <span><a v-for="(url,j) in group.urls" :key="j" :href="url" class="group_link" target="_blank"><v-icon>{{findIconForUrl(url)}}</v-icon></a></span>
            <span>{{group.type}}</span>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<style>
  .header {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .select_group_type {
    min-width:160px;
    transform:translateY(4px);
  }
  
  .groups {
    max-width:800px;
    margin: 0 auto;
  }
  .groups h1 {
    margin: 20px 0;
  }

  @media (max-width:800px) {
    .groups h1 {
      margin: 20px;
    }
  }
  .group_links {
    margin-top:10px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
  .group_link {
    margin-right:10px;
    text-decoration: none;
  }
</style>
<script>
  import json from '../data/groups.json'
  export default {
    name: 'Groups',
    data: () => ({
      group_types: ['all', 'organization', 'community', 'sanctuary'], // 'business', 'restaurant'],
      selected_group_type: 'all',
      groups: json.groups
    }),
    methods: {
      findIconForUrl: function(url) {
        // if (url) {
        //   return 'mdi-account-group'
        // }
        if (url.includes('facebook')) {
          return 'mdi-facebook'
        } else if (url.includes('instagram')) {
          return 'mdi-instagram'
        } else if (url.includes('twitter')) {
          return 'mdi-twitter'
        } else if (url.includes('youtube')) {
          return 'mdi-youtube'
        } else if (url.includes('meetup')) {
          return 'mdi-alpha-m'
        } else {
          return 'mdi-web'
        }
      }
    },
    computed: {
      filteredGroups: function() {
        let groups = this.groups.slice()
        if (this.selected_group_type != 'all') {
          groups = groups.filter(e => {
            return e.type == this.selected_group_type
          })
        }
        groups.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        return groups
      }
    },
    created: function() {}
  }
</script>
