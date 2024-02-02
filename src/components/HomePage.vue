<template>
    <div class="h-[100%] flex flex-col items-center justify-center">
      <!-- <ButtonC type="tweet" value="Tweet"/> -->
      <MainSection>
        <Section><SideBar /></Section>
        <Section><Body /></Section>
        <Section><RightBar /></Section>
      </MainSection>
    </div>
  </template>
  
  <script>
  /* import ButtonC from './components/shared/ButtonC.vue' */
  /* import NavigationC from './components/shared/NavigationC.vue' */
  import SideBar from "./SideBar.vue";
  import MainSection from "./shared/MainSection.vue";
  import Body from "./Body.vue";
  import Section from "./shared/Section.vue";
  import RightBar from "./RightBar.vue";
  export default {
    name: "HomePage",
    components: {
      /* ButtonC, */
      /*     NavigationC, */
      MainSection,
      Section,
      SideBar,
      Body,
      RightBar,
    },
  };
  </script>
  
  