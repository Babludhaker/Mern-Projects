import { create } from "zustand";

export const usePostStore = create((set) => ({
  loading: false,
  error: null,
  posts: [],

  fetchPost: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      set({ posts: data, loading: false, error: null });
    } catch (err) {
      set({ error: err });
    }
  },
}));
