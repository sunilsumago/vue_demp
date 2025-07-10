<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
      <h2 class="text-2xl font-bold mb-6">Sign in to Medium</h2>

      <!-- Google Login -->
      <button
        class="w-full border border-gray-300 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          class="h-5 w-5"
        />
        <span class="text-sm font-medium">Sign in with Google</span>
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
        <span class="text-sm font-medium">Sign in with Facebook</span>
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
        <span class="text-sm font-medium">Sign in with email</span>
      </button>

      <p class="text-sm mt-6">
        Don’t have an account?
        <a href="#" class="text-black underline">Sign up</a>
      </p>

      <p class="text-xs text-gray-500 mt-4">
        Click “Sign in” to agree to Medium’s
        <a href="#" class="underline">Terms of Service</a> and acknowledge that
        Medium’s <a href="#" class="underline">Privacy Policy</a> applies to
        you.
      </p>

      <button
        @click="$emit('close')"
        class="mt-6 text-sm underline text-gray-600 hover:text-black"
      >
        Close
      </button>
    </div>
  </div>
</template>
