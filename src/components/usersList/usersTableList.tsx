import { Link } from "react-router-dom";

interface UsersTableListProps {
  userUuid: string;
  userFirstName: string;
  userLastName: string;
  userThumbnail: string;
  userEmail: string;
  userPhone: string;
  userCity: string;
  userCountry: string;
}

export function UsersTableList({ userUuid, userFirstName, userLastName, userThumbnail, userEmail, userPhone, userCity, userCountry }: UsersTableListProps) {
  return (
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
        <tr key={userUuid}>
          <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
            <Link to={`/profile/${userFirstName}${userLastName}`}>
              <img className="rounded-md"
                src={userThumbnail} />
            </Link>
          </td>
          <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
            <div className="flex gap-1">
              <span>{userFirstName}</span>
              <span>{userLastName}</span>
            </div>
          </td>
          <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
            {userEmail}
          </td>
          <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
            {userPhone}
          </td>
          <td className="p-2 text-sm text-gray-700 ">
            {userCity}
          </td>
          <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
            {userCountry}
          </td>
          <td className="p-2 text-sm text-gray-700 whitespace-nowrap">
            <Link
              to={`/profile/${userFirstName}${userLastName}`}
              className="p-2 rounded-lg bg-yellow-400"
            >
              Go to perfil
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  )
}