<template>
  <div
    class="bg-[#fefaf1] text-[#242424] h-screen overflow-hidden flex flex-col font-serif"
  >
    <!-- Navbar -->
    <header class="border-b px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Medium</h1>
      <nav class="flex space-x-6 text-sm">
        <a href="#" class="hover:underline">Our story</a>
        <a href="#" class="hover:underline">Membership</a>
        <a href="#" class="hover:underline">Write</a>
        <a href="#" class="hover:underline">Sign in</a>
        <a
          href="#"
          class="bg-black text-white px-4 py-2 rounded-full font-medium hover:opacity-90"
        >
          Get started
        </a>
      </nav>
    </header>

    <!-- Hero Section -->
    <main class="flex-1 flex">
      <!-- Left: Centered Hero Text -->
      <div class="w-1/2 flex flex-col justify-center pl-16">
        <h1 class="text-[100px] leading-none font-bold mb-8">
          Human<br />
          stories & ideas
        </h1>
        <p class="text-xl mb-8">
          A place to read, write, and deepen your understanding
        </p>
        <a
          href="#"
          @click.prevent="showModal = true"
          class="inline-flex items-center justify-center bg-black text-white rounded-full px-5 py-2 text-sm font-medium hover:opacity-90"
        >
          Start reading
        </a>
      </div>

      <!-- Right: Image touching right edge -->
      <div class="w-1/2 flex justify-end items-end">
        <img
          src="/landing_page.webp"
          alt="Hero Graphic"
          class="h-[85vh] object-contain"
        />
      </div>
    </main>
    <!-- Modal Overlay -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <!-- Modal Box -->
      <div
        class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center"
      >
        <h2 class="text-2xl font-bold mb-6">Join Medium.</h2>

        <!-- Google Login -->
        <button
          class="w-full border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            class="h-5 w-5"
          />
          <span class="text-sm font-medium">Sign up with Google</span>
        </button>

        <!-- Facebook Login -->
        <button
          class="w-full border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center gap-2 mt-4 hover:bg-gray-100"
        >
          <img
            src="https://www.svgrepo.com/show/448224/facebook.svg"
            alt="Facebook"
            class="h-5 w-5"
          />
          <span class="text-sm font-medium">Sign up with Facebook</span>
        </button>

        <!-- Email Login -->
        <button
          class="w-full border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center gap-2 mt-4 hover:bg-gray-100"
        >
          <svg
            class="h-5 w-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M16 12H8m0 0l4-4m-4 4l4 4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-sm font-medium">Sign up with email</span>
        </button>

        <!-- Already have an account? -->
        <p class="text-sm mt-6">
          Already have an account?
          <a href="#" class="text-black underline">Sign in</a>
        </p>

        <!-- Terms of Service Notice -->
        <p class="text-xs text-gray-500 mt-4">
          Click “Sign up” to agree to Medium’s
          <a href="#" class="underline">Terms of Service</a> and acknowledge
          that Medium’s <a href="#" class="underline">Privacy Policy</a> applies
          to you.
        </p>

        <!-- Close Button -->
        <button
          @click="showModal = false"
          class="mt-6 text-sm underline text-gray-600 hover:text-black"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Footer -->
    <footer class="border-t text-sm text-gray-600 py-4 px-6">
      <div class="flex justify-between flex-wrap gap-y-2">
        <span>&copy; 2025 Medium Clone</span>
        <div class="space-x-4">
          <a href="#" class="hover:underline">Help</a>
          <a href="#" class="hover:underline">Status</a>
          <a href="#" class="hover:underline">About</a>
          <a href="#" class="hover:underline">Careers</a>
          <a href="#" class="hover:underline">Press</a>
          <a href="#" class="hover:underline">Blog</a>
          <a href="#" class="hover:underline">Privacy</a>
          <a href="#" class="hover:underline">Rules</a>
          <a href="#" class="hover:underline">Terms</a>
          <a href="#" class="hover:underline">Text to speech</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>
