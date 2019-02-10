<template>
  <div class="articles">
    <div class="loader" v-if="articles.length==0"></div>
    <div class="hero-section" v-if="articles.length>0">
      <h1>conduit</h1>
      <h5>A place to share your knowledge</h5>
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
      <div class="tags">
        <h4>Popular Tags</h4>
        <span v-for="(tag,index) in tags" :key="index">
          <router-link :to="{name: 'tag', params:{tag: tag}}">
            <span class="tag" @click="reRender(tag)">{{tag}}</span>
          </router-link>
        </span>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Detail from './Detail.vue';
import User from './User.vue';
export default {
  name: "tag",
  data(){
    return {
      articles: [],
      check: "",
      date:"",
      tags:[],
      user: {}
    }
  },
  components: {
    Detail,
    User
  },
  mounted(){
    this.articleFetch(this.$route.params.tag);
  },
  methods:{
    userFind(e){
      fetch(`https://conduit.productionready.io/api/profiles/${e.target.textContent}`)
      .then(res=>res.json())
      .then(data=>this.user = data.profile)
    },
    articleFetch(tag){
      // let tag = this.$route.params.tag;
      fetch(`https://conduit.productionready.io/api/articles?tag=${tag}`).then(res=> res.json()).then(data => this.articles=data.articles);

      fetch("https://conduit.productionready.io/api/tags").then(res=> res.json()).then(data => this.tags=data.tags);
    },
    reRender(tag){
      this.articles = [];
      fetch(`https://conduit.productionready.io/api/articles?tag=${tag}`).then(res=> res.json()).then(data => this.articles=data.articles); 
    }
  }
};


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
  .user {
    padding:10px 0;
  }
  .article{
    width: 85%; 
    margin: 0 auto;
    text-align: left;
    padding: 20px 10px;
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-gap: 20px;
    align-items:flex-start;
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
  .tags{
    background: #f3f3f3;
    padding: 10px;
  }
  .tag{
    display: inline-block;
    background: #818a91;
    padding: 10px;
    color: white;
    margin: 5px;
    border-radius: 15px;
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
