import UserDetailsDialog from './UserDetailsDialog';
import useUserStore from '../store/useUserStore';
import UserSearch from './UserSearch';

const UserList: React.FC = () => {
  const { selectedUser, closeModal } = useUserStore();

  return (
    <div>
      <h1 className="flex items-center justify-center my-8">Korisnici</h1>
      <UserSearch />
      <UserDetailsDialog user={selectedUser} onClose={closeModal} />
    </div>
  );
};

export default UserList;
