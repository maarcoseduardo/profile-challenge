import { useUsers } from "../../context"
import { RiFacebookFill, BsInstagram, BsTwitter } from "react-icons/all";
import { Link } from "react-router-dom";

export function ProfileDetails() {
  return (
    <>
      <h1 className="text-center text-3xl mb-20">Sou um desenvolvedor React criativo</h1>
      <div className="flex justify-between">
        <img
          src="picture.large"
          className="max-w-[250px] w-full h-[350px] rounded-md"
        />
        <div className="flex flex-col gap-6 max-w-sm w-full h-[200px]">
          <h2 className="text-2xl">About me</h2>
          <p className="max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error ex sunt similique ratione nemo. Quod aut recusandae quasi itaque voluptas iusto! Corrupti ea repellendus temporibus neque quas natus eligendi. </p>
          <p className="text-gray-400">Imagem por
            <Link to="" className="ml-1 hover:underline underline-offset-4"> users name first</Link>
          </p>
        </div>
        <div className="max-w-[280px] w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Details</h2>
            <strong>Name:</strong>
            <p> first lastname</p>
            <strong>Idade:</strong>
            <p>dob age anos</p>
            <strong>Local:</strong>
            <p>city,  country,  street name</p>
          </div>
          <div className="flex justify-between max-w-[80px]">
            <RiFacebookFill />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
      </div>
    </>
  )
}