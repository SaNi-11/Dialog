import create from 'zustand';
import { User } from '../types/User';

type UserStore = {
  selectedUser: User | null;
  isModalOpen: boolean;
  openModal: (user: User) => void;
  closeModal: () => void;
};

const useUserStore = create<UserStore>((set) => ({
  selectedUser: null,
  isModalOpen: false,
  openModal: (user) => set({ selectedUser: user, isModalOpen: true }),
  closeModal: () => set({ selectedUser: null, isModalOpen: false }),
}));

export default useUserStore;
