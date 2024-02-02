<template>
  <div class="h-[14.3rem] w-[100%]">
    <div
      v-for="(item, index) in mentions.obj"
      :key="index"
      class="border-b border-[#2F3336] h-[100%] w-[100%] px-[1.6rem] py-[1.2rem]"
    >
      <div class="flex gap-10 text-white">
        <Avatar :image="item.user.profilePic" />
        <div>
          <div class="flex gap-2 pb-5">
            <div class="font-roboto font-[70rem] text-[1.5rem]">
              {{ item.user.fullname }}
            </div>
            <div class="text-[#6E767D] font-roboto font-[30rem] text-[1.5rem]">
              @{{ item.user.username }}
            </div>
            <div class="text-[#6E767D] font-roboto font-[30rem] text-[1.5rem]">
              {{ item.cDate }}
            </div>
          </div>
          <div class="flex-1 max-w-[50rem] font-roboto font-[40rem] text-[1.3rem] ">
            {{ item.content }}
          </div>
          <div
            class="flex items-center text-[#6E767D] font-roboto font-[30rem] text-[1.3rem] pt-[0.5rem] gap-40 w-max"
          >
            <div class="flex gap-1 items-center">
              <v-icon name="fa-regular-comment" fill="#6E767D" scale="1" />
              <div class="">{{ item.commentCount }}</div>
            </div>
            <div class="flex gap-1 items-center">
              <v-icon name="fa-retweet" fill="#6E767D" scale="1.3" />
              <div class="">{{ item.replyCount }}</div>
            </div>
            <div class="flex gap-1 items-center">
              <v-icon name="fa-heart" fill="#6E767D" scale="1" />
              <div class="">{{ item.favoriteCount }}</div>
            </div>

            <v-icon name="fa-share" fill="#6E767D" scale="1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import {mentionApi} from "@/services/apiService.js"
export default {
  name: "TimeLine",
  components: {
    Avatar,
  },
  data() {
    return {
      mentions: [],
      users: [],
    };
  },
  created(){
    const UserId = this.$store.getters.getUser.user.id;
    mentionApi.get(`/GetFollowedMentions/${UserId}`)
      .then(response => {
        this.mentions = response.data;
        console.log(this.mentions);
      })
      .catch(error => {
        console.error('Hata: ', error);
      });
  }
};
</script>

<style>
</style>