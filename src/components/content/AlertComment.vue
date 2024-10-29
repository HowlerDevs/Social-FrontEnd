<template>
  <div
    id="component-comment"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-20 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            COMMENTS
          </h3>
          <button
            @click="closecomment"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="small-modal"
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
        <!-- modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <!-- comments cart -->
          <div class="flex items-start gap-2.5">
            <img
              class="w-8 h-8 rounded-full"
              src="../../../public/picture/login-wolf.jpg"
              alt="Jese image"
            />
            <div class="flex flex-col gap-1 w-full max-w-[320px]">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span
                  class="text-sm font-semibold text-gray-900 dark:text-white"
                  >Bonnie Green</span
                >
                <span
                  class="text-sm font-normal text-gray-500 dark:text-gray-400"
                  >11:46</span
                >
              </div>
              <div
                class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
              >
                <p class="text-sm font-normal text-gray-900 dark:text-white">
                  That's awesome. I think our users will really appreciate the
                  improvements.
                </p>
              </div>
            </div>
            <BtnMessageOption
              @show-option="isShowOption = !isShowOption"
            ></BtnMessageOption>
            <MessageOptions v-if="isShowOption"></MessageOptions>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import BtnMessageOption from "../buttons/‌BtnMessageOption.vue";
import MessageOptions from "../utilities/MessageOptions.vue";

const emit = defineEmits(["close-comment"]);
function closecomment() {
  emit("close-comment");
}

const isShowOption = ref(false);
</script>
<style></style>
