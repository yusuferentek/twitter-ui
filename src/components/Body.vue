<template>
  <div class="w-[60rem]">
    <Section>
      <BodyHead title="Home" />
    </Section>
    <div class="relative overflow-y-auto h-[85rem]">
      <Section>
        <NewTweet />
      </Section>
      <TimeLine />
    </div>
  </div>
</template>

<script>
import BodyHead from "./shared/BodyHead.vue";
import Section from "./shared/Section.vue";
import NewTweet from "./shared/NewTweet.vue";
import TimeLine from "./shared/TimeLine.vue";
export default {
  name: "BodY",
  components: {
    BodyHead,
    Section,
    NewTweet,
    TimeLine,
  },
};
</script>
