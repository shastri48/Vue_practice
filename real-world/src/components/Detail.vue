<template>
  <div>
    <div class="hero-section">
      <h1 class="post-title">{{article.title}}</h1>
      <div class="post-detail">
        <img class="user-img" :src=article.author.image alt="">
        <div class="user-detail">
          <h5>{{article.author.username}}</h5>
          <h5>{{date}}</h5>
        </div>
      </div>
    </div>
    <div class="post-description">
      <img class="article-image" :src=image alt="article-image">
      <div class="tags"><span class="tag" v-for="(tag, index) in article.tagList" :key=index>{{tag}}</span></div>
      <div class="post-detail">
        <img class="user-img" :src=article.author.image alt="">
        <div class="user-detail">
          <h5 style="color:black">{{article.author.username}}</h5>
          <h5 style="color:black">{{date}}</h5>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'detail',
  data(){
    return {
        article:[],
        image:"",
        date: ""
    }
  },
  created(){
    this.article = this.$route.params.article;
    this.image = this.$route.params.article.body.match(/\b(.*)\b/)[0];
    this.date = this.$route.params.article.createdAt.split("T")[0];
  }
}
</script>


<style scoped>
  .hero-section{
  padding: 30px;
  background: #333;
  text-align: left;
  }
  .post-title{
    margin:0;
    font-size: 60px;
    color:white;
  }
  .post-detail {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    align-items: center;
    margin-top: 10px;
  }
  h5{
    font-size: 16px;
    color:white;
    font-weight: 300;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 5px;
  }
  .user-img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .tags {
    margin: 10px;
    text-align: left;
  }
  .tag {
    padding: 5px 10px;
    border: 1px solid rgb(160, 160, 160);
    border-radius: 16px;
    margin-right: 10px;
    color: rgb(160, 160, 160);
  }
  .post-description{
    width: 80%;
    margin: 10px auto;
    border-bottom: 1px solid rgb(160, 160, 160);
  }
  .article-image{
    width: 100%;
    height: auto;
  }
  .user-detail{

  }
</style>


