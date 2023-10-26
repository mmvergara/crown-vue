<template>
  <section class="hidden min-w-[300px] border-[hsl(34,45%,75%)] sm:block">
    <article
      class="drop-shadow-bottom-only flex h-[48px] items-center justify-between border-r-[2px] border-[#d5b790] bg-[#eadbc8]"
    >
      <input
        class="mx-auto w-[95%] rounded-sm bg-[hsl(34,45%,75%)] p-2 placeholder-[hsl(0,0%,40%)] outline-none"
        type="text"
        data-cy="search-conversations-input"
        name="search-conversations-input"
        id="search-conversations-input"
        placeholder="Search Conversations"
      />
    </article>
    <div class="conversations-container h-[100%] overflow-y-scroll">
      <article
        class="m-2 flex cursor-pointer items-center gap-4 rounded-lg p-2 hover:bg-[hsl(34,45%,80%)]"
        v-for="index in 20"
        :key="index"
      >
        <img
          src="https://picsum.photos/200/300"
          alt="user image"
          class="h-[48px] w-[48px] rounded-full"
        />
        <p>Username</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style>
.conversations-container::-webkit-scrollbar {
  width: 2px;
}
.conversations-container::-webkit-scrollbar-thumb {
  background-color: hsl(34, 45%, 55%);
}

.conversations-container::-webkit-scrollbar-track {
  background-color: #d5b790;
}
.drop-shadow-bottom-only {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
