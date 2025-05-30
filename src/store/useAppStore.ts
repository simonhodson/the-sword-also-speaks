import { create } from 'zustand';

type AppStore = {
  showHeaderBar: boolean;
  shouldShowHeaderBar: (show: boolean) => void;
};

export const useAppStore = create<AppStore>((set) => ({
  showHeaderBar: true,

  shouldShowHeaderBar: (show: boolean) => {
    set(() => ({ showHeaderBar: show }));
  },
}));
