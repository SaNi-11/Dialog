import UserRow from './UserRow';
import useUserFetch from '../hooks/useUserFetch';
import useUserStore from '../store/useUserStore';

function UserSearch() {
  const { users, error } = useUserFetch();
  const { searchText } = useUserStore();

  return (
    <div className="flex items-center justify-center flex-col">
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
