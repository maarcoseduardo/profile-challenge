import { ProfileDetails } from "../components/profileDetails";

export function Profile() {

  return (
    <>
      <div className="max-w-6xl p-4 mx-auto flex justify-between">
        <ProfileDetails />
      </div>
    </>
  )
}