<template>
   <div class="userinfo">
        <div class="userinfoin">
            <el-card class="box-card-courses">
               <el-form :label-position="labelPosition" label-width="80px" :model="user">
                <el-form-item label="头像">
                                <img :src="user.picturepath" style="width:100px;height:100px">
                                <el-popover ref="popover4" placement="right" width="180" trigger="click" v-model="pop">
                                    <el-upload class="avatar-uploader" action="http://upload-z2.qiniu.com" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :data="data">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                            <el-button @click="upAva">确定</el-button>
                        </el-popover>
                    <el-button size="mini" v-popover:popover4>修改头像</el-button>
                </el-form-item>
                    <el-form-item label="昵称">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                       <el-radio v-model="user.sex" label="1" border>男</el-radio>
                       <el-radio v-model="user.sex" label="2" border>女</el-radio>
                    </el-form-item>
                  
                     <el-form-item class="changinfobtn">
                                <el-button @click="changeinfo" type="info">修改</el-button>
                      </el-form-item>
                </el-form>

            </el-card>
        </div>
   </div>
</template>
<script>
export default {
  name: "userinfo",
  data() {
    return {
      checkboxGroup: [],
      pop: false,
      imageUrl: "",
      data: {
        token:
          "rcHe5WjHZQ9cfbxNWlPao4zNFgLGPZijSJei264R:8qyT9npp0SccIYafleJepsbEwPM=:eyJzY29wZSI6Im1vb2MiLCJkZWFkbGluZSI6MTU0NDU0NDAwMH0=",
        file: "fdsdg"
      },
      user: {
        name: "",
        picturepath: ""
      },
      labelPosition: "right"
    };
  },
  created: function() {
    var self = this;
    this.$ajax
      .get("/userpage?cmd=userinfoget")
      .then(function(response) {
        self.user.name=response.data.name;
        self.user.picturepath=response.data.picturepath;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    changeinfo() {
      var self=this;
      console.log("这是一个URl" + this.user.picturepath);
      this.$ajax
      .post("/userpage?cmd=userinfochange",self.user)
      .then(function(response) {
        if(response.data.ischange===true){
          self.$notify({
                        title: '成功',
                        message: '修改成功，您刷新后即可改变',
                        type: 'success'
            });
        }
        else{
          this.$notify.error({
                                title: '错误',
                                message: '没发生更改'
                            });

        }
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    upAva() {
      this.pop = false;
      this.user.picturepath = this.imageUrl;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = "http://p0n1k24eb.bkt.clouddn.com/" + res.key;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.course {
  margin-top: 30px;
}
.jiji {
  height: 400px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.changinfobtn {
  display: flex;
  justify-content: flex-end;
}
</style>