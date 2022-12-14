import { BsGithub, BsLinkedin, MdEmail } from "react-icons/all";

export function Contact() {
  return (
    <section className="flex justify-center items-center h-[746px]">
      <div className="w-96 h-80 rounded-md bg-slate-400 text-slate-900 ">
        <div className="flex flex-col justify-around items-center w-full h-80">
          <div className="font-bold">My Contacts</div>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/maarcoseduardo/"
                className="flex justify-between items-center w-[83px] hover:text-blue-500">
                <span>
                  <BsLinkedin />
                </span>
                <span>Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maarcoseduardo/"
                className="flex justify-between items-center w-[70px] hover:text-blue-500">
                <span>
                  <BsGithub />
                </span>
                <span>Github</span>
              </a>
          </li>
          <li className="flex justify-between items-center w-[208px]">
            <span><MdEmail /></span>
            <span>maarcosefb0@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
    </section >
  )
}