<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex gap-2 bg-retroPurple p-2 text-white">
    <RouterLink to="/" class="nav-link mr-auto">Crown Vue</RouterLink>
    <RouterLink to="/create/post" class="nav-link">Create Post</RouterLink>
    <RouterLink to="/auth" class="nav-link">Sign In</RouterLink>
  </nav>
</template>

<style scoped>
@tailwind components;

@layer components {
  .nav-link {
    @apply rounded-sm p-2 hover:bg-gray-400 hover:bg-opacity-20;
  }
}
</style>
