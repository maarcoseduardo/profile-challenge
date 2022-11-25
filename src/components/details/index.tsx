import { useUsers } from "../../context"
import { useParams } from "react-router-dom";
import { ProfileDetails } from "./profileDetails";
import { ProfileAboutMe } from "./profileAboutMe";
import { ProfileAddress } from "./profileAddress";

export function Details() {
  const { usersList } = useUsers();
  const { name } = useParams();
  const filteredUser = usersList.filter((userProfile) => (userProfile.name.first + userProfile.name.last === name))

  return (
    <>
      {filteredUser.map((userProfile) => (
        <div
          key={userProfile.login?.uuid}
          className="max-w-6xl p-4 flex flex-col items-center mx-auto xl:flex-row justify-between gap-10"
        >
          <ProfileDetails
            profilePicture={userProfile.picture.large}
            profileName={userProfile.name.first}
            profileLastName={userProfile.name.last}
          />
          <ProfileAboutMe
            profileUsername={userProfile.login?.username}
            profileGender={userProfile.gender}
            profileAge={userProfile.dob?.age}
            profileEmail={userProfile.email}
            profilePhone={userProfile.phone}
          />
          <ProfileAddress
            profileCountry={userProfile.location.country}
            profileCity={userProfile.location.city}
            profileState={userProfile.location.state}
            profileStreet={userProfile.location.street?.name}
            profileNumber={userProfile.location.street?.number}
          />
        </div>
      ))}
    </>
  )
}