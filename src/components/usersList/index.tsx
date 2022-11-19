import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  phone: string;
  email: string;
  location: {
    city: string;
    country: string;
  }
}

export function UsersList() {
  const [data, setData] = useState<IUser[]>([]);

  async function getUsers() {
    const response = await api.get("/?results=100");
    const responseData = await response.data.results;
    setData(responseData);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="max-w-6xl w-full h-full mx-auto bg-gray-900 text-white">
        <h1>Usuários</h1>
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>City</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((users) => (
              <tr key={users.email}>
                <td>
                  <img src={users.picture.thumbnail} />
                </td>
                <td>
                  {users.name.first}
                  {users.name.last}
                </td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
                <td>{users.location.city}</td>
                <td>{users.location.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
