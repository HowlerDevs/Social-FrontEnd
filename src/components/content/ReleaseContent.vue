<template>
  <div
    class="flex flex-wrap justify-start gap-1 w-[21.5rem] sm:w-[30.5rem] mx-auto"
  >
    <!-- release1 -->
    <div>
      <router-link :to="{ name: 'ViewRelease' }" @click="ShowRelease">
        <img
          src="../../../public/picture/بک-گراند-گل-آبی.webp"
          class="w-28 h-28 md:w-40 md:h-40"
        />
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["open-release"]);

function ShowRelease() {
  emit("open-release");
}
</script>
<style></style>
