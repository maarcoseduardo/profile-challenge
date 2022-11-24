import { ProfileDetails } from "../components/profileDetails";

export function Profile() {

  return (
    <>
      <div className="max-w-6xl p-4 flex flex-col mx-auto xl:flex-row justify-between gap-10">
        <ProfileDetails />
      </div>
    </>
  )
}