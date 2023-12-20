<template>
  <div
    class="w-[35rem] h-[42.6rem] bg-[#202327] rounded-[1.5rem] my-[3rem] mx-[1rem]"
  >
    <div
      class="h-[4.8rem] flex flex-row gap-72 pl-[1.5rem] py-[1.2rem] font-roboto font-medium text-[1.9rem] text-[#D9D9D9] items-center"
    >
      <div>Trends for you</div>
      <v-icon name="fa-cog" />
    </div>
    <div
      class="w-[35rem] h-[8.2rem] pl-[1.5rem] flex flex-row items-center gap-72"
      v-for="(item, index) in trends"
      :key="index"
    >
      <div>
        <div class="text-[#6E767D] font-roboto font-[400] text-[1.3rem]">
          {{ item.location }}
        </div>
        <div class="text-[#D9D9D9] font-roboto font-[700] text-[1.5rem]">
          #{{ item.hashtag }}
        </div>
        <div class="text-[#6E767D] font-roboto font-[400] text-[1.3rem]">
          {{ item.count }} Tweets
        </div>
      </div>
      <v-icon name="fa-ellipsis-h" fill="#6E767D" class="mb-[2rem]" />
    </div>

    <div class="w-[35rem] h-[5rem] font-roboto font-[700] text-[1.5rem] text-[#1D9BF0] pl-[1.5rem] mt-[1rem]">
        Show More
    </div>
  </div>
</template>

<script>
import datas from "@/mock/trends.json";
export default {
  name: "TrendList",
  data() {
    return {
      trends: [],
    };
  },
  mounted() {
    this.trends = datas;
  },
};
</script>

<style>
</style>