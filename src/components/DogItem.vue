<template><!--Grid-->
  <div>
    <h1>Dog {{ dogId }}</h1>
   <h2> Description</h2>
    <div class ="description">
       <img :src="`/static/puppy${dogId}.png`" alt="">
       <h4>Name: {{doggyinfo.name}}</h4>
       <h4>Breed: {{doggyinfo.breed}}</h4>
       <h4>Age: {{doggyinfo.Age}}</h4>
       <h4>description: {{doggyinfo.description}}</h4>
       <div id ="list"><router-link to='./'>Back to lists</router-link></div>
       <button>Remove Dog</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  computed: {
    dogId() {
      return this.$route.params.dogId;
    },
    doggyinfo() {
      return this.$store.getters.getSingleDoggy(this.dogId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  width: 500px;
  height: auto;
  background-color: white;
  margin: auto;
}
#list {
  margin: 10px;
  border: 1px solid rgb(31, 143, 31);
  padding: 10px;
  background-color: rgb(31, 143, 31);
  color: white;
}
img {
  height: 300px;
  width: 430px;
  margin: auto;
}
a {
  color: white;
  text-decoration: none;
}
</style>
