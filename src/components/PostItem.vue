<template>
  <section
    class="bg-white p-4 border-[purple] border-t-2 drop-shadow-md rounded-md w-full max-w-[500px]"
  >
    <h2 class="font-semibold text-lg">
      {{ post.post_title }}
    </h2>
    <p>{{ post.post_description }}</p>
    <div class="w-[99%] border-b-[1px] mx-auto my-4"></div>
    <div class="flex justify-between items-center">
      <span class="opacity-50 text-xs">{{ time }}</span>
      <button
        class="bg-white border-2 hover:bg-slate-300 text-sm p-2 rounded-sm"
        @click="handleDelete"
      >
        ❌
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { timeElapsedSince } from "@/utilities/helpers";
import type { PostType } from "../types/post-types";
const { post } = defineProps<{
  post: PostType;
}>();

const handleDelete = () => {
  console.log(`delete post ${post.post_title}`);
};

const time = timeElapsedSince(post.created_at);
</script>
