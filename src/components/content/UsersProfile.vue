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
    <!-- button connect & message -->
    <div class="flex mt-4 md:mt-6 justify-center items-center">
      <!-- connect button -->
      <BtnConnect></BtnConnect>
      <!-- message button -->
      <button
        class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        Message
      </button>
    </div>
  </div>
</template>
<script setup>
import BtnConnect from "../buttons/BtnConnect.vue";
</script>
<style></style>
