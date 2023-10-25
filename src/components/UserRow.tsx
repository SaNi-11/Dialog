import useUserStore from '../store/useUserStore';
import { User } from '../types/User';

type UserRowProp = { user: User };

function UserRow({ user }: UserRowProp) {
  const { openModal } = useUserStore();
  return (
    <div>
      <button
        onClick={() => openModal(user)}
        className="underline text-sky-400"
      >
        {user.name} {user.username}
      </button>
      <p>{user.email}</p>
    </div>
  );
}

export default UserRow;
