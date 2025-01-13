import { create } from "zustand";

export const usePosts = create((set) => ({
    posts: [],
    push: (post) => set((state) => ({ posts: [...state.posts, post] })),
}));