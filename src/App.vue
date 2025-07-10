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
// No JS needed
</script>
