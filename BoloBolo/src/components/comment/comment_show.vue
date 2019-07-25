<template>
<div>
    <div class="divofshow" v-for="com of cominfo" :key="com">
        <el-container>
            <el-aside width="100px">
                <div>
                    <img :src="com.userByUId.headUrl" style="width:100px;height:100px;border-radius: 50%;">
                    <el-button class="btnfollow" type="primary" round >关注</el-button>
                </div>
            </el-aside>
            <el-main class="mainblock">
                <div>
                    <h4 class="nameh4">{{com.userByUId.nickname}}<i class="el-icon-star-on"></i></h4>
                    <h5 class="texth5">{{com.cContent}}</h5>
                    <div class="huifurow">
                    <h6 class="time">{{com.cDate}}<el-button class="huifu1" size="mini" @click="comback(com.userByUId.nickname,com.uId)">回复</el-button></h6>
                    </div>
                </div>
                <div class="son" v-for="comson of com.commentsByCId" :key="comson">
                    <el-container>
                        <el-aside width="30px"><img :src="comson.userByUId.headUrl" style="width:30px;height:30px;border-radius: 50%;"></el-aside>
                        <el-main class="mainblock">
                            <div class="huifurow">
                                <h4 class="nameh4son">{{comson.userByUId.nickname}}  <i class="el-icon-location"></i></h4>
                                <h5 class="texth5">{{comson.cContent}}</h5>
                                <h6 class="time">{{comson.cDate}}<el-button  size="mini" class="huifu1" @click="comback(comson.userByUId.nickname,comson.uId)">回复</el-button></h6>          
                            </div>
                            <div class="son" v-for="comsonson of comson.commentsByCId" :key="comsonson">
                            <el-container>
                                <el-aside width="30px"><img :src="comsonson.userByUId.headUrl" style="width:30px;height:30px;border-radius: 50%;"></el-aside>
                                <el-main class="mainblock">
                                    <div class="huifurow">
                                        <h4 class="nameh4son">{{comsonson.userByUId.nickname}}  <i class="el-icon-circle-plus"></i></h4>
                                        <h5 class="texth5">{{comsonson.cContent}}</h5>
                                        <h6 class="time">{{comson.cDate}}</h6>
                                    </div>
                                </el-main>  
                            </el-container>
                            </div>   
                        </el-main>
                    </el-container>

                </div>
            </el-main>
        </el-container>
        <div v-if="comup==true">
            <el-card class="box-card">
            <el-row :gutter="20" class="rowofwrite">
                <el-col :span="6"><div><img :src="user.picturepath" style="width:100px;height:100px;border-radius: 50%;"></div></el-col>
                <el-col :span="12"><div class="input"><el-input type="textarea" :rows="4"
                v-model="textarea" placeholder="进行回复"></el-input>
                </div></el-col>
                <el-col :span="6"><div><el-button class="btnsub" type="primary">回复<br>@{{mid.name}}</el-button></div></el-col>
            </el-row>
            </el-card>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      comup: false,
      mid: {
        name: "",
        ID: ""
      },
      textarea: "",
      user: {
        picturepath: "x"
      },
      cominfo: [
        {
          cContent: "我爱何奇毅",
          cDate: "2018-09-12T20:16:15",
          cId: 1,
          commentsByCId: [
            {
              cContent: "我也爱你",
              cDate: "2018-09-12T08:48:45",
              cId: 2,
              commentByPreId: null,
              commentsByCId: [
                {
                  cContent: "我是何奇毅",
                  cDate: "2018-09-12T10:13:25",
                  cId: 3,
                  commentByPreId: null,
                  commentsByCId: [],
                  preId: 2,
                  uId: 2,
                  userByUId: {
                    email: null,
                    gender: null,
                    headUrl: "1",
                    nickname: null,
                    password: null,
                    permission: 0,
                    phone: null,
                    state: 0,
                    uCoin: null,
                    uId: 0,
                    username: null
                  },
                  vId: 1
                },
                {
                  cContent: "我是何奇毅",
                  cDate: "2018-09-12T10:21:36",
                  cId: 4,
                  commentByPreId: null,
                  commentsByCId: [],
                  preId: 2,
                  uId: 2,
                  userByUId: {
                    email: null,
                    gender: null,
                    headUrl: "1",
                    nickname: null,
                    password: null,
                    permission: 0,
                    phone: null,
                    state: 0,
                    uCoin: null,
                    uId: 0,
                    username: null
                  },
                  vId: 1
                }
              ],
              preId: 1,
              uId: 1,
              userByUId: {
                email: null,
                gender: null,
                headUrl: "x",
                nickname: null,
                password: null,
                permission: 0,
                phone: null,
                state: 0,
                uCoin: null,
                uId: 0,
                username: null
              },
              vId: 1
            }
          ],
          preId: -1,
          uId: 1,
          userByUId: {
            email: null,
            gender: null,
            headUrl: "x",
            nickname: null,
            password: null,
            permission: 0,
            phone: null,
            state: 0,
            uCoin: null,
            uId: 0,
            username: null
          },
          vId: 1
        }
      ]
    };
  },
  methods: {
    comback(aname, aid) {
      this.comup = true;
      this.mid.name = aname;
      this.mid.id = aid;
    }
  }
};
</script>

<style scoped>
.son {
  margin-top: 10px;
}
.btnfollow {
  margin-top: 20px;
}
.mainblock {
  padding-top: 0px;
  padding-bottom: 2px;
}
.btnsub {
  height: 100px;
  width: 100px;
}
.nameh4 {
  color: deeppink;
  margin-top: 0px;
  text-align: left;
}
.nameh4son {
  color: deeppink;
  margin-top: 0px;
  text-align: left;
  margin-bottom: 4px;
}
.texth5 {
  margin-top: 2px;
  text-align: left;
}
.time {
  text-align: left;
  margin-top: 3px;
}
.divofshow {
  margin-top: 10px;
  width: 70%;
  margin: auto;
}
.huifu1 {
  margin-left: 8px;
  height: 10p;
}
.huifurow {
  border-style: none none solid none;
  border-width: 1px;
}
</style>