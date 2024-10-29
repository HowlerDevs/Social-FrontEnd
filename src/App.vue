<template>
  <div class="p-0 m-0 box-border min-h-screen dark:bg-gray-400">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const savedDarkMode = localStorage.getItem("darkMode");

  if (savedDarkMode === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
</script>
<style></style>
