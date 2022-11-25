import { AiOutlineNumber, AiOutlineUser, IoMdFemale, IoMdMale, IoMdPhonePortrait, MdOutlineEmail } from "react-icons/all";
import { AboutMeProps } from "../../utils/types";



export function ProfileAboutMe({ profileUsername, profileGender, profileAge, profileEmail, profilePhone }: AboutMeProps) {
  return (
    <section className="max-w-xl w-full rounded-lg shadow">
      <div className="bg-gray-200 h-10 p-2">
        <h2 className="font-bold">About me</h2>
      </div>
      <div className="p-2 flex flex-col gap-10">
        <div>
          <div className="flex items-center gap-3 my-2">
            <AiOutlineUser />
            <span>{profileUsername}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            {profileGender === "male" ?
              (< IoMdMale />)
              :
              (<IoMdFemale />)}
            <span>{profileGender}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <AiOutlineNumber />
            <span>{profileAge} Years old</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <MdOutlineEmail />
            <span>{profileEmail}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <IoMdPhonePortrait />
            <span>{profilePhone}</span>
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
  )
}