import { BsInstagram, BsTwitter, MdVerified, RiFacebookFill } from "react-icons/all";
import { ProfileDetailsProps } from "../../utils/types";

export function ProfileDetails({ profilePicture, profileName, profileLastName }: ProfileDetailsProps) {
  return (
    <section className="max-w-[300px] w-full rounded-lg shadow">
      <div>
        <img className="max-w-[300px] mx-auto p-4 w-full rounded-full"
          src={profilePicture} alt={profileName} />
      </div>
      <div className="w-full flex flex-col items-center gap-2 mt-4">
        <h1 className="font-bold">{profileName} {profileLastName}</h1>
        <div className="flex items-center gap-2">
          <span className="text-green-600">Verified</span>
          <span>
            <MdVerified color="green" />
          </span>
        </div>
        <div className="flex justify-around my-4 gap-4">
          <span>
            <BsInstagram />
          </span>
          <span>
            <BsTwitter />
          </span>
          <span>
            <RiFacebookFill />
          </span>
        </div>
      </div>
    </section>
  )
}