<template>
  <div class="w-[60rem] flex items-center relative p-4">
    <div class="font-roboto text-[2rem] font-[70rem] text-white">
      {{ title }}
    </div>
    <v-icon name="fa-regular-star" fill="white" scale="1.5" class="absolute right-2" />
  </div>
</template>

<script>
export default {
  name: "BodyHead",
  props: {
    title: String,
  },
};
</script>

<style>
</style>