<template>
  <div class="register">
    <h1>Sign in</h1>
    <p>Need an account</p>
    <form action="">
      <input type="email" name="email" placeholder="email" id="email">
      <input type="password" name="password" placeholder="password" id="password">
      <input class="submit" type="button" value="Sign up">
    </form>
  </div>
</template>

<style scoped>
  input{
    padding: 5px 10px;
    display: block;
    width: 40%;
    height: 40px;
    border: 1px solid gray;
    border-radius: 8px;
    font-size: 22px; 
    margin: 10px auto;
  }
  .submit {
    width: 100px;
  }
</style>