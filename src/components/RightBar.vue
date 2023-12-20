<template>
  <div>
    <SearchInput />
    <TrendList />
    <FollowList/>
    <TwFooter/>
  </div>
</template>

<script>
import SearchInput from "./shared/SearchInput.vue";
import TrendList from "./shared/TrendList.vue";
import FollowList from "./shared/FollowList.vue";
import TwFooter from "./shared/TwFooter.vue";
export default {
  name: "RightBar",
  components: {
    SearchInput,
    TrendList,
    FollowList,
    TwFooter
  },
};
</script>

