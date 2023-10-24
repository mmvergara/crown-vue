<script setup lang="ts">
import PostItem from "@/components/PostItem.vue";
import { ref } from "vue";
import type { PostType } from "@/types/post-types";

const dummyPosts: PostType[] = [
  {
    author_id: "1",
    post_id: "1",
    post_title: "My first post",
    post_description: "This is my first post",
    post_image: "https://picsum.photos/200/300",
    created_at: "2021-10-10T12:00:00.000Z",
  },
  {
    author_id: "2",
    post_id: "2",
    post_title: "My second post",
    post_description: "This is my second post",
    post_image: "https://picsum.photos/200/300",
    created_at: "2021-10-10T12:00:00.000Z",
  },
  {
    author_id: "3",
    post_id: "3",
    post_title: "My third post",
    post_description: "This is my third post",
    post_image: "https://picsum.photos/200/300",
    created_at: "2021-10-10T12:00:00.000Z",
  },
];

const posts = ref<PostType[] | null>(dummyPosts);
</script>

<template>
  <main>
    <h1 class="py-8 text-center text-[50px]">Crown Vue</h1>
    <section class="flex flex-col items-center justify-center gap-4">
      <PostItem v-for="post in posts" :post="post" :key="post.created_at" />
    </section>
  </main>
</template>
