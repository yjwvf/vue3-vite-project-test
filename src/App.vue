<template>
  <div>
   
 </div>
</template>
<script setup lang="ts">
    import { onMounted } from 'vue';
    import {loginReq} from '@/api/user/index.ts'
    onMounted(()=>{
      loginReq({username:"admin",password:"111111"})
    })
</script>
<style scoped>

</style>
