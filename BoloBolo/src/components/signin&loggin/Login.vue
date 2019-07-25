<template>
  <div class="login">
        <!-- <img class="loginheadimg" src="../../assets/heabckgro.jpg"> -->
        <el-card class="card">
            <h2>请登录</h2>
            <el-form :label-position="labelPosition" label-width="80px" :model="Yonghu" ref="Yonghu" :rules="rules" >
                <el-form-item label="邮箱" prop="email">
                    <el-input  prefix-icon="el-icon-search" placeholder="请输入您的邮箱账号" v-model="Yonghu.email" >
                        <el-button slot="append" icon="el-icon-message"></el-button>
                    </el-input>
                </el-form-item>
            <el-form-item label="密码"  prop="password">
                    <el-input  prefix-icon="el-icon-search" placeholder="请输入您的密码" :type="typeqq" v-model="Yonghu.password" >
                    <el-button slot="append" icon="el-icon-view" @click="xx"></el-button>
                </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-row class="login-btn">
                        <el-button type="primary" @click="loginin('Yonghu')">登录</el-button>                     
                        <el-button type="info"  @click="signIn">注册</el-button>                    
                         </el-row>
                    </el-form-item>
                    <el-form-item class="forget">
                        <el-button type="text" @click="forgetpass">忘记密码</el-button>
                     </el-form-item>
                    </el-form>
            </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "right",
      typeqq: "password",
      Yonghu: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          { type: "email", message: "您没有账号吗？辣鸡", trigger: "change" },
          { required: true, message: "请填写邮箱或账号", trigger: "blur" }
        ],
        password: [{ required: true, message: "请填写密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    xx() {
      if (this.typeqq == "password") {
        this.typeqq = "text";
      } else if (this.typeqq == "text") {
        this.typeqq = "password";
      }
    },
    signIn() {
      this.$router.push("/signin");
    },
    forgetpass() {
      this.$alert("请致电联系管理员15911549052", "忘记密码", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    loginin(formName) {
      var self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax
            .post("/login?cmd=log", self.Yonghu)
            .then(function(response) {
              if (response.data.islogin === true) {
                self.$router.push("/main");
              } else {
                self.$notify.error({
                  title: "错误",
                  message: response.data.errreason
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  margin-top:160px;
}
.loginheadimg{
  margin-top: 0px;
    width: 100%;
}
.el-card {
  max-width: 50%;
  margin: auto;
}
h1 {
  font-family: "PingFang SC";
  font-size: 50px;
}
.login-btn {
  display: flex;
  justify-content: flex-end;
}
.forget {
  display: flex;
  justify-content: flex-end;
}
.card {
  width: 40%;
}
</style>