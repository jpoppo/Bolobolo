<template>
    <div class="signthree">
    <el-card class="card">
    <img class="gougou" src="../../assets/gougou.png">

         <h5>尊敬的{{msg}}，您已经成功激活您的账号可以去登录了</h5>
        <el-steps :space="200" :active="2" finish-status="success" align-center  >
                    <el-step  title="注册"></el-step>
                    <el-step title="验证"></el-step>
                    <el-step title="成功去登录"></el-step>
                    </el-steps>
     </el-card>
        <el-button type="primary" round @click="landlink()">马上去登录</el-button>
           
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
      landlink(){
          window.location.href = "https://mail.qq.com";
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.signthree{
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