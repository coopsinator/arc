<template>
  <!-- https://thevegancalculator.com/#calculator -->
  <v-container class="center">
    <h1>How long have you been vegan?</h1>
    <hr/>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field v-model="input_years" label="Years" required></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="input_months" label="Months" required></v-text-field>
      </v-col>

      <v-col cols="12" md="3">
        <v-text-field v-model="input_days" label="Days" required></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-radio-group v-model="input_units">
            <v-radio
                label="Metric"
                value="metric"
            ></v-radio>
            <v-radio
                label="Imperial"
                value="imperial"
            ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <h1>You've saved...</h1>
    <hr/>
    <div v-for="(rate, i) in rates" :key="i" class="rate">
      <v-icon size="60">{{rate.icon}}</v-icon>
      <span>{{calculateRate(rate)}} {{rate[input_units].units}}</span>
    </div>
  </v-container>

</template>
<style>
    .rate {
        font-size:2rem;
    }
    .rate span {
        margin-left:20px;

    }
    .center {
        max-width:600px;
        margin: 0 auto;
    }
</style>
<script>
export default {
  name: "Calculator",
  data: () => ({
    input_years: 0,
    input_months: 0,
    input_days: 1,
    input_units: 'metric',
    rates: [
      {
        name: "water",
        icon: "mdi-water",
        metric: {
          rate: 4163.9,
          units: "litres of water"
        },
        imperial: {
          rate: 1100,
          units: "gallons of water"
        }
      },
      {
        name: "grain",
        icon: "mdi-barley",
        metric: {
          rate: 18.1,
          units: "kg of grain"
        },
        imperial: {
          rate: 40,
          units: "lbs of grain"
        }
      },
      {
        name: "forest",
        icon: "mdi-pine-tree",
        metric: {
          rate: 2.8,
          units: "square meters of forest"
        },
        imperial: {
          rate: 30,
          units: "square feet of forest"
        }
      },
      {
        name: "co2",
        icon: "mdi-cloud",
        metric: {
          rate: 9.1,
          units: "kg of CO2"
        },
        imperial: {
          rate: 20,
          units: "lbs of CO2"
        }
      },
      {
        name: "animals",
        icon: "mdi-cow",
        metric: {
          rate: 1,
          units: "animal lives"
        },
        imperial: {
          rate: 1,
          units: "animal lives"
        }
      }
    ]
  }),
  methods: {
      calculateRate: function(rate) {
          let total_days = parseInt(this.input_years)*365 + parseInt(this.input_months)*30 + parseInt(this.input_days)
          let v = total_days*rate[this.input_units].rate
          v = v.toPrecision(3) // reduce to 2 significant figures
          v = parseFloat(v) // remove scientific notation
          v = v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") // add commas
          return v
      }
  },
  created: function() {}
};
</script>
