<template>
    <div>
        <el-button type="primary" :icon="Edit">Primary</el-button>
        <el-button type="primary" :icon="Delete">Primary</el-button>
        <br>
        <el-pagination
            :page-size="100"
            layout="total, prev, pager, next"
            :total="1000"
        />
        <br>

        <svgtest name="phone"></svgtest>
        <br>
        <page></page>

        <span>scss样式</span>
    </div>
</template>

<script setup lang="ts">
import {Edit,Delete} from '@element-plus/icons-vue';

</script>
<style lang="scss" scoped>
        span{
            color:$color;
            left:$width
        }
   
</style>