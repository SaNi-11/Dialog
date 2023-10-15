import { useState } from 'react';
import { User } from '../types/User';

function UseDialogModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openModal = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return { selectedUser, isModalOpen, openModal, closeModal };
}

export default UseDialogModal;
