<template>
  <div class="w-[60rem] h-[11.9rem] flex-row">
    <div class="pt-[0.4rem] flex h-[7.1rem]">
      <Avatar
        class="pl-[1.6rem] pr-[1rem]"
        image="https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"
      />
      <input
        class="w-[52rem] bg-black text-white placeholder-[#6E767D] placeholder-opacity-80 font-roboto text-[2rem] font-[40rem]"
        type="text"
        placeholder="What's happening?"
      />
    </div>
    <div class="h-[4.8rem] text-white pl-[6.6rem] flex  gap-3">
      <div v-for="(item, index) in icons" :key="index" class="pt-[2.2rem]">
        <v-icon :name="item.name" fill="#1D9BF0" scale="1.2"/>
      </div>
      <div class="w-[28rem]">
      </div>
      <div class="pt-3">
        <ButtonC type="tweet" value="Tweet" class="pt-2"/>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import data from "@/mock/newTweetIcons.json";
import ButtonC from "./ButtonC.vue";
export default {
  name: "NewTweet",
  components: {
    Avatar,
    ButtonC
  },
  data() {
    return {
      icons: [],
    };
  },
  mounted() {
    this.icons = data;
  },
};
</script>
