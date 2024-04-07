"use client";
import { RegisterUser, RegisterUserSchema } from "@/@types/registerUser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputRegister } from "../register/input-register";
import { LoginUser, LoginUserSchema } from "@/@types/logintUser";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
export const LoginRegister = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    control,
    getValues,
    setError,
  } = useForm<LoginUser>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginUserSchema),
  });

  const onSubmit = async (data: LoginUser) => {
    const passwordValue = getValues("password");
    const emailValue = getValues("email");
    const result = await signIn("credentials", {
      password: passwordValue,
      email: emailValue,
      redirect: false,
    });
    if (result?.error) {
      (["email", "password"] as const).forEach(field => {
        setError(field, {
          type: "manual",
          message: "Email e/ou senha inválidos",
        });
      });
    } else {
      console.log("Usuário logado:", result);
    }
    console.log(data);
  };
  return (
    <form
      className="flex flex-col  w-full px-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputRegister
        label="E-mail"
        placeholder="E-mail"
        type="email"
        name="email"
        control={control}
      />
      <InputRegister
        label="Senha"
        placeholder="Senha"
        type="password"
        name="password"
        control={control}
        isPassword
      />

      <button
        type="submit"
        className="bg-primaryColor text-white py-2 uppercase rounded my-5"
      >
        {isSubmitting ? (
          <div className="flex justify-center items-center">
            <div className="spinner"></div>
          </div>
        ) : (
          "Entrar"
        )}
      </button>
    </form>
  );
};
