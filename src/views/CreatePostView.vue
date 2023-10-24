<template>
  <main class="pt-[5vh]">
    <h1 class="pb-6 text-center text-lg font-semibold">Create Post</h1>
    <form
      v-on:submit="submitPost"
      class="flex flex-col items-center justify-center"
    >
      <div
        class="flex w-full max-w-[500px] flex-col items-center justify-center gap-1 rounded-sm border-b-2 border-t-2 border-retroPurple p-6"
      >
        <label for="postTitle" class="w-full">Post Title</label>
        <input
          v-model="postTitle"
          type="text"
          id="postTitle"
          class="mb-4 w-full rounded-sm bg-retroCream p-2"
        />
        <label for="postDescription" class="w-full">Post Description</label>
        <textarea
          v-model="postDescription"
          type="text"
          id="postDescription"
          class="mb-6 w-full rounded-sm bg-retroCream p-4"
        ></textarea>
        <button
          type="button"
          class="mt-4 w-full flex-auto rounded-sm border-2 border-green-900 p-2 font-bold text-green-900 hover:bg-green-700 hover:text-white"
          @click="handleImageUpload"
        >
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          hidden
          ref="imageInputRef"
          id="imageInput"
        />

        <button
          type="submit"
          class="w-full flex-auto rounded-md bg-retroPurplePink p-4 text-white"
        >
          Create Post
        </button>
        <p class="text-red-500">{{ err }}</p>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const postTitle = ref("");
const postDescription = ref("");
const err = ref("");

// get the image file from the input
const imageInputRef = ref<HTMLInputElement | null>(null);
onMounted(() => {
  imageInputRef.value = document.querySelector("#imageInput");
});

const handleImageUpload = () => imageInputRef.value?.click();

const submitPost = async (e: Event) => {
  err.value = "";
  e.preventDefault();

  const image = imageInputRef?.value?.files;
  if (image?.length !== 1) {
    err.value = "Please upload an image";
    return;
  }

  // handle post
};
</script>
