<script setup lang="ts">
import PostItem from "@/components/PostItem.vue";
import { ref } from "vue";
import type { PostType } from "@/types/post-types";

const dummyPosts: PostType[] = [
  {
    post_title: "My first post",
    post_description: "This is my first post",
    author_id: "1",
    post_id: "1",
    created_at: "2021-10-10T12:00:00.000Z",
  },
  {
    post_title: "My second post",
    post_description: "This is my second post",
    author_id: "1",
    post_id: "2",
    created_at: "2021-10-10T12:00:00.000Z",
  },
  {
    post_title: "My third post",
    post_description: "This is my third post",
    author_id: "1",
    post_id: "3",
    created_at: "2021-10-10T12:00:00.000Z",
  },
  {
    post_title: "My fourth post",
    post_description: "This is my fourth post",
    author_id: "1",
    post_id: "4",
    created_at: "2021-10-10T12:00:00.000Z",
  },
  {
    post_title: "My fifth post",
    post_description: "This is my fifth post",
    author_id: "1",
    post_id: "5",
    created_at: "2021-10-10T12:00:00.000Z",
  },
];

const posts = ref<PostType[] | null>(dummyPosts);
</script>

<template>
  <main>
    <h1 class="text-center py-8 text-[50px]">Crown Vue</h1>
    <section class="flex justify-center items-center flex-col gap-4">
      <PostItem v-for="post in posts" :post="post" :key="post.created_at" />
    </section>
  </main>
</template>
