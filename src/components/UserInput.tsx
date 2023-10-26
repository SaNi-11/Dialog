import React from 'react';
import useUserStore from '../store/useUserStore';

function UserInput() {
  const { setSearchTimer, setSearchText, searchTimer } = useUserStore();

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
    </div>
  );
}

export default UserInput;
