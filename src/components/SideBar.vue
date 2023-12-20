<template>
  <div class="bg-black flex gap-[0.8rem] w-[25.1rem] h-[90rem] relative ">
    <div class="pl-[1.2rem]">
      <NavigationC />
      <ButtonC type="default" value="Tweet" class="pt-[1.2rem]"/>
      <ProfileSettings name="Yusuf Eren Tek" userName="yusuferen" class="absolute bottom-1"/>
    </div>
  </div>
</template>

<script>
import ButtonC from "./shared/ButtonC.vue";
import NavigationC from "./shared/NavigationC.vue";
import ProfileSettings from './shared/ProfileSettings.vue';

export default {
  name: "SideBar",
  components: {
    NavigationC,
    ButtonC,
    ProfileSettings
  },
};
</script>
