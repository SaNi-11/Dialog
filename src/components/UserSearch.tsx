import React, { useState } from 'react';
import UserRow from './UserRow';
import useUserFetch from '../hooks/useUserFetch';

function UserSearch() {
  const [searchText, setSearchText] = useState('');
  const [searchTimer, setSearchTimer] = useState<number | null>(null);
  const { users, error } = useUserFetch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;

    if (searchTimer) {
      clearTimeout(searchTimer);
    }

    setSearchTimer(setTimeout(() => setSearchText(inputText), 300));
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Pretraga po imenu ili email-u"
        className="mb-4 p-2 border rounded-sm border-black focus:rounded-sm"
      />

      {error ? (
        <div>Greška pri učitavanju podataka</div>
      ) : !users ? (
        <div>Učitavanje podataka...</div>
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
  );
}

export default UserSearch;
