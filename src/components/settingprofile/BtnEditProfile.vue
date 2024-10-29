<template>
  <button
    data-modal-target="crud-modal"
    data-modal-toggle="crud-modal"
    class="block h-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-nowrap m-1"
    type="button"
    @click="showedit"
    onclick="document.getElementById('crud-modal').classList.remove('hidden')"
  >
    Edit Profile
  </button>
  <AlretEditProf v-if="!isHidden" @close-alert="isHidden = true"></AlretEditProf>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import AlretEditProf from "./AlretEditProf.vue";

const emit = defineEmits(["open-alert"]);
const isHidden = ref(true);

function showedit() {
  isHidden.value = false;
}
</script>
<style></style>
