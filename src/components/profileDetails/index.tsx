import { useUsers } from "../../context"
import {
  RiFacebookFill,
  BsInstagram,
  BsTwitter,
  MdVerified,
  AiOutlineUser,
  IoMdMale,
  IoMdFemale,
  AiOutlineNumber,
  MdOutlineEmail,
  IoMdPhonePortrait
} from "react-icons/all";
import { useParams } from "react-router-dom";

export function ProfileDetails() {
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
          <section className="max-w-[300px] w-full rounded-lg shadow">
            <div>
              <img className="max-w-[300px] mx-auto p-4 w-full rounded-full"
                src={userProfile.picture.large} alt={userProfile.picture.large} />
            </div>
            <div className="w-full flex flex-col items-center gap-2 mt-4">
              <h1 className="font-bold">Simret aklilu</h1>
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
          <section className="max-w-xl w-full rounded-lg shadow">
            <div className="bg-gray-200 h-10 p-2">
              <h2 className="font-bold">About me</h2>
            </div>
            <div className="p-2 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 my-2">
                  <AiOutlineUser />
                  <span>{userProfile.login?.username}</span>
                </div>
                <div className="flex items-center gap-3 my-2">
                  {userProfile.gender === "male" ?
                    (< IoMdMale />)
                    :
                    (<IoMdFemale />)}
                  <span>{userProfile.gender}</span>
                </div>
                <div className="flex items-center gap-3 my-2">
                  <AiOutlineNumber />
                  <span>{userProfile.dob?.age} Years old</span>
                </div>
                <div className="flex items-center gap-3 my-2">
                  <MdOutlineEmail />
                  <span>{userProfile.email}</span>
                </div>
                <div className="flex items-center gap-3 my-2">
                  <IoMdPhonePortrait />
                  <span>{userProfile.phone}</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold">Description</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquam ipsam veritatis dolore facere mollitia molestiae
                  deleniti suscipit qui corporis quaerat! Rem saepe quam, praesentium et ratione aliquid.
                  Excepturi, cupiditate corrupti. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, repudiandae consequuntur aspernatur molestiae eligendi iusto
                </p>
              </div>
            </div>
          </section>
          <section className="max-w-[230px] h-[430px] w-full rounded-lg shadow address">
            <div className="bg-gray-200 h-10 p-2">
              <h2 className="font-bold">Address</h2>
            </div>
            <div className="flex flex-col gap-2 py-4 px-2 ">
              <div className="flex items-center gap-3">
                <span className="font-bold">Country:</span>
                <span>{userProfile.location.country}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">State:</span>
                <span>{userProfile.location.state}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">City:</span>
                <span>{userProfile.location.city}</span>
              </div>
              <div className="flex items-center flex-wrap gap-3">
                <span className="font-bold">Street:</span>
                <span>{userProfile.location.street?.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold">Number:</span>
                <span>{userProfile.location.street?.number}</span>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  )
}