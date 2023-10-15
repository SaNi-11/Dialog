import React, { useState } from 'react';
import useSWR from 'swr';
import { User } from '../types/User';
import UserDetailsDialog from './UserDetailsDialog';
import UseDialogModal from '../hooks/UseDialogModal';

const UserList: React.FC = () => {
  const { selectedUser, openModal, closeModal } = UseDialogModal();
  const [searchText, setSearchText] = useState('');

  const { data: users, error } = useSWR<User[]>('users', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    return data;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <h1 className="flex items-center justify-center my-8">Korisnici</h1>
      <div className="flex items-center justify-center ">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Pretraga po imenu ili email-u"
          className="mb-4 p-2 border rounded-sm border-black focus:rounded-sm "
        />
      </div>
      <div className="flex items-center justify-center">
        {error ? (
          <div>Error loading data</div>
        ) : !users ? (
          <div>Loading data...</div>
        ) : (
          <ul>
            {users
              .filter(
                (user) =>
                  user.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((user) => (
                <li key={user.id} className="my-1">
                  <button
                    onClick={() => openModal(user)}
                    className="underline text-sky-400"
                  >
                    {user.name} {user.username} {user.email}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
      <UserDetailsDialog user={selectedUser} onClose={closeModal} />
    </div>
  );
};

export default UserList;
