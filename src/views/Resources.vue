<template>
  <v-container fluid class="resources">
    <v-row>
      <h1>Resources</h1>
    </v-row>
    <v-row>
      <v-col
      >
        <v-btn-toggle
          v-model="selected_resource_type"
          tile
          
          >
          <v-btn
            v-for="(resource_type, index) in resource_types"
            :key="index"
            :value="resource_type"
            small
            
            class="primary">
            {{ resource_type }}
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="(resource,i) in filteredResources" :key="i">
          <v-expansion-panel-header>
            <div>
              <h2>{{resource.name}}</h2>
              <h5 class="resource_author">
                  <span>{{resource.type | capitalize}}</span>
                  <span v-if="resource.author"> / {{resource.author}}</span>
              </h5>
            </div>
            <div class="link_container">
            <a :href="resource.url" target="_blank">&nbsp;<v-icon @click.native.stop color="primary">mdi-link-variant</v-icon></a>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <span v-html="resource.description"></span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<style>
.resources {
  max-width:800px;
  margin: 0 auto;
}
.resources h1 {
  margin: 20px 0;
  margin-left:20px;
}
.resource_author {
  margin-top:4px;
}
.v-btn-toggle {
  flex-wrap: wrap;
  justify-content: center;
  background-color:transparent !important;
}
.v-btn-toggle .v-btn {
  margin:2px;
}
.v-btn-toggle .v-btn.theme--light:not(.v-btn--active) {
  background-color: transparent !important;
  border:1px solid grey;
}
.v-btn-toggle .v-btn.theme--dark:not(.v-btn--active) {
  background-color: transparent !important;
  border:1px solid grey;
}
.v-btn-toggle .v-btn.theme--light:not(.v-btn--active) .v-btn__content {
  color:black !important;
}

.v-btn-toggle .theme--light .v-btn__content {
  color: white;
}
.v-btn-toggle .v-btn--active.theme--light .v-btn__content {
  color:white;
}
.link_container {
  display:flex;
  flex-direction: row-reverse;
  align-items:center;
  padding-right:10px;
}

</style>
<script>
import json from "../data/resources.json";
export default {
  name: "Events",
  data: () => ({
    resource_types: ['app', 'article', 'book', 'documentary', 'film', 'video', 'website'], // 'business', 'restaurant'],
    selected_resource_type: null,
    resources: json.resources
  }),
  computed: {
      filteredResources: function() {
        let resources = this.resources.slice()
        if (this.selected_resource_type != null) {
          resources = resources.filter(e => {
            return e.type == this.selected_resource_type
          })
        }
        resources.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        return resources
      }
  },
  filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    },
  created: function() {}
};
</script>
