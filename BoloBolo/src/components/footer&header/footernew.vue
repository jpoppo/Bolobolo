<template>
  <div class="footer">
    <el-row>
      <el-row type="flex" class="row-bg" justify="space-between" :gutter="5">
        <el-col :span="8" style="border-style: none dashed none none;border-width: 1px;padding-right:15px">
          <div>
            <el-row :gutter="5">
              <el-col :span="8" :offset="1">
                <p class='p1'>bolobolo</p>
              </el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="8"><a class="a1" href="">关于我们</a></el-col>
              <el-col :span="8"><a class="a1" href="">联系我们</a></el-col>
              <el-col :span="8"><a class="a1" href="">加入我们</a></el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="8"><a class="a1" href="">友情链接</a></el-col>
              <el-col :span="8"><a class="a1" href="">bolobolo认证</a></el-col>
              <el-col :span="8"><a class="a1" href="">Investor</a></el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8" style="border-style: none dashed none none;border-width: 1px;">
          <div>
            <el-row :gutter="5">
              <el-col span="8">
                <p class='p1'>传送门</p>
              </el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="8"><a class="a1" href="">帮助中心</a></el-col>
              <el-col :span="8"><a class="a1" href="">高级弹幕</a></el-col>
              <el-col :span="8"><a class="a1" href="">活动主题页</a></el-col>
            </el-row>
            <el-row :gutter="5">
              <el-col :span="8"><a class="a1" href="">侵权申诉</a></el-col>
              <el-col :span="8"><a class="a1" href="">活动中心</a></el-col>
              <el-col :span="8"><a class="a1" href="">用户反馈论坛</a></el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-row justify="space-between">
              <el-col :span="6" offset="1">
                <el-popover placement="top-start" title="" width="70" trigger="hover" v-model="visible1">
                  <div>
                    <img src="../../assets/qq.jpeg" class="footimage2">
                  </div>
                  <a slot="reference"><img src="../../assets/qq.jpeg" class="footimage1"></a>
                </el-popover>
                <p>官方Teem</p>
              </el-col>
              <el-col :span="6" offset="2">
                <el-popover placement="top-start" title="" width="70" trigger="hover" v-model="visible2">
                  <div>
                    <img src="../../assets/logo.png" class="footimage2">
                  </div>
                  <a slot="reference"><img src="../../assets/weibo.jpeg" class="footimage1"></a>
                </el-popover>
                <p>新浪微博</p>
              </el-col>
              <el-col :span="6" offset="2">
                <el-popover placement="top-start" title="" width="70" trigger="hover" v-model="visible3">
                  <div>
                    <img src="../../assets/logo.png" class="footimage2">
                  </div>
                  <a slot="reference"><img src="../../assets/weixin.jpeg" class="footimage1"></a>
                </el-popover>
                <p>官方微信</p>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
        return {
            visible1: false,
            visible2: false,
            visible3: false
        };
    }
};
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.footimage1 {
    margin-top: 35px;
    margin-left: 5px;
    margin-bottom: -15px;
    width: 80px;
    height: 80px;
    border-radius: 200px;
}
.footimage2 {
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 5px;
    width: 100px;
    height: 100px;
}
p.p1 {
    font-size: 20px;
    font-family: sans-serif;
    color: black;
}
a.a1{

    font-family: sans-serif;
    color: black;
    text-decoration:none; 
}
.footer{
  border-style: solid none none none;border-width: 1px;
  margin-left:0px;
  margin-right: 0px;
  padding: 0; 
  margin-top: 40px;
}
</style>