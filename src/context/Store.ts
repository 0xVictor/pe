// store.ts
import create, { SetState } from 'zustand';

interface GlobalState {
  isAIToolbarOpen: boolean;
  toggleAIToolbar: () => void;
}

export const useGlobalState = create<GlobalState>((set: SetState<GlobalState>) => ({
  isAIToolbarOpen: false,
  toggleAIToolbar: () => set((state) => ({ isAIToolbarOpen: !state.isAIToolbarOpen })),
}));
