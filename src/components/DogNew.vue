<template>
  <div>
    <!-- https://www.youtube.com/watch?v=VqnJwh6E9ak Vue image upload mad Easy -->
    <div>
      Name:
      <input type="text" v-model="newName">
    </div>
    <div>
      breed:
      <input type="text" v-model="inputBreed">
    </div>
    <div>
      Age:
      <input type="text" v-model="inputAge">
    </div>
    <div>
      description:
      <input type="text" v-model="inputDescription">
    </div>
    <div>
      uploading image files:
      <input type="file" @change="onFileSelected">
      <button @click="onUpload">Upload</button>
    </div>

    <!-- <li v-for="newName in this.storeddogInfo" v-bind:key="newName"></li> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: "",
      inputBreed: "",
      inputAge: "",
      inputDescription: "",
      selectedFile: null
    };
  },
  computed: {
    storeddogInfo() {
      return this.$store.getters.storeddogInfo;
    }
  },
  methods: {
    onUpload() {
      return this.$store.commit(
        "onUpload",
        this.newName,
        this.inputBreed,
        this.inputAge,
        this.inputDescription,
        this.selectedFile
      );
      this.clearInput();
      // if (this.newName != "") {
      //   const obj = {
      //     name: this.newName,
      //     breed: this.inputBreed,
      //     age: this.inputAge,
      //     desc: this.inputDescription,
      //     file: this.selectedFile
      //   };
      //   localStorage.setItem(this.newName, JSON.stringify(obj)); // key, value로 로컬스토리지에 들어감
      //   this.dogInfo.push(obj);
      //   this.clearInput();
      // }
    },
    clearInput() {
      this.newName = "";
      this.inputBreed = "";
      this.inputAge = "";
      this.inputDescription = "";
      this.selectedFile = null;
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    }
  }
};
</script>

<style>
</style>
