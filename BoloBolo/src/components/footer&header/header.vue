<template>
<div class="bac">
        <div class="header">
        
        <el-row :gutter="20">
            <el-col :span="8"><div class="logo"><!-- <img class="title-logo" src="" @click="backtomain"> -->BoloBolo</div></el-col>
            <el-col :span="8"> <div class="search">
            <el-input
                placeholder="请输入内容"
                v-model="searchname">
                <i
                    class="el-input__icon el-icon-search"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
            </el-input>
        </div></el-col>
            <el-col :span="8">
        <div class="user-info">
            <div class="tourist" v-if="isLogin != true">
                <el-button @click="pushlogin()" plain>登陆</el-button>
                <el-button @click="pushsignin()" type="primary">注册</el-button>
            </div>
            <div v-else>
                <el-dropdown  trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link"><img class="user-logo" :src="user.picturepath">  <div class="font">Hi {{user.name}}</div></span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="item.command" v-for="item in commands" :key="item.name">{{item.name}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>
           
               
        </div>
            </el-col>
        </el-row>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isLogin: false,
      user: {
        name: "nihao",
        level: 2,
        picturepath: ""
      },
      searchname: ""
    };
  },
  created: function() {
    var self = this;
    // this.$ajax
    //   .post("/login?cmd=header")
    //   .then(function(response) {
    //     self.user.name = response.data.username;
    //     self.user.level = response.data.level;
    //     self.user.picturepath = response.data.picturepath;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  },
  computed: {
    commands() {
      let list = [
        {
          command: "selfinfo",
          name: "个人资料"
        },
        {
          command: "helper",
          name: "用户手册"
        },
        {
          command: "loginout",
          name: "退出"
        }
      ];
      var role = this.user.level;
      if (role > 1) {
        list.push({
          command: "houtai",
          name: "后台管理"
        });
        console.log(list);
        return list;
      } else {
        return list;
      }
    }
  },
  methods: {
    pushlogin(){
       this.$router.push("/login");
    },
    pushsignin(){
      this.$router.push("/signinone");
    },
    backtomain() {
      this.$router.push("/main");
    },
    handleCommand(command) {
      if (command == "loginout") {
        this.isLogin=false;
        var self = this;
        this.$ajax
          .get("/login?cmd=outpage")
          .then(function(response) {
            if (response.data.isout === true) {
              self.$router.push("/");
            } else {
              this.$notify.error({
                title: "错误",
                message: "未知错误您无法退出"
              });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      } else if (command == "selfinfo") {
        this.$router.push("/main/user/");
      } else if (command == "houtai") {
        this.$router.push("/main/houtai");
      } else if (command == "helper") {
        window.open(
          "http://p0n1k24eb.bkt.clouddn.com/72f28e60-ead2-11e7-a323-39ec290d5bd1.pdf"
        );
      }
    },
    handleIconClick() {
      if (this.searchname == "") {
        this.$notify.error({
          title: "错误",
          message: "请您输入您所想要搜索的课程名"
        });
      } else {
        this.$router.push("/main/searchname/" + this.searchname);
      }
    }
  }
};
</script>
<style scoped>
.bac{
    background-image: url("../../assets/heabckgro.jpg");
    background-repeat:no-repeat;
    display: block; 
    height: 320px;
    background-size: 100% auto;
    overflow:hidden;
    margin-top:-60px;
}
.imgback{
    margin-left: 0px;
    width: 100%;
}
.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    
    background-color: #f9fafc;
  }
.header {
  position: relative;
  box-sizing: border-box;
  padding-top: 0px;
  width: 100%;
  height: 60px;
  font-size: 22px;
  line-height: 60px;
  background-color:rgba(0,0,0,0.5);
  margin-left: 0px;
  margin-right: 0px;
}
.font{
    color: #ffffff;
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
}
.header .logo .search {
  float: left;
  width: 300px;
  margin-left: 100px;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  width: 150px;
  margin-top: 1px;
  padding-left: 50px;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 20px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.title-logo {
  position: absolute;
  left: 27px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.logo {
  color: #ffffff;
}
.el-dropdown-menu__item {
  width: 200px;  
  text-align: center;
}
</style>