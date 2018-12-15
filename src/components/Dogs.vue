<template><!--Grid-->
  <div>
   <h1>Dogs</h1>
   <router-link append to="new" tag="button">Add New Puppy</router-link>
   <ul>
   <li v-for="(puppy,i) in doggyinfo" :key='i'>
      <img :src="`/static/puppy${1+i}.png`" alt="puppy img">
      <h4>Name: {{puppy.name}}</h4>
      <h4>Breed: {{puppy.breed}}</h4>
      <h4>Age: {{puppy.Age}}</h4>
      <span id ="detail"><router-link append :to="`${1+i}`">View Details</router-link></span>
    </li>
   </ul> 
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  computed: {
    doggyinfo() {
      return this.$store.getters.gettinginfo;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  color: Black;
  text-align: left;
  flex-grow: 1;
  flex-basis: 300px;
  padding: 20px; /*박스 안쪽 패딩*/
  border: 1px solid #222; /*박스 선*/
  margin: 10px; /*박스선 바깥쪽 사이*/
  background-color: white;
}
ul {
  text-align: center;
  width: 500px;
  display: center; /*가로 횡열로 펼쳐줌*/
  list-style-type: none; /*리스트의 점들을 없애줌*/
  padding: 0;
  margin: auto;
}

img {
  height: 300px;
  width: 430px;
  margin: auto;
}
#detail {
  margin: 10px;
  border: 1px solid rgb(31, 143, 31);
  padding: 10px;
  background-color: rgb(31, 143, 31);
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
</style>
