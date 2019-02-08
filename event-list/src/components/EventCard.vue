<template>
  <div class="event__card">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h3>{{ event.title }}</h3>
  </div>
</template>

<script>

export default {
  name: 'Eventcard',
  data(){
    return {
      event: {
        id: 1,
        title: "Park avenue",
        date: "Thursday 29th, april",
        time: '06:00',
        attendies: [
          { id: 'abc123', name:'Mihir shen'},
          { id: 'bac123', name:'Sambil azim'},
          { id: 'cab123', name:'Bal mukund'}
        ]
      }
    }
  }
};
</script>

<style scoped>
  h3 {
    color: green;
  }
  .event__card{
    width: 400px;
    margin: 0 auto;
    padding: 15px;
    border-radius: 5px;
    background: rgb(224, 223, 223);
    margin-bottom: 10px;
  }
  .event__card:hover{
    box-shadow: 0px 2px 10px rgb(46, 45, 45);
    transform: skewY(5deg);
  }
</style>



