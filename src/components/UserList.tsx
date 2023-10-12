import React, { useState, useEffect } from 'react';
import { User } from '../types/User';
import UserDetailsDialog from './UserDetailsDialog';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openDialog = (user: User) => {
    setSelectedUser(user);
  };

  const closeDialog = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Greška pri učitavanju korisnika', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="flex items-center justify-center my-8">Korisnici</h1>
      <div className="flex items-center justify-center">
        <ul>
          {users.map((user) => (
            <li key={user.id} className="my-1">
              <button
                onClick={() => openDialog(user)}
                className="underline text-sky-400"
              >
                {user.name} {user.username}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* <span>Should dialog be open: {selectedUser ? 'yes' : 'no'}</span> */}
      <UserDetailsDialog user={selectedUser} onClose={closeDialog} />
    </div>
  );
};

export default UserList;
