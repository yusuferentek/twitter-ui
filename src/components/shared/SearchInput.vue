<template>
  <div class="pt-[0.6rem] px-[1rem]">
    <div class="absolute top-[1.8rem] pl-[1rem]">
      <v-icon name="fa-search" scale="1.1" fill="#6E767D" />
    </div>
    <input
      class="w-[35rem] h-[4.2rem] bg-[#202327] rounded-[4.2rem] pl-[4rem] text-white font-roboto font-[40rem] text-[1.5rem] placeholder-[#6E767D]"
      type="text"
      placeholder="Search Twitter"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
};
</script>
