<template>
  <el-container>
    <base-header></base-header>

    <router-view></router-view>

    <el-footer class="tou">页脚</el-footer>
  </el-container>
</template>

<script>
import BaseHeader from "@/components/layout/BaseHeader";


export default {

  components: {BaseHeader}
}
</script>

<style>
.tou{
  text-align: center;
}
</style>
