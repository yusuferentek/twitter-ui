<template>
  <div class="w-[35rem] h-[31.4rem] rounded-[1.5rem] bg-[#202327] mx-[1rem]">
    <div
      class="h-[4.8rem] pl-[1.5rem] py-[1.2rem] font-roboto font-medium text-[2rem] text-[#D9D9D9] items-center"
    >
      Who To Follow
    </div>
    <div
      class="h-[7.2rem] pl-[1.5rem] flex flex-row gap-4 items-center relative"
      v-for="(item, index) in follow"
      :key="index"
    >
      <Avatar :image="item.picUrl" />
      <div class="flex-1">
        <div class="font-roboto font-[400] text-[1.5rem] text-[#D9D9D9]">
          {{ item.name }}
        </div>
        <div class="font-roboto font-[300] text-[1.5rem] text-[#6E767D]">
          @{{ item.userName }}
        </div>
      </div>
      <ButtonC
        type="follow"
        value="Follow"
        class="pt-[0.5rem] mr-[1rem]"
        @click="isFollow = !isFollow"
      />
    </div>
    <div class="w-[35rem] h-[5rem] font-roboto font-[700] text-[1.5rem] text-[#1D9BF0] pl-[1.5rem] mt-[1rem]">
        Show More
    </div>
  </div>
</template>

<script>
import datas from "@/mock/WhoToFollow.json";
import Avatar from "./Avatar.vue";
import ButtonC from "./ButtonC.vue";
export default {
  name: "FollowList",
  components: {
    Avatar,
    ButtonC,
  },
  data() {
    return {
      follow: [],
      isFollow: true
    };
  },
  mounted() {
    this.follow = datas;
  },
};
</script>
