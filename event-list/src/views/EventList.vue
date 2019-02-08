<template>
  <div>
    <h1>Event Listing</h1>
    <Eventcard />
    <Eventcard />
    <Eventcard />
    <Eventcard />
  </div>
</template>

<script>
import Eventcard from '../components/EventCard.vue';
export default {
  components: {
    Eventcard
  }
}
</script>
