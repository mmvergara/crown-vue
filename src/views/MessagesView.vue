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

</style>
