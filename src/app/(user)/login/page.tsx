"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      // Tratar o erro
      console.log(result.error);
    } else {
      // Redirecionar para a página desejada após o sucesso
      window.location.href = "/";
    }
  };

  return (
    <div className="mx-auto container flex justify-center h-screen pt-20">
      <form
        className="bg-zinc-100  h-96 flex flex-col items-center p-10 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="">
          <h2 className="text-center">Login</h2>
          <p>Enter your email below to login to your account</p>
        </div>

        <div className="flex flex-col w-full ">
          <label htmlFor="" className="">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className={`block w-full h-10 px-4 py-2 text-base font-roboto leading-7 text-black placeholder:text-zinc-400 rounded-md border 
         border-zinc-400 outline-none focus:border-zinc-500 transition-all duration-300 ease-in-out lg:h-12`}
          />
        </div>

        <div className="flex flex-col w-full ">
          <label htmlFor="" className="">
            Senha
          </label>
          <input
            type="password"
            name="password"
            className={`block w-full h-10 px-4 py-2 text-base font-roboto leading-7 text-black placeholder:text-zinc-400 rounded-md border 
         border-zinc-400 outline-none focus:border-zinc-500 transition-all duration-300 ease-in-out lg:h-12`}
          />
        </div>
        <button className=" bg-gray-900 text-white w-full rounded-md py-2 text-lg uppercase mt-5">
          Entrar
        </button>
      </form>
    </div>
  );
}
