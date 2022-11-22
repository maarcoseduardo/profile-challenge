import { UsersList } from "../components/usersList";


export function Home() {
  return (
    <div className="max-w-4xl w-full mx-auto p-4 overflow-auto rounded-lg shadow mt-4">
      <UsersList />
    </div>
  )
}