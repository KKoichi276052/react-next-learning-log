const paths = {
  home() {
    return '/';
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
  // topicNew() { return '/topics/new' },
  // topicEdit(topicSlug: string) { return `/topics/${topicSlug}/edit` },
  // topicDelete(topicSlug: string) { return `/topics/${topicSlug}/delete` },
  // signIn() { return '/auth/signin' },
  // signOut() { return '/auth/signout' },
};

export default paths;
