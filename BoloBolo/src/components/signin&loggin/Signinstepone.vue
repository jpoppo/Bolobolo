<template>
    <div class="signone">
     
                <el-card>
                 <el-steps :space="200" :active="0" align-center>
                    <el-step title="注册"></el-step>
                    <el-step title="验证"></el-step>
                    <el-step title="成功去登录"></el-step>
                    </el-steps>
                    <h2>请注册</h2>
                    <el-form :label-position="labelPosition" label-width="80px" :model="newuser" ref="newuser" :rules="rules" >
                        <el-form-item label="账号" prop="nname">
                            <el-input  prefix-icon="el-icon-search" placeholder="请输入您想要的用户名" v-model="newuser.nname" >
                                <el-button slot="append" icon="el-icon-star-on"></el-button>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input  prefix-icon="el-icon-search" placeholder="请输入您的邮箱账号" v-model="newuser.email" >
                                <el-button slot="append" icon="el-icon-message"></el-button>
                            </el-input>
                        </el-form-item>
                    <el-form-item label="密码"  prop="password">
                        <el-input  prefix-icon="el-icon-search" placeholder="请输入您的密码" :type="typepass" v-model="newuser.password" >
                            <el-button slot="append" icon="el-icon-view" @click="passchange"></el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="确认密码"  prop="checkpass">
                        <el-input  prefix-icon="el-icon-search" placeholder="确认您的密码" :type="typecheck" v-model="newuser.checkpass" >
                            <el-button slot="append" icon="el-icon-view" @click="checkchange"></el-button>
                        </el-input>
                    </el-form-item>
                      <el-form-item label="性别">
                       <el-radio v-model="newuser.sex" label="1" border>男</el-radio>
                       <el-radio v-model="newuser.sex" label="2" border>女</el-radio>
                    </el-form-item>
                    <el-form-item label="昵称" prop="nickname">
                            <el-input  prefix-icon="el-icon-search" placeholder="请输入您想要的昵称" v-model="newuser.nickname" >
                                <el-button slot="append" icon="el-icon-star-on"></el-button>
                            </el-input>
                        </el-form-item>
                    <el-form-item>
                        <el-row class="login-btn">
                        <el-button type="primary" @click="finsh('newuser')">下一步</el-button>
                         </el-row>
                    </el-form-item>
                        
                    </el-form>
                </el-card>
    </div>
</template>

<script scoped>
import CryptoJS from "crypto-js"
export default {
  
  name: "Signin",
  data() {
    var checkpassr = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.newuser.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      labelPosition: "right",
      typepass: "password",
      typecheck: "password",
      newuser: {
        email: "",
        password: "",
        checkpass: "",
        nname: "",
        nickname: "",
        sex:1
      },
      rules: {
        email: [
          { type: "email", message: "请输入正确的邮箱", trigger: "change" },
          { required: true, message: "请填写邮箱", trigger: "blur" }
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }],
        nname: [
          { required: true, message: "请输入您的账号", trigger: "blur" },
          { min: 1, max: 10, message: "长度请重新定义", trigger: "blur" }
        ],
        checkpass: [{ validator: checkpassr, trigger: "blur" }],
        nickname:[
          { required: true, message: "请输入您的昵称", trigger: "blur" },
          { min: 1, max: 10, message: "长度请重新定义", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    passchange() {
      if (this.typepass == "password") {
        this.typepass = "text";
      } else if (this.typepass == "text") {
        this.typepass = "password";
      }
    },
    checkchange() {
      if (this.typecheck == "password") {
        this.typecheck = "text";
      } else if (this.typecheck == "text") {
        this.typecheck = "password";
      }
    },
    finsh(formName) {
      var self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax
            .post("http://localhost:8080/user/register?username="+self.newuser.nname+"&password="+self.encryptByDES(self.newuser.password)+"&email="+self.newuser.email+"&gender="+self.newuser.sex+"&nickname="+self.newuser.nickname)
            .then(function(response) {
              console.log(response.data);
              if (response.state == success) {
                self.$router.push("/signintwo");
                self.$notify({
                  title: "成功",
                  message: "注册成功",
                  type: "success"
                });
              } else {
                self.$notify.error({
                  title: "错误",
                  message: response.wrong
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          this.$notify.error({
            title: "错误",
            message: "信息有误"
          });
          return false;
        }
      });
    },
    encryptByDES(message){
      var keyHex = CryptoJS.enc.Utf8.parse("DAF3100DCD39CAEB5DD35E9651712A86");
					var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
						mode: CryptoJS.mode.ECB,
						padding: CryptoJS.pad.Pkcs7
					});
					return encrypted.toString();
    }
  }
};
</script>

<style scoped>
.signone{
  margin-top:160px;
}
.stepofsign {
  width: 70% margin-bottom=20px;
}
.loginheadimg {
  margin-top: 0px;
  width: 100%;
}
.el-card {
  max-width: 50%;
  margin: auto;
}
.birthdaycol {
  display: flex;
  justify-content: flex-start;
}
.login-btn {
  display: flex;
  justify-content: flex-end;
}
</style>