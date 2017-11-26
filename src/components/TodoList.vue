<template>
  <div>
    <!--
    {{ this.$store.state }}
    -->
    <ul>
      <li v-for="t in todos" v-bind:class="{completed: t.completed}" v-on:click="toggleTodo(t.id)" v-on:dblclick="deleteTodo(t.id)">{{t.task}}</li>
    </ul>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'TodoList',
  props: ['todos'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggleTodo: function (id) {
      this.$store.commit('toggleTodo', id)
    },
    deleteTodo: function (id) {
      this.$store.commit('deleteTodo', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.completed {
  text-decoration: line-through
}
</style>
