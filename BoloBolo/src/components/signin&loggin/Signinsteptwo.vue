<template>
    <div class="signintwo">
    <el-card class="card">
    <img class="gougou" src="../../assets/gougou.png">

         <h5>尊敬的{{msg}}，我们已经在您的邮箱中发送了您的验证邮件</h5>
        <el-steps :space="200" :active="1" finish-status="success" align-center  >
                    <el-step  title="注册"></el-step>
                    <el-step title="验证"></el-step>
                    <el-step title="成功去登录"></el-step>
                    </el-steps>
     </el-card>
        
       
        <el-button type="primary" round @click="QQlink()">QQ邮箱链接</el-button>
        <el-button type="primary" round @click="wangyilink()">网易邮箱链接</el-button>
           
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        
      msg: '大傻逼'
    }
  },
  methods:{
      QQlink(){
          window.location.href = "https://mail.qq.com";
      },
      wangyilink(){
          window.location.href = "https://mail.163.com/";
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signintwo{
    margin-top: 160px;
}
.steptwo{
    margin-left: 20%;
    position: absolute;
}
.gougou{
    width: 60%;
}
.card{
    margin:auto;
    max-width: 45%;
    margin-bottom: 20px;
}

</style>