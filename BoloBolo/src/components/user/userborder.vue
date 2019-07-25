<template>
   <div class="mainmune">
       <div class="daohang">
            <el-card class="box-card">
                <div class="cardin">
                    <div class="show-u">
                        <img :src="userInfo.userpicturerpath" class="touxaing">
                        <h5>{{userInfo.username}}</h5>
                    </div>
                    <div class="cardin">
                        <el-card class="box-card">
                            <el-row class="wodexinxi">    
                                 <el-button type="primary" @click="typetoinfo">我的信息</el-button>
                            </el-row>   
                             <el-row class="wodexinxi">    
                                 <el-button type="primary" @click="typetocourse">我的收藏</el-button>
                            </el-row>  
                             <el-row class="wodexinxi">    
                                 <el-button type="primary" @click="typetocourse">我的关注</el-button>
                            </el-row> 
                             <el-row >    
                                 <el-button type="primary" @click="typetocourse">我的视频</el-button>
                            </el-row>   
                        </el-card>
                    </div>

                </div>
            </el-card>
        </div>
   </div>
</template>
<script>
    export default {
        name:"home",
        data(){
            return{
                userInfo:{
                    username:"别闹了",
                    userpicturerpath:"http://p0n1k24eb.bkt.clouddn.com/Fi0zKyYSE1COJoyOlpv_Q1ch1bz2"
                },
            }
        },
        created:function(){
             var self=this;
            this.$ajax.get('/userpage?cmd=userside').then(function(response){
                self.userInfo.username=response.data.username;
                self.userInfo.userpicturerpath=response.data.userimag;
             }).catch(function(error){
                 console.log(error)
             })

        },
        methods:{  
            typetocourse(){
               this.$router.push('/main/user/courseofmine');
            },
            typetoinfo(){
                this.$router.push('/main/user');
            }
        }
    }
</script>
<style scoped>
  .course{
      margin-top:30px;
  }
  .wodexinxi{
      margin-top:30px;
      margin-bottom:30px;
  }
    .touxaing{
  width: 150px;
  height: 150px;
  display: block;
}
</style>