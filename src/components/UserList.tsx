import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { User } from '../types/User';
import UserDetailsDialog from './UserDetailsDialog';
import UserRow from './UserRow';
import useUserStore from '../store/useUserStore';

const UserList: React.FC = () => {
  const { selectedUser, closeModal } = useUserStore();
  const [searchText, setSearchText] = useState('');
  const [searchTimer, setSearchTimer] = useState<number | null>(null);

  const { data: users, error } = useSWR<User[]>('users', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    return data;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    setSearchTimer(setTimeout(() => setSearchText(inputText), 300));
  };

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

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
          <div>Greška pri učitavanju podataka</div>
        ) : !users ? (
          <div>Učitavanj podataka...</div>
        ) : (
          <ul>
            {users
              .filter(
                (user) =>
                  user.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  user.email.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
          </ul>
        )}
      </div>
      <UserDetailsDialog user={selectedUser} onClose={closeModal} />
    </div>
  );
};

export default UserList;
