<template>
  <div class="login">
    <div class="login_form">
      <div class="login_form_head">
        <h1>登录吐槽大会</h1>
      </div>
      <div class="login_form_body">
        <el-form :label-position="labelPosition" label-width="80px" :rules="rules" ref="ruleForm" :model="ruleForm">
            <el-form-item label="用户名">
              <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="ruleForm.pass" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button id="primary" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
      </el-form>
      <div class="foot">
        <span class="regist" >
          <router-link to="/regist">注册</router-link>
          </span>
        <router-link to="/regist">忘记密码</router-link>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
        labelPosition: 'top',
        ruleForm: {
          name: '',
          pass: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2到 10个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在 6 到20个字符', trigger: 'blur' }
          ],
        }
    }
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../less/login.less';
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
