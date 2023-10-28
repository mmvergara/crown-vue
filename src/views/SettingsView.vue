<template>
  <main
    class="mx-auto mt-[4vh] min-h-[70vh] w-full max-w-[950px] rounded-md border-t-4 border-[#451952] bg-[#dac0a3] p-4 drop-shadow-md"
  >
    <h2 class="text-2xl font-bold">Settings</h2>
    <div class="divider"></div>
    <section class="mt-6 flex flex-wrap justify-center gap-2">
      <article class="setting">Change Password</article>
      <article class="setting">Change Username</article>
      <article class="setting">Delete Account</article>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style>
.setting {
  background-color: hsl(32, 43%, 70%);
  font-weight: bold;
  padding: 1rem;
  width: 100%;
  max-width: 300px;
  height: 100%;
  min-height: 100px;
  border-radius: 12px;
  cursor: pointer;
}

.setting:hover {
  background-color: hsl(32, 43%, 60%);
}

.divider {
  width: 100%;
  height: 1px;
  background-color: hsl(32, 43%, 60%);
  margin: 1rem 0;
}
</style>
