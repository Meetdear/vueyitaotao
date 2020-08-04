<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
// import json from 'json'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      data:"",
      age:30
    }
  },
 mounted(){
  //  let url="/activity/servicetime";
  //   axios.get(url).then(()=>{
  //          jsonp(url,(err,res)=>{
  //           let result=res;
  //         this.data=result;
               
  //  })
  }
}
</script>
