<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h2>Hello</h2>
    <div>
      <p>账号：<input type="text" v-model='account'></p>
      <p>密码：<input type="text" v-model='password'></p>
      <button @click='login'>创建</button>
      <button @click='query'>查看创建</button>
    </div>
    <ul>
      <li style="display:block;" v-for="(val, key) in list">
        <span>用户名:{{val.account}}密码:{{val.password}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import http from "./../lib/http";
import apiUrl from "./../lib/ApiSetting";
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      account:'',
      password:'',
      list:{}
    }
  },
  created() {
     
  },
  methods: {
    login(){
      if(this.account&&this.password){
        http(apiUrl.createAccount,{account:this.account,password:this.password}).then((res)=>{
          alert('创建成功')
        })
      }
    },
    query(){
      http(apiUrl.getAccount).then((res)=>{
        console.log(res.data)
        this.list = res.data
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
