<template>
  <article
    class="mx-4 flex items-center gap-2 my-2"
    :class="{
      'ml-4': !message.isFirstMessage && !message.isMessageOwner,
      'justify-end': message.isMessageOwner,
    }"
  >
    <img
      v-if="message.isFirstMessage && !message.isMessageOwner"
      v-bind:src="message.userImg"
      alt="user image"
      class="h-[32px] w-[32px] rounded-full"
    />
    <div>
      <p
        class="rounded-lg bg-[#d5b790] p-2"
        :class="
          !message.isFirstMessage && !message.isMessageOwner ? 'ml-10' : ''
        "
      >
        {{ message.content }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { MessageItemType } from "@/types/sample-types";

defineProps<{
  message: MessageItemType;
}>();
</script>
