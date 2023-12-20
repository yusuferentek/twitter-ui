<template>
  <div
    :class="{
      'bg-[#1D9BF0] w-[22.5rem] h-[5.2rem] rounded-[5.2rem] text-white text-[1.7rem] font-[70rem]':
        type == 'default',
      'bg-[#1D9BF0] w-[7.9rem] h-[3.6rem] rounded-[3.6rem] gap-[1rem] text-white text-[1.5rem] font-[70rem]':
        type == 'tweet',
      'bg-[#EFF3F4] w-[7.3rem] h-[3.1rem] rounded-[3.2rem] gap-[1rem] text-black text-[1.4rem] font-[40rem]':
        type == 'follow',
    }"
    class="relative"
  >
    <div class="font-roboto text-center">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonC",

  props: {
    type: String,
    value: String,
  },
};
</script>

<style>
</style>