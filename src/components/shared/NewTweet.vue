<template>
  <div class="w-[60rem] h-[11.9rem] flex-row">
    <div class="pt-[0.4rem] flex h-[7.1rem]">
      <Avatar
        class="pl-[1.6rem] pr-[1rem]"
        :image="baseUrl + this.user.avatar"
      />
      <input
        class="w-[52rem] bg-black text-white placeholder-[#6E767D] placeholder-opacity-80 font-roboto text-[2rem] font-[40rem]"
        type="text"
        placeholder="What's happening?"
        v-model="content"
      />
    </div>
    <div class="h-[4.8rem] text-white pl-[6.6rem] flex  gap-3">
      <div v-for="(item, index) in icons" :key="index" class="pt-[2.2rem]">
        <v-icon :name="item.name" fill="#1D9BF0" scale="1.2"/>
      </div>
      <div class="w-[28rem]">
      </div>
      <div class="pt-3" @click="newTweet($store.getters.getUser.user.id,content)">
        <ButtonC type="tweet" value="Tweet" class="pt-2" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import data from "@/mock/newTweetIcons.json";
import ButtonC from "./ButtonC.vue";
import { mentionApi } from '@/services/apiService';
export default {
  name: "NewTweet",
  components: {
    Avatar,
    ButtonC
  },
  data() {
    return {
      icons: [],
      content:"",
      baseUrl: this.$store.getters.getBaseProfileUrl,
      user : this.$store.getters.getUser.user
    };
  },
  mounted() {
    this.icons = data;
  },
  methods:{
    async newTweet(userId,content){
      try{
        const postData = {
          UserId:userId,
          Content:content,
          CDate:new Date()
        };
        const apiUrl = "/NewMention";
        const response = await mentionApi.post(apiUrl,postData);
        if(response.status ==200){
          location.reload();
        }
      }catch(error){
        console.log(error.meesage);
      }
    }
  }
};
</script>
