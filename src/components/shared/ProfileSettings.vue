<template>
  <div class="w-[23rem] h-[6.4rem] rouned-[6.4rem] bg-black flex items-center justify-start gap-4">
    <Avatar :image="baseUrl + this.user.avatar" />
    <div class="mr-[6rem]">
      <div class="flex">
        <div class="text-[#D9D9D9] font-[70rem] text-[1.5rem] font-roboto">
          {{ user.fullName }}
        </div>
        <v-icon name="fa-lock" fill="white" class="ml-[0.5rem]" />
      </div>
      <div class="text-[#6E767D] font-roboto font-[70rem] text-[1.5rem]">
        @{{ user.userName }}
      </div>
    </div>
    <div>
      <div  @click="toggleMenu()">
        <v-icon name="fa-ellipsis-h" fill="white" class="pl-2" />
      </div>

      <div v-if="isMenuOpen" ref="menu" class="absolute bg-white shadow-md p-2">
        <!-- Menü İçeriği -->
        <p class="cursor-pointer hover:bg-gray-200 p-2" @click="menuItemClicked('Item 1')">Item 1</p>
        <p class="cursor-pointer hover:bg-gray-200 p-2" @click="menuItemClicked('Item 2')">Item 2</p>
        <p class="cursor-pointer hover:bg-gray-200 p-2" @click="menuItemClicked('Item 3')">Item 3</p>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "ProfileSettings",
  data() {
    return {
      baseUrl: this.$store.getters.getBaseProfileUrl,
      isMenuOpen: false,
      user: this.$store.getters.getUser.user
    }
  },
  components: {
    Avatar,
  },
  methods: {
  toggleMenu() {
    
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
    if (this.isMenuOpen) {
      window.addEventListener('click', this.closeMenu);
    } else {
      window.removeEventListener('click', this.closeMenu);
    }
  },
  closeMenu(event) {
    if (!this.$refs.menu.contains(event.target)) {
      this.isMenuOpen = false;
      window.removeEventListener('click', this.closeMenu);
    }
  },
  menuItemClicked(item) {
    console.log(`${item} clicked`);
  },
},
};
</script>

<style></style>