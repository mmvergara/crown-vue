<template>
  <main class="flex h-[94.2vh]">
    <section
      class="conversations-container hidden min-w-[300px] overflow-y-scroll border-r-2 border-[hsl(34,45%,75%)] sm:block"
    >
      <article class="flex p-2">
        <input
          class="mx-auto w-full rounded-lg bg-[hsl(34,45%,80%)] p-2 placeholder-[hsl(0,0%,40%)] outline-none"
          placeholder="Search Conversations"
        />
      </article>
      <article
        class="m-2 flex cursor-pointer items-center gap-4 rounded-lg p-2 hover:bg-[hsl(34,45%,80%)]"
      >
        <!-- image with placeholder -->
        <img
          src="https://picsum.photos/200/300"
          alt="user image"
          class="h-[48px] w-[48px] rounded-full"
        />
        <p>Username</p>
      </article>
    </section>
    <section>Conversation Body</section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.conversations-container::-webkit-scrollbar {
  width: 6px;
  border-left: 2px solid hsl(34, 45%, 75%);
}
.conversations-container::-webkit-scrollbar-thumb {
  background-color: hsl(34, 45%, 75%);
}
</style>
