<template>
    <nav>
        <ul><!-- {{$route.path}} -->
          <!-- <img src = "@/assets/doggylogo.png"> -->
           <li :class="isSelected($route.path, '/')"><router-link to="/"> Home </router-link></li> 
           <li :class="isSelected($route.path, '/Dogs')"><router-link to ="/Dogs"> Dogs </router-link></li>
           <li :class="isSelected($route.path, '/Locations')"><router-link to="/Locations"> Locations </router-link></li>
           <li :class="isSelected($route.path, '/Contact')"><router-link to="/Contact"> Contact </router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.path);
  },
  data() {
    return {
      available: false
    };
  },
  methods: {
    isSelected(routePath, buttonPath) {
      if (routePath === buttonPath) {
        return "selected";
      } else {
        return "";
      }
    }
  }
  // computed: {
  //   chosen: function() {
  //     return {
  //       available: this.available
  //     };
  //   }
  // }
};
</script>

<style scoped>
.selected {
  background-color: green;
}
ul {
  list-style-type: none;
  text-align: right;
  padding: 0px;
  border: 0px;
}
img {
  display: left;
}
li {
  display: inline-block; /*세로 정렬을 가로 정렬로 바꿔줌 */
  margin: 0 10px;
}
a {
  height: 10px;
  color: darkgreen; /*링크되어 있는 글자 색깔*/
  text-decoration: none;
  -moz-text-size-adjust: initial;
}
nav {
  background: rgb(154, 212, 154);
  padding: 1px 0;
  margin-bottom: 40px;
}
</style>
 