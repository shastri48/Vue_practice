<template>
  <div class="hello">
    <h2>Todo List</h2>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        <div class="todo__list" v-if="!todo.done">
          <input type="checkbox" @click="addFavourite(index)">
          <span>{{ todo.text }}</span>
          <span @click="deleteTodo(index)">X</span>
        </div>
      </li>
    </ul>
    <h2>Favourite List</h2>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        <div class="todo__list" v-if="todo.done">
          <input type="checkbox" @click="addFavourite(index)" checked="todo.done">
          <span>{{ todo.text }}</span>
          <span @click="deleteTodo(index)">X</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoDisplay',
  props: {
    todos: Array,
    deleteTodo: Function,
    addFavourite: Function
  },
  methods: {
    handleClick(e){
      this.$emit("delete-todo", e.target.textContent)
    }
  },
  computed: {
    incompleteTodo: function(){
      return this.todos.filter(todo=>!todo.done);
    },
    completeTodo: function(){
      return this.todos.filter(todo=>todo.done);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo__list{
  padding: 7px 15px;
  text-align: left;
  display: grid;
  grid-template-columns: auto 1fr auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
span {
  cursor: pointer;
}
li {
  font-size: 22px;
  border-radius: 5px;
  background: rgba(224, 224, 224, 0.842);
  display: block;
  margin: 10px auto;
  width: 200px;
}
li:hover{
  box-shadow: 0px 2px 10px rgb(141, 140, 140);
  background: rgba(196, 196, 196, 0.842);
}
a {
  color: #42b983;
}
</style>
