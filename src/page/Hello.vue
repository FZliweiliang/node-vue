<template>
  <div class="hello">
   <!--  <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->
    1111111111111111111111111
    <img src="../assets/logo.png">
    <h2>Hello</h2>
    <div>
      <p>账号：<input type="text" v-model='account'></p>
      <p>密码：<input type="text" v-model='password'></p>
      <button @click='login'>创建</button>
    </div>
  </div>
</template>

<script>
import http from "../lib/http";
import apiUrl from "../lib/ApiSetting";
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account:'',
      password:''
    }
  },
  created() {
     http(apiUrl.getAccount).then((res)=>{
        console.log(res)
        })
  },
  methods: {
    login(){
      http(apiUrl.createAccount,{account:this.account,password:this.password}).then((res)=>{
        
      })
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
