import { SiJordan, SiNewbalance, SiNike } from "react-icons/si";
import { LoginRegister } from "./form-login";
import { CgAdidas } from "react-icons/cg";
import Link from "next/link";

export default function Login () {
    return (
      <div className="flex justify-center pt-5 h-full font-roboto">
        <div className="flex flex-col mt-10 px-8 gap-6 text-start sm:max-w-lg">
          <span className="flex justify-start items-center gap-4">
            <SiNike className="size-10" />
            <SiJordan className="size-10" />
            <CgAdidas className="size-10" />
            <SiNewbalance className="size-10" />
          </span>
          <p className="text-3xl font-medium pt-4">
            Insira seu e-mail para se inscrever ou entrar.
          </p>

          <span className="py-4 text-sm text-grayText">
            {" "}
            Ainda não tem uma conta?{" "}
            <span className="py-4 text-sm text-gray-500">
              Ainda não tem uma conta?
              <a
                href="/register"
                className="font-bold text-black/80 bg-gradient-to-r from-transparent via-black/0 to-transparent hover:via-black/80 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-500 ease-in-out"
              >
                {""} Cadastre-se
              </a>
            </span>
          </span>

          <LoginRegister />
        </div>
      </div>
    );
}
