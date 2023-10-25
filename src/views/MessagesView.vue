<template>
  <main class="flex h-[92vh] overflow-hidden">
    <ConversationListsVue />
    <ConversationBody />
  </main>
</template>

<script setup lang="ts">
import ConversationBody from "@/components/ConversationBody.vue";
import ConversationListsVue from "@/components/ConversationLists.vue";
</script>

<style scoped>
.conversations-container::-webkit-scrollbar {
  width: 6px;
  border-left: 2px solid hsl(34, 45%, 75%);
}
.conversations-container::-webkit-scrollbar-thumb {
  background-color: hsl(34, 45%, 75%);
}
</style>
