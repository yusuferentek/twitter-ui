<template>
  <div>
    <div
      v-for="(item, key) in navigationData"
      :key="key"
      class="flex flex-row justify-start items-center gap-[0.8rem] w-[25.1rem] h-[5.5rem] rounded-[5rem]"
    >
      <v-icon :name="item.icon" fill="white" scale="1.5" />
      <div class="font-roboto font-[70rem] text-[1.9rem] text-[#D9D9D9]">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import data from "@/mock/navigation.json";
export default {
  name: "NavigationC",
  data() {
    return {
      navigationData: [],
    };
  },
  mounted() {
    this.navigationData = data;
  },
};
</script>