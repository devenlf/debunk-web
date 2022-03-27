<template>
  <div class="regist">
    <div class="regist_form">
      <div class="regist_form_head">
        <h1>欢迎注册吐槽大会</h1>
      </div>
      <div class="regist_form_body">
        <el-form :label-position="labelPosition" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">
            <el-form-item label="昵称">
              <el-input v-model="ruleForm.nickName" placeholder="请输入昵称"></el-input>
            </el-form-item>
            <el-form-item label="用户名或手机号">
              <el-input v-model="ruleForm.userName" placeholder="请输入用户名或手机号" ></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
              <el-input v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
            </el-form-item>
            <el-form-item label="密码">
             <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" show-password autocomplete="off"></el-input>
             </el-form-item>
             <el-form-item label="确认密码">
               <el-input type="password" v-model="ruleForm.checkPass" placeholder="请确认密码" show-password autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button id="primary" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
      </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import {registAPI} from '../api/api'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
        labelPosition: 'top',
        ruleForm: {
          nickname: '',
          userName:'',
          email:'',
          code:'',
          pass: '',
          checkPass:''
        },
        rules: {
          nickname: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2到 10个字符', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到20个字符', trigger: 'blur' }
          ],
        }
    }
  },
  methods: {
    async submitForm(formName) {
        console.log(formName)
        console.log(this.ruleForm)
        let params = this.ruleForm
        const data=await registAPI(params);
        // console.log(data)
      }
    }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../less/regist.less';
h3 {
  margin: 40px 0 0;
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
