<template>
  <v-container fluid class="events">
    <v-row>
      <h1>Events</h1>
    </v-row>
    <v-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="(event,i) in filteredEvents" :key="i">
          <v-expansion-panel-header>
            <div>
              <h2>{{event.title}}</h2>
              <h4 class="event_author">
                <span>{{event.hosts}}</span>
              </h4>
            </div>
            <div class="link_container">
            <a :href="event.url" target="_blank">&nbsp;<v-icon @click.native.stop color="primary">mdi-link-variant</v-icon></a>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div v-html="event.description"></div>
            <span><a v-for="(url,j) in event.urls" :key="j" :href="url" class="group_link" target="_blank"><v-icon>{{findIconForUrl(url)}}</v-icon></a></span>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<style>
.events h1 {
  margin: 10px 0;
}
.events {
  max-width:800px;
  margin: 0 auto;
}
.event_author {
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
.filter_column {
  padding: 12px 0 !important;
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
import json from "../data/events.json";
export default {
  name: "Events",
  data: () => ({
    event_types: [],
    selected_event_type: null,
    events: json.events
  }),
  methods: {
    findIconForUrl: function(url) {
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
      filteredEvents: function() {
        let events = this.events.slice()
        if (this.selected_event_type != null) {
          events = events.filter(e => {
            return e.type == this.selected_event_type
          })
        }
        events.sort((a, b) => {
          return a.title.localeCompare(b.title)
        })
        return events
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
