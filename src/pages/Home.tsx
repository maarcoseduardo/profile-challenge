import { UsersList } from "../components/usersList";

export function Home() {
  return (
    <div className="max-w-4xl p-4 overflow-auto rounded-lg shadow mt-4 mx-auto">
      <UsersList />
    </div>
  )
}