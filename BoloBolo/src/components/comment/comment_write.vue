<template>
    <div>
        <el-card class="box-card">
        <el-row :gutter="20" class="rowofwrite">
            <el-col :span="6"><div><img :src="user.picturepath" style="width:100px;height:100px;border-radius: 50%;"></div></el-col>
            <el-col :span="12"><div class="input"><el-input type="textarea" :rows="4"
            v-model="textarea" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"></el-input>
            </div></el-col>
            <el-col :span="6"><div><el-button class="btnsub" type="primary">发布评论</el-button></div></el-col>
        </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      textarea: "",
      user: {
        name: "",
        picturepath:
          "http://p0n1k24eb.bkt.clouddn.com/Fg1aEO7bkptMg3jPjYhssYzM65kh"
      }
    };
  }
};
</script>

<style scoped>
.btnsub {
  height: 100px;
  width: 100px;
}
.box-card {
  margin: auto;
  width: 70%;
}
.input {
  margin-top: 5px;
  height: 100px;
}
</style>