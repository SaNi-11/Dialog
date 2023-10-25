import useSWR from 'swr';
import { User } from '../types/User';

function useUserFetch() {
  const { data: users, error } = useSWR<User[]>('users', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: User[] = await response.json();
    return data;
  });

  return { users, error };
}

export default useUserFetch;
