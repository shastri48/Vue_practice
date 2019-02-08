<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="todo-input">
      <input type="text" v-model="todo.text">
      <input type="submit" value="submit" @click="addTodo">
    </div>
    <div class="todos">
      <TodoDisplay v-bind:todos="todoList" v-bind:deleteTodo="deleteTodo" v-bind:addFavourite="addFavourite" />
    </div>
  </div>
</template>

<script>

import TodoDisplay from './TodoDisplay.vue';


export default {
  name: 'HelloWorld',
  data() {
    return {
      todo: {
        text:"",
        done: false
      },
      todoList:[],
      favouriteList:[]
      }
  },
  props: {
    msg: String
  },
  components: {
    TodoDisplay
  },
  methods: {
    addTodo(){
      this.todoList.push({...this.todo});
      this.todo.text = "";
    },
    deleteTodo(index){
      this.todoList.splice(index, 1)
    },
    addFavourite(index){
      this.todoList[index].done = !this.todoList[index].done;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
