<template>
  <main class="pt-[5vh]">
    <h1 v-if="isSignup" class="pb-6 text-center text-lg font-semibold">
      Sign up | Golang Gala
    </h1>
    <h1 v-else class="pb-6 text-center text-lg font-semibold">
      Sign in | Golang Gala
    </h1>
    <form
      v-on:submit="authSubmit"
      class="flex flex-col items-center justify-center"
    >
      <div
        class="flex w-full max-w-[500px] flex-col items-center justify-center gap-1 rounded-sm border-b-2 border-t-2 border-retroPurple p-6"
      >
        <label for="authUsername" class="w-full">Username</label>
        <input
          v-model="username"
          type="text"
          id="authUsername"
          class="w-full rounded-sm bg-retroCream p-2"
        />
        <label for="authPassword" class="w-full">Password</label>
        <input
          v-model="password"
          type="password"
          id="authPassword"
          class="mb-4 w-full rounded-sm bg-retroCream p-2"
        />

        <button
          v-if="isSignup"
          type="submit"
          class="w-full flex-auto rounded-sm bg-retroPurplePink p-4 text-white"
        >
          Sign up
        </button>
        <button
          v-else
          type="submit"
          class="w-full flex-auto rounded-sm bg-retroPurplePink p-4 text-white"
        >
          Sign in
        </button>
        <button
          type="button"
          @click="handleGoogleAuth"
          class="mt-4 w-full flex-auto rounded-sm border-2 border-green-900 p-2 font-bold text-green-900 hover:bg-green-700 hover:text-white"
        >
          Sign in with Google
        </button>
      </div>
    </form>
    <button
      v-if="isSignup"
      @click="isSignup = !isSignup"
      class="w-full pt-4 text-center underline underline-offset-4"
    >
      I already have an account
    </button>
    <button
      v-else
      @click="isSignup = !isSignup"
      class="w-full pt-4 text-center underline underline-offset-4"
    >
      Create New Account
    </button>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

const isSignup = ref(false);

const authSubmit = (e: Event) => {
  e.preventDefault();
  if (isSignup.value) {
    console.log("signup");
  } else {
    console.log("signin");
  }
};

const handleGoogleAuth = () => {
  console.log("google auth");
};
</script>
