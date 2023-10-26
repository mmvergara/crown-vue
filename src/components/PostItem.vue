<template>
  <section
    class="w-full max-w-[500px] rounded-md border-t-2 border-[purple] bg-white p-4 drop-shadow-md"
  >
    <h2 class="text-lg font-semibold">
      {{ post.post_title }}
    </h2>
    <p>{{ post.post_description }}</p>
    <img
      v-bind:src="post.post_image"
      alt="post image"
      class="max-h-[200px] w-full max-w-[300px] object-cover"
      width="300"
      height="200"
    />
    <div class="mx-auto my-4 w-[99%] border-b-[1px]"></div>
    <div class="flex items-center justify-between">
      <span class="text-xs opacity-50">{{ time }}</span>
      <button
        class="rounded-sm border-2 bg-white p-2 text-sm hover:bg-slate-300"
        @click="handleDelete"
      >
        ❌
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { timeElapsedSince } from "@/utilities/helpers";
import type { PostType } from "../types/sample-types";
const { post } = defineProps<{
  post: PostType;
}>();

const handleDelete = () => {
  console.log(`delete post ${post.post_title}`);
};

const time = timeElapsedSince(post.created_at);
</script>
../types/sample-types
