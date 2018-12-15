<template>
  <!--Grid-->
  <div id="Home">
    <!-- {{ count }}
    <br>-->
    <!-- <button @click="add(1)">Add 1</button>
    <input
      v-model="newCount"
    type="number">newCount 숫자가 변경에 따라 계속 동기화됨-->
    <!-- <button @click="add(newCount)">Add X</button> -->
    <Latest/>
    <News/>
  </div>
</template>

<script>
/* eslint-disable */
import Latest from "./Latest";
import News from "./News";

export default {
  name: "Dogs",
  data() {
    return {
      newCount: 1
    };
  },
  components: {
    Latest: Latest,
    News: News
  },
  methods: {
    add(newCount) {
      this.$store.dispatch("addNumber", parseInt(newCount));
      /// $store에서 mutations에 저장된 내용을 여기에 commit 하거나 아니면 dispatch 해야함
      /// 디스패치의 경우 액션이 일어날 경우에 타임셋팅에 따라 상태를 계속 기록
    }
  },
  computed: {
    count() {
      return this.$store.getters.count; ///store getters에 명시된 count를 여기에 쏴줌
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
