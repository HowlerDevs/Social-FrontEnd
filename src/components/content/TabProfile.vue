<template>
  <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
  <div>
    <!-- button tab -->
    <div class="mb-4 border-gray-200 dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center justify-center"
        id="default-styled-tab"
        data-tabs-toggle="#default-styled-tab-content"
        data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
        data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
        role="tablist"
      >
        <li class="me-2" role="presentation">
          <router-link
            :to="{ name: 'PostContent' }"
            @click="ShowPosts"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-styled-tab"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Posts
          </router-link>
        </li>
        <li class="me-2" role="presentation">
          <router-link
            :to="{ name: 'ReleaseContent' }"
            @click="ShowRelease"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-styled-tab"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Release
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["show-posts", "show-release"]);

function ShowPosts() {
  emit("show-posts");
}
function ShowRelease() {
  emit("show-release");
}
</script>

<style></style>
