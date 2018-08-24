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
    <div :class="setClassName(totalCount)">
      <p>Valvontaindeksi: {{ totalCount }}</p>
    </div>
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
          stateB: 0,
          classes: ['green','yellow','blue','red']
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
      setClassName(value) {
          let className;

          if ( value < 10 ) {
              className = this.classes[0];
          }

          if ( value > 10 &&  value < 21) {
              className = this.classes[1];
          }

          if ( value > 20 &&  value < 36) {
              className = this.classes[2];
          }

          if ( value > 35 ) {
              className = this.classes[2];
          }

          return className;
      },
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
