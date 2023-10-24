<template>
  <main class="pt-[5vh]">
    <h1 class="text-lg font-semibold text-center pb-6">Create Post</h1>
    <form
      v-on:submit="submitPost"
      class="flex flex-col justify-center items-center"
    >
      <div
        class="flex flex-col justify-center items-center gap-1 border-t-2 border-b-2 p-6 border-retroPurple rounded-sm w-full max-w-[500px]"
      >
        <label for="postTitle" class="w-full">Post Title</label>
        <input
          v-model="postTitle"
          type="text"
          id="postTitle"
          class="bg-retroCream p-2 rounded-sm w-full mb-4"
        />
        <label for="postDescription" class="w-full">Post Description</label>
        <textarea
          v-model="postDescription"
          type="text"
          id="postDescription"
          class="bg-retroCream p-4 rounded-sm w-full mb-6"
        ></textarea>
        <button
          type="button"
          class="border-2 border-green-900 text-green-900 font-bold p-2 mt-4 rounded-sm flex-auto w-full hover:bg-green-700 hover:text-white"
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
          class="bg-retroPurplePink p-4 text-white flex-auto w-full rounded-md"
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
