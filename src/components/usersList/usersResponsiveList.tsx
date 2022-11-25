import { Link } from "react-router-dom"
import { UsersResponsiveListProps } from "../../utils/types"

export function UsersResponsiveList({ currentItems }: UsersResponsiveListProps) {
  return (
    <>
      <section>
        <div className="px-5 my-4 md:hidden">
          <h1 className="font-bold">Users list</h1>
        </div>
        {currentItems.map((users) => (
          <div key={users.login?.uuid}
            className="grid grid-cols-1 gap-4 px-4 md:hidden">
            <div className="my-2 p-4 rounded-lg shadow-lg">
              <div className="flex flex-wrap items-center space-x-2 text-sm">
                <div>
                  <Link to={`/profile/${users.name.first}${users.name.last}`}>
                    <img
                      className="max-w-[50px] max-h-[50px] rounded-md"
                      src={users.picture.thumbnail}
                      alt={users.name.first}
                    />
                  </Link>
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
      </section>
    </>
  )
}