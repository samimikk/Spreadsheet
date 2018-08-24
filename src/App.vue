<template>
  <div id="app">
    <h2>Rannan turvallisuus...</h2>
    <checkbox  v-on:add-prestige="updatePrestige" title="Kioski" prestige="1" />
    <checkbox v-on:add-prestige="updatePrestige" title="Rannan sijainti pyöräilymatkan päässä tai asutuskeskuksen välittömässä läheisyydessä" prestige="2" />
    <p>Välitulos A: {{ stateA }}</p>
    <hr />

    <h2>Asiakasmäärät</h2>
    <radio v-on:add-prestige="updatePrestige" name="asikasmaarat" altTitle="Asiakasmäärä alle 30" title="< 30" prestige="0" />
    <radio v-on:add-prestige="updatePrestige"  name="asikasmaarat" title="30-60" prestige="5" />

    <p>Välitulos B: {{ stateB }}</p>
    <hr />
    <p>Valvontaindeksi: {{ totalCount }}</p>
  </div>
</template>

<script>
import Checkbox from './components/Checkbox.vue'
import Radio from './components/Radio.vue'

export default {
  name: 'app',
    data() {
      return {
         stateA: 0,
          stateB: 0
      }
    },
  components: {
      Checkbox,
      Radio
  },
    computed: {
      totalCount() {
          return this.stateA + this.stateB;
      }
    },
    methods: {
        updatePrestige(value,checked) {
            if (checked !== null) {
              if (checked) {
                  this.stateA += value;
              } else {
                  this.stateA -= value;
                  if (this.stateA < 0) this.stateB = 0;
              }
          } else {
              this.stateB = value;
          }
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app {
  .row-fluid {
    label,
    .selection-value { display: inline; }

  }
}
</style>
