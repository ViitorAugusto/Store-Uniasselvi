import { SiFacebook } from "react-icons/si";
import { FormRegister } from "./form-register";
import {  FaTwitter } from "react-icons/fa";
import { Google } from "@/data/svgs/google";

export default function Register() {
  return (
    <div className="flex justify-center pt-5 h-full">
      <div className="px-2">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-4xl font-bold text-center">
            Cadastre-se com o seu E-mail!
          </p>
          <FormRegister />
        </div>
        <div className="flex items-center justify-center my-6 mx-4 ">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-600">OU</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="pb-10">
          <p className="pb-10 text-center text-4xl font-bold">
            Cadastre-se com:
          </p>
          <div className="flex flex-col gap-4 px-2">
            <button className="border border-zinc-400 py-2.5 uppercase rounded bg-slate-50 flex justify-center items-center gap-4 font-semibold">
              <SiFacebook className="text-sky-500 size-5" /> Cadastre-se com
              Facebook
            </button>
            <button className="border border-zinc-400 py-2.5 uppercase rounded bg-slate-50 flex justify-center items-center gap-4 font-semibold">
              <Google /> Cadastre-se com Google
            </button>
            <button className="border border-zinc-400 py-2.5 uppercase rounded bg-slate-50 flex justify-center items-center gap-4 font-semibold">
              <FaTwitter />
              Cadastre-se com Twitter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
