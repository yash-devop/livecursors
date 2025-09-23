import { TCursorConfigStore } from "@/types/types";
import { generateRandomColor } from "@/utils/utils";
import { create } from "zustand";

export const useCursorConfigStore = create<TCursorConfigStore>((set) => {
  return {
    color: generateRandomColor(),
    name: "Guest",
    setColor: (color) => {
      set(() => {
        return {
          color,
        };
      });
    },
    setName: (name) => {
      set(() => {
        return {
          name,
        };
      });
    },
  };
});
