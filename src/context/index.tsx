import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { api } from '../services/api';

interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
    large?: string;
  };
  phone: string;
  email: string;
  login?: {
    uuid: string;
    username: string;
  }
  dob?: {
    age: number;
  }
  gender: string;
  location: {
    street?: {
      name: string;
      number: number;
    },
    city: string;
    state?: string;
    country: string;

  };
}

export type UsersListPropsTyped = {
  usersList: IUser[]
}

export interface UserListProviderProps {
  children: ReactNode
}

interface IDefaultUsersListContextValues {
  usersList: IUser[]
  setUsersList: React.Dispatch<React.SetStateAction<IUser[]>>
}

export const defaultUserListContextValues: IDefaultUsersListContextValues = {
  usersList: [],
  setUsersList: () => [],
}

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