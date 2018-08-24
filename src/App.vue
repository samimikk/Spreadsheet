<template>
  <div id="app">
    <div class="container">
      <div class="selector">
        <h2>Rannan turvallisuus...</h2>
        <checkbox  v-on:add-prestige="updateStateA" title="Kioski" prestige="1" />
        <checkbox v-on:add-prestige="updateStateA" title="Rannan sijainti pyöräilymatkan päässä tai asutuskeskuksen välittömässä läheisyydessä" prestige="2" />
        <p>Välitulos A: {{ stateA }}</p>
        <hr />

        <h2>Asiakasmäärät</h2>
        <radio v-on:add-prestige="updateStateB" name="asikasmaarat" altTitle="Asiakasmäärä alle 30" title="< 30" prestige="0" />
        <radio v-on:add-prestige="updateStateB"  name="asikasmaarat" title="30-60" prestige="5" />

        <p>Välitulos B: {{ stateB }}</p>
        <hr />
        <div :class="setClassName(totalCount)">
          <p>Valvontaindeksi: {{ totalCount }}</p>
        </div>
      </div>
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
    mounted() {},
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
        updateStateA(value,checked) {
            if (checked) {
                this.stateA += value;
            } else {
                this.stateA -= value;
                if (this.stateA < 0) this.stateB = 0;
            }
        },

        updateStateB(value) {
            this.stateB = value;
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 75vw;
  width: 100%;
  margin: 0 auto;
}
#app {
  .selection {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 1em;
    &.active {
      background-color: rgba(#8cc620, .5);
    }

    .selection__value {
      display: block;
      align-self: flex-end;
      text-align: right;
    }

  }
}
  .selector {

  }
  .selection__value { background: rgba(#ddd, .25); padding: .5em 1em; }
</style>
