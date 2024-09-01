import { create } from "zustand";

interface File {
  name: string;
  size: number;
  type: string;
  content: string;
  text: string;
  wordCount: number;
  category: string;
  title: string;
  subject: string;
}

interface UploadStore {
  files: File[];
  setFiles: (files: File[]) => void;
  addFile: (file: File) => void;
}

export const useUploadStore = create<UploadStore>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
  addFile: (file) =>
    set((state) => ({
      files: [...state.files, file],
    })),
}));
