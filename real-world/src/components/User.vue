<template>
  <div class="user-articles">
    <div class="loader" v-if="articles.length==0"></div>
    <div class="user-section" v-if="articles.length>0">
      <img class="user-img" :src=this.$route.params.img alt="user-image">
      <h3>{{this.$route.params.username}}</h3>
    </div>
    <div class="article" v-if="articles.length>0">
      <div class="article-descriptions">
        <div class="description" v-for="article in articles" :key="article.createdAt">
          <div class="article-header">
            <img class="article-image" :src=article.author.image alt="image">
            <ul class="article-detail">
              <router-link :to="{name: 'username', params:{username: article.author.username, img:article.author.image}}">
                <li class="user" v-on:click="userFind">{{article.author.username}}</li>
              </router-link>
              <li>{{article.createdAt}}</li>
            </ul>
          </div>
          <h3>{{article.title}}</h3>
          <router-link class="more" :to="{name: 'detail', params:{slug: article.slug, article}}">Read more...</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user",
  data(){
    return {
      articles:[]
    }
  },
  mounted(){
    let username = this.$route.params.username;
    fetch(`https://conduit.productionready.io/api/articles?author=${username}`)
    .then(res=>res.json())
    .then(data=> this.articles = data.articles)
  }
}
</script>


<style scoped>
  a{
    text-decoration:none;
    color: #5cb85c;
  }
  .more{
    display: inline-block;
    color: gray;
    padding: 20px 0;
  }
  .user-section{
    padding: 20px 0;
    background: #f3f3f3;
  }
  .user-img{
    border-radius: 50%;
    margin: 20px 0;
  }  

  .article{
    width: 85%; 
    margin: 0 auto;
    text-align: left;
    padding: 20px 10px;
  }
  .description {
    border-bottom: 1px solid rgb(201, 201, 201);
    padding: 20px 0;
  }
  .article-detail{
    list-style: none;
  }
  .article-image{
    width:50px;
    height: 50px;
    border-radius: 50%;
  }
  .article-header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  h1{
    margin:0;
    font-size: 60px;
    color:white;
  }
  h5{
    font-size: 26px;
    color:white;
    font-weight: 300;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* loader */
  .loader {
    margin: 0 auto;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>