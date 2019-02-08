<template>
  <div id="app">
    <div id="nav">
      <h3 class="title">conduit</h3> 
      <div class="nav-links">
        <router-link to="/">Home</router-link> 
        <router-link to="/signin">Sign in</router-link> 
        <router-link to="/signup">Sign up</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
}

h3{
  margin:0;
}
#nav a {
  font-weight: bold;
  color: gray;
  text-decoration: none;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 100;
}
#nav a.router-link-exact-active {
  color: rgb(29, 28, 28);
}
.title {
  font-size: 32px;
  text-decoration: none;
  color: #5cb85c;
}
</style>
