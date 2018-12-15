<template> <!-- this is for nesting -->
    <div>
        <h1>Latest Stray Dog</h1>
        <div class = 'Main'>
          <div><img src="/static/puppy4.png"></div>
            <div id="info">
            Name: {{name}}<br/>
            Breed: {{breed}}<br/>
            Age: {{age}} years old
            <span id ="detail"><router-link to="./Dogs/4">View Details</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Scooby Doo",
      breed: "Cartoon",
      age: "10"
    };
  },
  methods: {}
};
</script>

<style scoped>
.Main {
  width: 450px;
  height: auto;
  margin: 10px;
  border: 1px solid #222;
  padding: 10px;
  background-color: white;
  text-align: left;
  margin: auto;
}

#detail {
  margin: 10px;
  border: 1px solid rgb(31, 143, 31);
  padding: 10px;
  background-color: rgb(31, 143, 31);
  color: white;
}
#info {
  display: flex;
}
a {
  color: white;
  text-decoration: none;
  margin: auto;
}
ul {
  margin: auto;
}
img {
  height: 300px;
  width: 430px;
}
</style>
