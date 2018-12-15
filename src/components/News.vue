<template> <!-- this is for nesting -->
    <div>
        <h1>News</h1>
        <ul>
            <li v-for="(article, index) in news" :key="index"> 
                <!--v-bind:key 키를 정해줌 li의 키가 되는 것임 그 기준이 여기서는 index, @은 v-on:의 약자 -->
                <h4>{{ index }} <br> {{article}}</h4>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        p1: "beautiful doggy",
        p2: "lovely doggy"
      }
    };
  },
  methods: {}
};
</script>

<style scoped>
li {
  color: darkblue;
  text-align: center;
  flex-grow: 1;
  flex-basis: 300px;
  padding: 0px; /*박스 안쪽 패딩*/
  border: 1px solid #222; /*박스 선*/
  margin: 10px; /*박스선 바깥쪽 사이*/
  background-color: white;
}
ul {
  width: 500px;
  height: 300px;
  display: center; /*가로 횡열로 펼쳐줌*/
  list-style-type: none; /*리스트의 점들을 없애줌*/
  padding: 0;
  margin: auto;
}
</style>
