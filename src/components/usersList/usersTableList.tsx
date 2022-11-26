import { Link } from "react-router-dom";
import { UsersTableListProps } from "../../utils/types";

export function UsersTableList({ currentItems }: UsersTableListProps) {
  return (
    <>
      <section className="max-w-6xl w-full mx-auto mt-4 px-4 overflow-auto rounded-lg shadow hidden md:block" aria-label="users-table-list">
        <table className="w-full hidden md:table">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Picture
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                E-mail
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Phone
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                City
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                Country
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left">
                See more
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentItems.map((users) => (
              <tr key={users.login?.uuid}>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  <Link to={`/profile/${users.name.first}${users.name.last}`}>
                    <img className="rounded-md"
                      src={users.picture.thumbnail} />
                  </Link>
                </td>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex gap-1">
                    <span>{users.name.first}</span>
                    <span>{users.name.last}</span>
                  </div>
                </td>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {users.email}
                </td>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {users.phone}
                </td>
                <td className="p-2 text-sm text-gray-700 ">
                  {users.location.city}
                </td>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  {users.location.country}
                </td>
                <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
                  <Link
                    to={`/profile/${users.name.first}${users.name.last}`}
                    className="p-2 rounded-lg bg-yellow-400"
                  >
                    Go to perfil
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}