<template>
  <section class="flex w-full flex-col">
    <div
      class="drop-shadow-bottom-only flex items-center justify-between bg-[#eadbc8] p-2"
    >
      <div class="flex items-center gap-2">
        <img
          src="https://picsum.photos/200/300"
          alt="user image"
          class="h-[32px] w-[32px] rounded-full"
        />
        <p>Username</p>
      </div>
      <div class="block sm:hidden">
        <button
          class="flex items-center justify-center rounded-md bg-[hsl(34,45%,50%)] p-2"
          data-cy="back-conversation-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            class="h-6 w-6"
          >
            <path
              d="M20.25 11.25H5.414l4.293-4.293a.75.75 0 10-1.061-1.061l-6 6a.75.75 0 000 1.061l6 6a.75.75 0 101.061-1.061L5.414 12.75H20.25a.75.75 0 000-1.5z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="grow-1 conversation-container flex-1 overflow-y-scroll border-b-2 border-b-[hsl(34,45%,70%)]"
    >
      <!-- Message Container -->
      <MessageItem
        v-for="message in dummyMessages"
        :key="Math.random().toString()"
        :message="message"
      />
      <!-- Message Container -->
    </div>
    <div class="flex p-2">
      <input
        type="text"
        class="w-[80%] rounded-lg bg-[hsl(34,45%,80%)] p-2 placeholder-[hsl(0,0%,40%)] outline-none"
        placeholder="Type a message"
        name="messageInput"
        id="messageInput"
        data-cy="message-input"
      />
      <button
        class="mx-2 flex w-[20%] items-center justify-center rounded-lg bg-[hsl(34,45%,70%)] hover:bg-[hsl(34,45%,60%)]"
        data-cy="send-message-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          class="h-6 w-6"
        >
          <path
            d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
          />
        </svg>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MessageItemType } from "@/types/sample-types";
import MessageItem from "./MessageItem.vue";

const dummyMessages: MessageItemType[] = [
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe ",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: true,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content:
      "Hello qweq weqwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qweqwe qwe qwe qw",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello qweqw eqw eqwe qwe qwe qwe qwe qwe qwe ",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: true,
  },

  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: true,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe ",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: true,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content:
      "Hello qweq weqwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qweqwe qwe qwe qw",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello qweqw eqw eqwe qwe qwe qwe qwe qwe qwe ",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: true,
  },

  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: true,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe ",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: true,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content:
      "Hello qweq weqwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qwe qweqwe qwe qwe qw",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello qweqw eqw eqwe qwe qwe qwe qwe qwe qwe ",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: true,
  },

  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: false,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: true,
    isFirstMessage: true,
  },
  {
    userImg: "https://picsum.photos/200/300",
    content: "Hello",
    created_at: "2021-10-10T12:00:00.000Z",
    isMessageOwner: false,
    isFirstMessage: false,
  },
];
</script>

<style scoped>
.conversation-container::-webkit-scrollbar {
  width: 6px;
}
.conversation-container::-webkit-scrollbar-thumb {
  background-color: hsl(34, 45%, 55%);
}

.conversation-container::-webkit-scrollbar-track {
  background-color: hsla(34, 45%, 80%, 0.555);
}

.drop-shadow-bottom-only {
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
