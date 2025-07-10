<template>
  <main class="flex">
    <div class="w-1/2 flex flex-col justify-center pl-16">
      <h1 class="text-[100px] leading-none font-bold mb-8">
        Human<br />
        stories & ideas
      </h1>
      <p class="text-xl mb-8">
        A place to read, write, and deepen your understanding
      </p>
      <button
        @click="$emit('openSignupModal')"
        class="inline-flex items-center justify-center bg-black text-white rounded-full px-5 py-2 text-sm font-medium hover:opacity-90"
      >
        Start reading
      </button>
    </div>

    <div class="w-1/2 flex justify-end items-end">
      <img
        src="/landing_page.webp"
        alt="Hero"
        class="h-[85vh] object-contain"
      />
    </div>
  </main>
</template>
