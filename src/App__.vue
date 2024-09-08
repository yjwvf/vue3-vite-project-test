<template>
  <div>
    <HelloWorld></HelloWorld>
 </div>
</template>
<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import request from '@/utils/request.ts'
  import { onMounted } from 'vue';
  //import svgtest from '@/components/SvgIcon/index.vue';
  //import page from '@/components/Page/page.vue';

  onMounted(()=> {
    request({
      url:'/user/login',
      method:'post',
      data:{
        username:'admin',
        password:'111111'
      }
    }).then(res => {
      //返回的数据；
      console.log(res);
    });
  });

</script>
<style scoped>

</style>
