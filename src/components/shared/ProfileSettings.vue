<template>
  <div class="w-[23rem] h-[6.4rem] rouned-[6.4rem] bg-black flex items-center justify-start gap-4">
    <Avatar
      image="https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"
    />
    <div class="mr-[1.5rem]">
      <div class="flex">
        <div class="text-[#D9D9D9] font-[70rem] text-[1.5rem] font-roboto">
          {{ name }}
        </div>
        <v-icon name="fa-lock" fill="white" class="ml-[0.5rem]" />
      </div>
      <div class="text-[#6E767D] font-roboto font-[70rem] text-[1.5rem]">
        @{{ userName }}
      </div>
    </div>
    <v-icon name="fa-ellipsis-h" fill="white" class="pl-2"/>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "ProfileSettings",
  components: {
    Avatar,
  },
  props: {
    name: String,
    userName: String,
  },
};
</script>

<style>
</style>