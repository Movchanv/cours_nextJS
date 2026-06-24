import { create } from "zustand";

type PinState = {
  pins: string[];
  togglePin: (id: string) => void;
};

export const usePinStore = create<PinState>((set, get) => ({
  pins: [],

  togglePin: (id) => {
    const exists = get().pins.includes(id);

    if (exists) {
      set({ pins: get().pins.filter((p) => p !== id) });
    } else {
      set({ pins: [...get().pins, id] });
    }
  },
}));