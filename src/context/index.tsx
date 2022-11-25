import { createContext, useState, useContext, useEffect } from 'react'
import { api } from '../services/api';
import { defaultUserListContextValues, IUser, UserListProviderProps } from '../utils/types';

export const UsersContext = createContext(defaultUserListContextValues)

export function UserListProvider({ children }: UserListProviderProps) {
  const [usersList, setUsersList] = useState<IUser[]>([])

  async function getUsers() {
    const response = await api.get("/?results=100");
    const responseData = await response.data.results;
    setUsersList(responseData);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        usersList,
        setUsersList,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext)

  const { usersList, setUsersList } = context

  return { usersList, setUsersList }
}