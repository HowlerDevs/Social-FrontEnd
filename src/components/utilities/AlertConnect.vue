<template>
  <div
    class="w-72 fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    id="request-component"
  >
    <div class="flex justify-end px-4 pt-4">
      <button
        @click="closeModal"
        type="button"
        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span class="sr-only">Close modal</span>
      </button>
    </div>
    <div class="flex flex-col items-center pb-10">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        src="../../../public/picture/logo3.jpg"
      />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Bonnie Green
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >Visual Designer</span
      >
      <div class="flex mt-4 md:mt-6">
        <svg
          class="w-6 h-6 text-gray-900 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-gray-800 dark:text-white">request successful</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close-alert"]);

function closeModal() {
  emit("close-alert");
}
</script>

<style></style>
