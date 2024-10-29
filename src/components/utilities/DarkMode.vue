<template>
  <div @click="DarkMode">
    <img
      src="/public/picture/logo.png"
      id="logo"
      class="absolute w-12 lg:w-14 rounded-full top-4 left-2 lg:left-14 z-0 cursor-pointer"
    />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(true);

const DarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  }
};
</script>
<style></style>
