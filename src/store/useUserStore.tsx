import create from 'zustand';
import { User } from '../types/User';

type UserStore = {
  selectedUser: User | null;
  isModalOpen: boolean;
  searchText: string;
  searchTimer: number | null;
  openModal: (user: User) => void;
  closeModal: () => void;
  setSearchText: (text: string) => void;
  setSearchTimer: (timer: number | null) => void;
};

const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  isModalOpen: false,
  searchText: '',
  searchTimer: null,
  openModal: (user) => set({ selectedUser: user, isModalOpen: true }),
  closeModal: () => set({ selectedUser: null, isModalOpen: false }),
  setSearchText: (text) => set({ searchText: text }),
  setSearchTimer: (timer) => set({ searchTimer: timer }),
}));

export default useUserStore;
