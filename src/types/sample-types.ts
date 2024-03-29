export type PostType = {
  post_id: string;
  author_id: string;
  post_title: string;
  post_description: string;
  post_image: string;
  created_at: string;
};

export type MessageItemType = {
  userImg: string;
  content: string;
  created_at: string;
  isMessageOwner: boolean;
  isFirstMessage: boolean;
};
