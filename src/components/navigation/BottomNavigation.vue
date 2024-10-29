<template>
  <div class="h-32"></div>
  <div
    class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">
      <router-link
        :to="{ name: 'HomePage' }"
        data-tooltip-target="tooltip-home"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
          />
        </svg>
        <span class="sr-only">Home</span>
      </router-link>
      <div
        id="tooltip-home"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Home
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <router-link
        :to="{ name: 'ExplorePage' }"
        data-tooltip-target="tooltip-wallet"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"
          ></path>
        </svg>
        <span class="sr-only">Explore</span>
      </router-link>
      <div
        id="Explore"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Explore
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <div class="flex items-center justify-center">
        <button
          data-tooltip-target="tooltip-new"
          type="button"
          class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span class="sr-only">New item</span>
        </button>
      </div>
      <div
        id="tooltip-new"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Create new item
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <router-link
        :to="{ name: 'ExploreRelease' }"
        data-tooltip-target="tooltip-settings"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
        >
          <path
            d="M11.25 2C9.88382 2.00133 8.73117 2.01015 7.75 2.0685V6.24976H11.25V2Z"
            fill="currentColor"
          ></path>
          <path
            d="M6.25 2.2214C5.02727 2.41566 4.1485 2.78019 3.46447 3.46423C2.78043 4.14826 2.4159 5.02703 2.22164 6.24976H6.25V2.2214Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 11.9998C2 10.2993 2 8.90556 2.06874 7.74976L21.9313 7.74976C22 8.90556 22 10.2993 22 11.9998C22 13.7002 22 15.094 21.9313 16.2498L2.06874 16.2498C2 15.094 2 13.7002 2 11.9998ZM12.4112 10.4043C13.4704 11.1162 14 11.4722 14 12C14 12.5278 13.4704 12.8838 12.4112 13.5957C11.3375 14.3173 10.8006 14.6781 10.4003 14.4132C10 14.1483 10 13.4322 10 12C10 10.5678 10 9.85174 10.4003 9.58682C10.8006 9.3219 11.3375 9.68271 12.4112 10.4043Z"
            fill="currentColor"
          ></path>
          <path
            d="M21.7784 6.24976C21.5841 5.02703 21.2196 4.14826 20.5355 3.46423C19.8515 2.78019 18.9727 2.41566 17.75 2.2214V6.24976H21.7784Z"
            fill="currentColor"
          ></path>
          <path
            d="M12.75 2C14.1162 2.00133 15.2688 2.01015 16.25 2.0685V6.24976H12.75V2Z"
            fill="currentColor"
          ></path>
          <path
            d="M21.7784 17.7498H17.75V21.7781C18.9727 21.5839 19.8515 21.2193 20.5355 20.5353C21.2196 19.8513 21.5841 18.9725 21.7784 17.7498Z"
            fill="currentColor"
          ></path>
          <path
            d="M16.25 17.7498V21.931C15.2688 21.9894 14.1162 21.9982 12.75 21.9995V17.7498H16.25Z"
            fill="currentColor"
          ></path>
          <path
            d="M11.25 21.9995V17.7498H7.75L7.75 21.931C8.73117 21.9894 9.88382 21.9982 11.25 21.9995Z"
            fill="currentColor"
          ></path>
          <path
            d="M6.25 17.7498L6.25 21.7781C5.02727 21.5839 4.1485 21.2193 3.46447 20.5353C2.78043 19.8513 2.4159 18.9725 2.22164 17.7498H6.25Z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="sr-only">Release</span>
      </router-link>
      <div
        id="tooltip-Release"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Release
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <router-link
        :to="{ name: 'ProfilePage' }"
        data-tooltip-target="tooltip-profile"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <svg
          class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
          />
        </svg>
        <span class="sr-only">Profile</span>
      </router-link>
      <div
        id="tooltip-profile"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Profile
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style></style>
