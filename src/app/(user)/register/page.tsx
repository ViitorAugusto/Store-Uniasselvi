import { SiFacebook, SiJordan, SiNewbalance, SiNike } from "react-icons/si";
import { FormRegister } from "./form-register";
import { FaTwitter } from "react-icons/fa";
import { Google } from "@/data/svgs/google";
import { CgAdidas } from "react-icons/cg";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex justify-center pt-5 h-full font-roboto">
      <div className="flex flex-col mt-10 px-8 gap-4 text-start sm:max-w-lg">
        <span className="flex justify-start items-center gap-4">
          <SiNike className="size-10" />
          <SiJordan className="size-10" />
          <CgAdidas className="size-10" />
          <SiNewbalance className="size-10" />
        </span>
        <p className="text-3xl font-medium pt-4">
          Agora, vamos fazer de você um membro da Fashion Starage.
        </p>

        <span className="text-sm text-grayText">
          {" "}
          Preencha os campos abaixo com os seus dados para se cadastrar.
        </span>

        <FormRegister />
        <p className=" text-sm text-grayText">
          Não está conseguindo entrar ? 
          <Link
            href={"/"}
            className="font-bold text-black/80 bg-gradient-to-r from-transparent via-black/0 to-transparent hover:via-black/80 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-500 ease-in-out"
          >
            {" "}
            Entre em contato
          </Link>
        </p>
      </div>
    </div>
  );
}
