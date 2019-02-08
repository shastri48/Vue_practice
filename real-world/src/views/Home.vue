<template>
  <div class="articles">
    <div class="hero-section">
      <h1>conduit</h1>
      <h5>A place to share your knowledge</h5>
    </div>
    <div class="article">
      <div class="description" v-for="article in articles" :key="article.createdAt">
        <div class="article-header">
          <img class="article-image" :src=article.author.image alt="image">
          <ul class="article-detail">
            <li>{{article.author.username}}</li>
            <li>{{article.createdAt}}</li>
          </ul>
        </div>
        <h3>{{article.title}}</h3>
        <router-link :to="{name: 'detail', params:{slug: article.slug, article}}">Read more...</router-link>
      </div>
      <div class="tags">
        {{tags}}
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Detail from './../components/Detail.vue';
export default {
  name: "home",
  data(){
    return {
      articles: [],
      date:"",
      tags:[]
    }
  },
  components: {
    Detail
  },
  mounted(){
    fetch("https://conduit.productionready.io/api/articles").then(res=> res.json()).then(data => this.articles=data.articles);
    fetch("https://conduit.productionready.io/api/tags").then(res=> res.json()).then(data => this.tags=data.tags);

  }
};


</script>

<style scoped>
  a{
    text-decoration:none;
  }
  .article{
    width: 600px;
    margin: 0 0 20px 50px;
    text-align: left;
    padding: 20px 10px;
    border-bottom: 1px solid rgb(117, 117, 117);
  }
  .article-detail{
    list-style: none;
  }
  .article-image{
    width:60px;
    height: 50px;
  }
  .article-header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .hero-section{
  padding: 30px;
  background: #5cb85c;
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
</style>
