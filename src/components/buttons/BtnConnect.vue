<template>
  <div>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 ms-3 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="connect"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["open-alert"]);
const buttonText = ref("connect");

function connect() {
  emit("open-alert");
  buttonText.value = "connecting";
}
</script>
<style></style>
