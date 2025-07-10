<template>
  <div
    class="bg-[#fefaf1] text-[#242424] min-h-screen flex flex-col font-serif"
  >
    <AppHeader
      @openSignupModal="showSignup = true"
      @openSigninModal="showSignin = true"
    />

    <!-- Dynamic Page Content -->
    <div class="flex-1">
      <router-view />
    </div>

    <SignupModal v-if="showSignup" @close="showSignup = false" />
    <SigninModal v-if="showSignin" @close="showSignin = false" />

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import SignupModal from "./components/SignupModal.vue";
import SigninModal from "./components/SigninModal.vue";

const showSignup = ref(false);
const showSignin = ref(false);
</script>
