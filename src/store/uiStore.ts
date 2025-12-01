import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UIState {
  // State
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  modals: {
    [key: string]: boolean;
  };
  
  // Actions
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set) => ({
      // Initial state
      isSidebarOpen: false,
      theme: 'light',
      modals: {},

      // Toggle sidebar
      toggleSidebar: () => {
        set(state => ({ isSidebarOpen: !state.isSidebarOpen }));
      },

      // Set theme
      setTheme: (theme) => {
        set({ theme });
        document.documentElement.classList.toggle('dark', theme === 'dark');
      },

      // Modal management
      openModal: (modalId: string) => {
        set(state => ({
          modals: { ...state.modals, [modalId]: true }
        }));
      },

      closeModal: (modalId: string) => {
        set(state => ({
          modals: { ...state.modals, [modalId]: false }
        }));
      },
    }),
    {
      name: 'ui-store',
    }
  )
);