import { ReactNode } from "react";

export interface IUser {
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


  // PROFILE ABOUT ME 

  export interface AboutMeProps {
    profileUsername?: string;
    profileGender: string;
    profileAge?: number;
    profileEmail: string;
    profilePhone: string;
  }


  // PROFILE DETAILS

  export interface ProfileDetailsProps {
    profilePicture?: string;
    profileName: string;
    profileLastName: string;
  }

  // PROFILE ADDRESS

  export interface ProfileAddressProps {
    profileCountry: string;
    profileState?: string;
    profileCity: string;
    profileStreet?: string;
    profileNumber?: number;
  }