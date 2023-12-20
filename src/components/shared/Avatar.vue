<template>
  <div>
    <img :src="image" class="rounded-[4rem] w-[4rem] h-[4rem] bg-white">
  </div>
</template>

<script>
export default {
    name:'AvataR',
    props:["image"]
}
</script>
