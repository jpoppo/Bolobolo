<template>
    <el-container class="allcon">
        <el-header><Headerbar></Headerbar></el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer><foodbarr></foodbarr></el-footer>
    </el-container>
    
</template>

<script>
import foodbarr from "@/components/footer&header/footernew";
import Headerbar from "@/components/footer&header/header";
export default {
    name:"main",
    components: {
        Headerbar,
        foodbarr
    }
}
</script>

<style scoped>
.el-header{
    padding-left:0px;
    padding-right:0px;
    margin-left:0px;
    margin-right: 0px; 
}
</style>