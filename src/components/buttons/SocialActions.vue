<template>
  <div
    :class="[
      'flex',
      vertical
        ? 'absolute bottom-16 right-2 flex-col'
        : 'flex-row justify-center',
      'gap-4',
      'mt-7',
    ]"
  >
    <!-- like -->
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      :fill="isFill ? 'currentColor' : 'none'"
      @click="showlike"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
      />
    </svg>

    <!-- comments -->
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      @click="showcomment"
    >
      <path
        fill-rule="evenodd"
        d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
        clip-rule="evenodd"
      />
    </svg>
    <AlertComment
      v-if="isconectvisible"
      @close-comment="isconectvisible = false"
    ></AlertComment>
    <!-- share -->
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M17.5 3a3.5 3.5 0 0 0-3.456 4.06L8.143 9.704a3.5 3.5 0 1 0-.01 4.6l5.91 2.65a3.5 3.5 0 1 0 .863-1.805l-5.94-2.662a3.53 3.53 0 0 0 .002-.961l5.948-2.667A3.5 3.5 0 1 0 17.5 3Z"
      />
    </svg>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import AlertComment from "../content/AlertComment.vue";

const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
});

const isconectvisible = ref(false);
const isFill = ref(false);

function showcomment() {
  isconectvisible.value = true;
  console.log(isconectvisible.value);
}

function showlike() {
  isFill.value = !isFill.value;
  console.log(isFill.value);
}
</script>
<style></style>
