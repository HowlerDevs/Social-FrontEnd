<template>
  <div
    class="p-4 bg-gray-50 dark:bg-gray-800"
    id="contant-posts"
    role="tabpanel"
    aria-labelledby="dashboard-tab"
  >
    <div class="flex flex-col gap-y-4 items-center">
      <!-- post1 -->
      <router-link
        :to="{ name: 'ViewPost' }"
        @click="ShowPost"
        class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover rounded-t-lg h-24 2-24 md:h-48 md:w-48 md:rounded-none md:rounded-s-lg"
          src="../../../public/picture/moonpng.parspng.com-8.png"
        />
        <p
          class="mb-3 h-[82px] md:h-40 overflow-hidden line-clamp-3 md:line-clamp-6 text-ellipsis p-4 font-normal text-gray-700 dark:text-gray-400"
        >
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.Here are the biggest enterprise
          technology acquisitions of 2021 so far, in reverse chronological
          order.Here are the biggest enterprise technology acquisitions of 2021
          so far, in reverse chronological order.Here are the biggest enterprise
          technology acquisitions of 2021 so far, in reverse chronological
          order.Here are the biggest enterprise technology acquisitions of 2021
          so far, in reverse chronological order.
        </p>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["open-post"]);

function ShowPost() {
  emit("open-post");
}
</script>
<style></style>
