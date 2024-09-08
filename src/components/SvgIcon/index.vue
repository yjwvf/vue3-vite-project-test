<template>
<div>
    <svg>
        <use :xlink:href="prefix+name"></use>
    </svg>
</div>

</template>
<script setup lang="ts">
// let {prefix, name} = defineProps({
//     prefix:{
//         type:String,
//         default:'#icon-'
//     },
//     name:{
//         type:String
//     }
// })
defineProps({
    prefix:{
        type:String,
        default:'#icon-'
    },
    name:{
        type:String
    }
})
</script>
<style lang="css">

</style>