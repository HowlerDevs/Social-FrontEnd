<template>
  <div class="flex flex-col sm:flex-row justify-center">
    <!-- my avatar -->
    <div role="status" class="flex m-10 items-center justify-center">
      <svg
        class="w-16 h-16 text-gray-200 dark:text-gray-700 me-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
        />
      </svg>
      <div class="me-4">
        <div
          class="w-20 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 me-3 mb-2"
        ></div>
        <div class="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <!-- edit botton avatar -->
      <BtnEditProfile @open-alert="isHidden = false"></BtnEditProfile>

      <!-- setting botton in size sm> -->
      <SettingSizeBtn v-if="isSmallScreen"></SettingSizeBtn>

      <!-- Support & More Info botton in size grater of sm -->
      <SupportInfo v-if="!isSmallScreen"></SupportInfo>

      <!-- Logout botton in size grater of sm -->
      <LogOut v-if="!isSmallScreen"></LogOut>
    </div>
  </div>

  <TabProfile
    @show-posts="activeTab = 'posts'"
    @show-release="activeTab = 'releases'"
  ></TabProfile>

  <PostContent
    v-if="activeTab === 'posts'"
    @open-post="showPost = 'post'"
  ></PostContent>
  <ViewPost v-if="showPost === 'post'" @close-post="ClosePost"></ViewPost>

  <ReleaseContent
    v-if="activeTab === 'releases'"
    @open-release="showRelease = 'release'"
  ></ReleaseContent>
  <ViewRelease
    v-if="showRelease === 'release'"
    @close-release="CloseRelease"
  ></ViewRelease>

  <BottomNavigation></BottomNavigation>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import BtnEditProfile from "../settingprofile/BtnEditProfile.vue";
import SettingSizeBtn from "../settingprofile/SettingSizeBtn.vue";
import SupportInfo from "../settingprofile/SupportInfo.vue";
import LogOut from "../settingprofile/LogOut.vue";
import BottomNavigation from "../navigation/BottomNavigation.vue";
import TabProfile from "../content/TabProfile.vue";
import PostContent from "../content/PostContent.vue";
import ReleaseContent from "../content/ReleaseContent.vue";
import ViewPost from "../content/ViewPost.vue";
import ViewRelease from "../content/ViewRelease.vue";

const isHidden = ref(true);
const activeTab = ref(null);
const showPost = ref(null);
const showRelease = ref(null);
const isSmallScreen = ref(false);

function ClosePost() {
  showPost.value = null;
}
function CloseRelease() {
  showRelease.value = null;
}

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 640;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});


</script>
<style></style>
