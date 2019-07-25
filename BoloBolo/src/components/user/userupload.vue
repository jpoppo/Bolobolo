<template>
  <div class="manage-bar">
    <div style="font-size:1.5em;text-align:left">
      <span class="title">
        <el-button type="text" style="display:inline-block;" @click="addBar">添加视频</el-button>
      </span>
    </div>
    <div class="suun-dialog">
          <el-upload class="upload-demo"  action="http://upload-z2.qiniu.com" :on-success="handleVideoSuccess" :before-upload="beforeUploadVideo" :on-progress="uploadVideoProcess">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传PDF/MP4/FLV文件</div>
          </el-upload>

        <div slot="footer" class="dialog-footer">
          <el-button @click="addBarDialog = false">取 消</el-button>
          <el-button type="primary" @click="handleAdd('addForm')">确 定</el-button>
          <el-button type="primary" @click="continualhandlenew">继续上传</el-button>
        </div>
    </div>
  </div>
</template>
<script>
import uuid from "uuid/v1";
export default {
  name: "manageBar",
  data() {
    return {
      data: {
        token:
          "rcHe5WjHZQ9cfbxNWlPao4zNFgLGPZijSJei264R:8qyT9npp0SccIYafleJepsbEwPM=:eyJzY29wZSI6Im1vb2MiLCJkZWFkbGluZSI6MTU0NDU0NDAwMH0=",
        file: "fdsdg",
        key: ""
      },
      radio: "1",
      temp: "",
      newForm: {
        barid: "",
        barName: "",
        isVedio: "",
        isPdf: "",
        place: "",
        courseid: ""
      },
      addBarDialog: false,
      options: []
    };
  },
  created() {
    this.getinfo();
    this.getpotion();
  },
  methods: {
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0);
    },
    beforeUploadVideo(file) {
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb"
        ].indexOf(file.type) == -1
      ) {
        this.$message.error("请上传正确的视频格式");
        return false;
      }
      if (!isLt10M) {
        this.$message.error("上传视频大小不能超过10MB哦!");
        return false;
      }
    },
    getinfo() {
      this.newForm.courseid = this.$route.params.cid;
      var self = this;
      this.$ajax
        .post("/managesession?cmd=getinfo", self.newForm)
        .then(function(response) {
          self.courseDetail = [];
          var body = response.data;
          for (var i = 0; i < body.data.length; i++) {
            self.courseDetail.push({
              barid: body.data[i].sectionID,
              barName: body.data[i].sectionName,
              isVedio: body.data[i].videoRoute,
              isPdf: body.data[i].pdfRoute,
              place: body.data[i].preID
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getpotion() {
      this.newForm.courseid = this.$route.params.cid;
      var self = this;
      this.$ajax
        .post("/managesession?cmd=getpotion", self.newForm)
        .then(function(response) {
          self.options = [];
          var body = response.data;
          for (var i = 0; i < body.data.length; i++) {
            self.options.push({
              value: body.data[i].sectionID,
              label: body.data[i].sectionName
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addBar() {
      this.addBarDialog = true;
    },
    handleAvatarSuccess(res, file) {
      this.temp = "http://p0n1k24eb.bkt.clouddn.com/" + res.key;
      this.$message({
        message: "上传成功",
        type: "success"
      });
    },
  }
};
</script>

<style scoped>
.manage-bar {
  padding-top: 50px;
  max-width: 1000px;
  margin: auto;
}

.title {
  padding-right: 50px;
}

.list {
  margin: 10px;
}
</style>