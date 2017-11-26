<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <p>{{ message }}</p>
    <div>
		  <button v-on:click="uuid">uuid</button>
	  </div>
    <div>
      <form v-on:submit.prevent="addTodo">
        <input type="text" v-model="task" />
      </form>
      <todo-list v-bind:todos="todos"></todo-list>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import TodoList from '@/components/TodoList'

// const uuidv4 = require('uuid/v4')
import uuid from 'uuid'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {
        task: 'Code',
        completed: true,
        id: uuid.v4()
      },
      {
        task: 'Sleep',
        completed: false,
        id: uuid.v4()
      },
      {
        task: 'Eat',
        completed: false,
        id: uuid.v4()
      },
      {
        task: 'Wakeup',
        completed: true,
        id: uuid.v4()
      }
    ]
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    // Add todo mutation
    addTodo: (state, payload) => {
      // Assemble data
      const task = {
        task: payload,
        completed: false,
        id: uuid.v4()
      }
      console.log(state)
      // Add to existing todos
      state.todos.unshift(task)
    },
    // Toggle Todo
    toggleTodo: (state, payload) => {
      state.todos = state.todos.map(t => {
        if (t.id === payload) {
          // Update the todo
          // that matches the clicked item
          return {task: t.task, completed: !t.completed, id: t.id}
        }
        return t
      })
    },
    deleteTodo: (state, payload) => {
      const index = state.todos.findIndex(t => t.id === payload)
      state.todos.splice(index, 1)
      console.log(index)
    }
  }
})

export default {
  name: 'app1',
  data () {
    return {
      name: 'Peter Wong',
      message: 'Hello Vue.js!',
      task: ''
    }
  },
  computed: {
    todos: function () {
      return this.$store.getters.todos
    }
  },
  store: store,
  components: {
    'todo-list': TodoList
  },
  methods: {
    addTodo: function () {
      // Commit to mutation
      this.$store.commit('addTodo', this.task)
      // Empty text input
      this.task = ''
    },
    uuid: function () {
      alert(uuid.v4())
    }
  }
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
