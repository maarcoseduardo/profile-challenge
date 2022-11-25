import { ProfileAddressProps } from "../../utils/types";

export function ProfileAddress({ 
  profileCountry, 
  profileState, 
  profileCity, 
  profileStreet, 
  profileNumber 
}: ProfileAddressProps) {
  return (
    <section className="max-w-[230px] h-[430px] w-full rounded-lg shadow address" aria-label="profile-address">
      <div className="bg-gray-200 h-10 p-2">
        <h2 className="font-bold">Address</h2>
      </div>
      <div className="flex flex-col gap-2 py-4 px-2 ">
        <div className="flex items-center gap-3">
          <span className="font-bold">Country:</span>
          <span>{profileCountry}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold">State:</span>
          <span>{profileState}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold">City:</span>
          <span>{profileCity}</span>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <span className="font-bold">Street:</span>
          <span>{profileStreet}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-bold">Number:</span>
          <span>{profileNumber}</span>
        </div>
      </div>
    </section>
  )
}