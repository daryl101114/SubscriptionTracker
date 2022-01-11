<template>
  <div class="col-md-3">
      <h1>Login</h1>
  <div class="container">
      <el-input
  placeholder="Email address"
  v-model="email"
  clearable>
</el-input>
 <el-input
  placeholder="Password"
  v-model="password"
  clearable>
</el-input>

<p>Don't have an account? <el-link href="http://localhost:8080/">Register</el-link></p>
<div class="loginButton">
 <el-button type="primary">Login</el-button>
 </div>
 </div>
  </div>
</template>

<script>
import {Input,Form,Button,Link} from 'element-ui';
// import 'element-ui/lib/theme-chalk/reset.css'
export default {
components:{
    [Button.name]: Button,
    [Input.name]: Input,
    [Form.name]: Form,
    [Link.name]: Link
},
 data() {
    return {
      email: '',
      password:''
    };
  },
  methods:{
  }
}
</script>

<style scoped>

.container{
  position: flex;
  width: 250px;
  margin: auto
}
.loginButton{
  margin-top: 10px
}
</style>