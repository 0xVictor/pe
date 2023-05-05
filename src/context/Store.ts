// store.ts
import create, { SetState } from 'zustand';
import { Block, BlockNoteEditor } from '@blocknote/core';

interface GlobalState {
  isAIToolbarOpen: boolean;
  toggleAIToolbar: () => void;
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
  blocks: Block[];
  setBlocks: (newBlocks: Block[]) => void;
}

export const useGlobalState = create<GlobalState>(
  (set: SetState<GlobalState>) => ({
    isAIToolbarOpen: false,
    toggleAIToolbar: () =>
      set(state => ({ isAIToolbarOpen: !state.isAIToolbarOpen })),
    isSideMenuOpen: false,
    toggleSideMenu: () =>
      set(state => ({ isSideMenuOpen: !state.isSideMenuOpen })),
    blocks: [],
    setBlocks: (newBlocks: Block[]) => set(() => ({ blocks: newBlocks })),
  })
);
