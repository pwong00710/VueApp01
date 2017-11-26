<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ message }}</p>
    <div>
      <p>{{ counter }}</p>
      <!--
      <p>{{ mcounter }}</p>
      -->
      <div>
        <div>
          <button @click="increment">+</button>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 10,
    multi: 5
  },
  getters: {
    mcounter: (state) => {
      return state.counter * state.multi
    }
  },
  mutations: {
    increment: (state) => {
      state.counter++
    }
  }
})

export default {
  name: 'app',
  data () {
    return {
      name: 'Peter Wong',
      message: 'Hello Vue.js!',
      counter: this.$store.state.counter,
      mcounter: this.$store.getters.mcounter
    }
  },
  store: store,
  methods: {
    increment: function () {
      this.$store.commit('increment')
      this.counter = this.$store.state.counter
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
