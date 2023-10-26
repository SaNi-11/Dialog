import UserDetailsDialog from './UserDetailsDialog';
import UserSearch from './UserSearch';
import UserInput from './UserInput';

const UserList: React.FC = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center my-8">Korisnici</h1>
      <UserInput />
      <UserSearch />
      <UserDetailsDialog />
    </div>
  );
};

export default UserList;
