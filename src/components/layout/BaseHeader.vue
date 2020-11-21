<template>
  <el-row>
    <el-col :span="3" offset="3" class="me-home">
        Home
    </el-col>
    <el-col :span="12" offset="0">
      <el-menu router="true" default-active="" mode="horizontal">
        <el-menu-item index="/">主页</el-menu-item>
        <el-menu-item index="/">文章</el-menu-item>
        <el-menu-item index="/">美文</el-menu-item>
        <el-menu-item index="/">风景</el-menu-item>
        <el-menu-item index="/">风景</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style scoped>
.me-home{
  margin-top: 20px;
}
.el-menu-item{
  min-width: 20%;
  text-align: center;
}
</style>
