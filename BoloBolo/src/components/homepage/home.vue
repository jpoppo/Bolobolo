<template>
    <div class="home01">
        <menubar></menubar>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-carousel height="300px">
                        <el-carousel-item v-for="pic in pics" :key="pic.id">
                            <img :src="pic.url" class="imagezouma" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <div>
                        <a href="">
                            <img class="image1" src="../../assets/black.png">
                            <div class="card-mark">
                                <ul class="homeul">
                                    <li class="homeli" v-for="(value, key) in object5" align="left">
                                        {{ key }} : {{ value }}
                                    </li>
                                </ul>
                            </div>
                        </a>

                    </div>
                    <div>
                        <a href="">
                            <img class="image1" src="../../assets/black.png">
                            <div class="card-mark">
                                <ul class="homeul">
                                    <li class="homeli" v-for="(value, key) in object6" align="left">
                                        {{ key }} : {{ value }}
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </el-row>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <div>
                        <a href="">
                            <img class="image1" src="../../assets/black.png">
                            <div class="card-mark">
                                <ul class="homeul">
                                    <li class="homeli" v-for="(value, key) in object5" align="left">
                                        {{ key }} : {{ value }}
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img class="image1" src="../../assets/black.png">
                            <div class="card-mark">
                                <ul class="homeul">
                                    <li class="homeli" v-for="(value, key) in object6" align="left">
                                        {{ key }} : {{ value }}
                                    </li>
                                </ul>
                            </div>
                        </a>
                    </div>
                </el-row>
            </el-col>
            <el-col :span="4">
                <el-row>
                    <div>
                        <div class="home-card">
                            <a href="">
                                <img class="image1" src="../../assets/black.png">
                                <div class="card-mark">
                                    <ul class="homeul">
                                        <li class="homeli" v-for="(value, key) in object5" align="left">
                                            {{ key }} : {{ value }}
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div class="home-card">
                            <a href="">
                                <img class="image1" src="../../assets/black.png">
                                <div class="card-mark">
                                    <ul class="homeul">
                                        <li class="homeli" v-for="(value, key) in object6" align="left">
                                            {{ key }} : {{ value }}
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        </div>
                    </div>
                </el-row>
            </el-col>
        </el-row>
        <div class="home03">
            <div class="home02">
                <el-row type="flex" class="row-bg" justify="space-between" :gutter="10">
                    <el-col :span="6">
                        <div>
                            <span align=left><img height=40 src="../../assets/logo.png" width=40 align=left border=0>推广<br>&nbsp;<br clear=left></span>
                        </div>
                    </el-col>
                    <el-col :span="3" offset="20">
                        <div class="more">
                            <a href="#">更多&nbsp&gt;</a>
                        </div>
                    </el-col>
                </el-row>
                <div class="inner">
                    <el-row :gutter="20">
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div>
                                <div class="home-card">
                                    <a href="">
                                        <img class="image2" src="../../assets/black.png">
                                        <div class="card-mark1">
                                            <ul class="home1ul">
                                                <li class="home1li" v-for="(value) in object1" align=left>
                                                    {{ value }}
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div>
                                <div class="home-card">
                                    <a href="">
                                        <img class="image2" src="../../assets/black.png">
                                        <div class="card-mark1">
                                            <ul class="home1ul">
                                                <li class="home1li" v-for="(value) in object1" align=left>
                                                    {{ value }}
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div>
                                <div class="home-card">
                                    <a href="">
                                        <img class="image2" src="../../assets/black.png">
                                        <div class="card-mark1">
                                            <ul class="home1ul">
                                                <li class="home1li" v-for="(value) in object1" align=left>
                                                    {{ value }}
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div>
                                <div class="home-card">
                                    <a href="">
                                        <img class="image2" src="../../assets/black.png">
                                        <div class="card-mark1">
                                            <ul class="home1ul">
                                                <li class="home1li" v-for="(value) in object1" align=left>
                                                    {{ value }}
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <el-row type="flex" class="row-bg" justify="space-between" :gutter="10">
                <el-col :span="6">
                    <div>
                        <span align=left><img height=40 src="../../assets/logo.png" width=40 align=left border=0>动画<br>&nbsp;<br clear=left></span>
                    </div>
                </el-col>
                <el-col :span="3" offset="20">
                    <div class="more">
                        <a href="#">更多&nbsp&gt;</a>
                    </div>
                </el-col>
            </el-row>
            <div class="inner">
                <el-row :gutter="20">
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div>
                            <div class="home-card">
                                <a href="">
                                    <img class="image2" src="../../assets/black.png">
                                    <div class="card-mark1">
                                        <ul class="home1ul">
                                            <li class="home1li" v-for="(value) in object1" align=left>
                                                {{ value }}
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div class="home-card">
                                <a href="">
                                    <img class="image2" src="../../assets/black.png">
                                    <div class="card-mark1">
                                        <ul class="home1ul">
                                            <li class="home1li" v-for="(value) in object1" align=left>
                                                {{ value }}
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div class="home-card">
                                <a href="">
                                    <img class="image2" src="../../assets/black.png">
                                    <div class="card-mark1">
                                        <ul class="home1ul">
                                            <li class="home1li" v-for="(value) in object1" align=left>
                                                {{ value }}
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div class="home-card">
                                <a href="">
                                    <img class="image2" src="../../assets/black.png">
                                    <div class="card-mark1">
                                        <ul class="home1ul">
                                            <li class="home1li" v-for="(value) in object1" align=left>
                                                {{ value }}
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>

</template>

<script>
import menubar from "@/components/homepage/menu";
export default {
    components: {
        menubar
    },
    name: "home01",
    data() {
        return {
            pics: [
                {
                    id: 1,
                    url:
                        "http://p0n1k24eb.bkt.clouddn.com/FizoK8iQ3lWT0sFB7trZcM0WwiEN"
                },
                {
                    id: 2,
                    url:
                        "http://p0n1k24eb.bkt.clouddn.com/FmT4s2-7bck72itsIsiBhgU2igpz"
                },
                {
                    id: 3,
                    url:
                        "http://p0n1k24eb.bkt.clouddn.com/FjFZ9opbwL_httb4F6qvNlM2gKK4"
                },
                {
                    id: 4,
                    url:
                        "http://p0n1k24eb.bkt.clouddn.com/FuSTY0phSVumMhBqspI4XygvZ385"
                }
            ],
            object1: {
                titile: "【社会人张仪】我张仪从不给人留面子，尤其喜欢撕魏王面"
            },
            object2: {
                title: "菜鸟教程",
                upper: "tom",
                播放量: "20万"
            },
            object3: {
                title: "菜鸟教程",
                upper: "tom",
                播放量: "20万"
            },
            object4: {
                title: "菜鸟教程",
                upper: "tom",
                播放量: "20万"
            },
            object5: {
                title: "菜鸟教程",
                upper: "tom",
                播放量: "20万"
            },
            object6: {
                title: "菜鸟教程",
                upper: "tom",
                播放量: "20万"
            },
            home_D: {
                titile: "【社会人张仪】我张仪从不给人留面子，尤其喜欢撕魏王面"
            },
            showText: false,
            hideText: true
        };
    },
    created() {},

    methods: {}
};
</script>

<style scoped>
.image1 {
    width: 191px;
    height: 138px;
    border-radius: 15px;
}
.imagezouma {
    height: 100%;
    width: 100%;
    border-radius: 15px;
}
.card-mark {
    margin-top: -65px;
    width: 100%;
    height: 100%;
    text-align: "left";
    font-size: 10px;
    margin-bottom: 12px;
}
.card-mark1 {
    width: 100%;
    height: 100%;
    text-align: "left";
    margin-bottom: 12px;
}
a {
    text-decoration: none;
    color: #333;
    border: 5px;
}
.homeul {
    list-style: none;
}
.homeli {
    color: white;
    margin-left: -29px;
    margin-top: 1px;
    margin-bottom: -2px;
}

.home01 {
    margin-top: 180px;
}
.home03 {
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 0px;
}
.home02 {
    margin-bottom: 20px;
}

span {
    color: black;
    font-size: 25px;
    margin-bottom: 0;
    margin-top: -10px;
    font-style: Hiragino Sans GB;
    float: left;
}
.image2 {
    width: 290px;
    height: 170px;
    border-radius: 15px;
}
.home1ul {
    list-style: none;
    margin-left: -17px;
}
.home1li {
    color: black;
    margin-left: -25px;
    padding: 5px;
}
.home1a {
    text-decoration: none;
    color: #333;
    border: 5px;
}
.inner {
    margin-top: -30px;
    padding-bottom: 5px;
}
.more {
    border: 0.5px solid #000;
    width: 54px;
    height: 24px;
    font-size: 14px;
}
</style>
