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
  };
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
      <section>
        <div className="max-w-4xl p-4 overflow-auto rounded-lg shadow mt-4 mx-auto">
          <div className="my-4">
            <h1 className="font-bold">Users list</h1>
          </div>
          <table className="w-full hidden md:block">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Picture
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  E-mail
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Phone
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  City
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Country
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((users) => (
                <tr key={users.email}>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img src={users.picture.thumbnail} />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {users.name.first}
                    {users.name.last}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {users.email}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {users.phone}
                  </td>
                  <td className="p-3 text-sm text-gray-700 ">
                    {users.location.city}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {users.location.country}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {data.map((users) => (
            <div className="grid grid-cols-1 gap-4 md:hidden">
              <div className="bg-gray-600 my-2 p-4 rounded-lg shadow">
                <div className="flex flex-wrap items-center space-x-2 text-sm">
                  <div>
                    <a>
                      <img
                        className="max-w-[50px] max-h-[50px]"
                        src={users.picture.thumbnail}
                        alt={users.name.first}
                      />
                    </a>
                  </div>
                  <div className="font-semibold">
                    <span className="mr-1">{users.name.first}</span>
                    <span>{users.name.last}</span>
                  </div>
                  <div className="my-2">{users.email}</div>
                  <div className="font-semibold">{users.phone}</div>
                  <div className="my-2">{users.location.city}</div>
                  <div className="font-semibold">{users.location.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
