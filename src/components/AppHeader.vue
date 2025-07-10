<template>
  <header class="border-b px-6 py-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold">Medium</h1>
    <nav class="flex space-x-6 text-sm">
      <!-- <a href="#" class="hover:underline">Our story</a> -->
      <router-link to="/our-story" class="hover:underline"
        >Our story</router-link
      >

      <a href="#" class="hover:underline">Membership</a>
      <a href="#" class="hover:underline">Write</a>
      <a
        href="#"
        @click.prevent="$emit('openSigninModal')"
        class="hover:underline"
        >Sign in</a
      >
      <a
        href="#"
        @click.prevent="$emit('openSignupModal')"
        class="bg-black text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
      >
        Get started
      </a>
    </nav>
  </header>
</template>
