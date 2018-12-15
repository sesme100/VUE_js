<template>
<div>
    <h1>Contact</h1>
    <form class='info' action="http://localhost/upload.php" method="post" enctype="multipart/form-data">  
      <!-- form action='http://localhost/login.php' method="post" 여기에 form 내용제출됨  -->
      <div>
        <label for='name'>Name: {{blog.name}}</label>
        <input id="name" type="text" placeholder="name" v-model= "blog.name">
      
        <label for="subject">Subject:{{blog.subject}}</label>
        <input id="subject" type="text" placeholder="subject" v-model.lazy = "blog.subject">
      </div>
        <div>
        <label for="msg">Message</label>
        <textarea id="msg" type="text" placeholder="Please describe your lost dog" v-model= "blog.content"></textarea><br/>
        </div>  
        <div>
          <input id="file" name="doggy pic" type="file" accept="image/png, image/jpeg"><br/>
          <input id="submit" type="submit">
        </div>
    </form>

</div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        name: "",
        subject: "",
        content: ""
      }
    };
  }
};
</script>

<style scoped>
input {
  box-sizing: border-box;
  margin: 20px auto;
  width: 300px;
  font-size: 20px;
}
#submit {
  height: 30px;
  width: 60px;
  background-color: green;
  color: white;
}
label {
  display: block;
}
textarea {
  display: center;
  padding: 8px;
  width: 300px;
  height: 300px;
}
</style>
