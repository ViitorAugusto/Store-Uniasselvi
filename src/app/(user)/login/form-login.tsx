"use client";
import { RegisterUser, RegisterUserSchema } from "@/@types/registerUser";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/Input";
import { LoginUser, LoginUserSchema } from "@/@types/logintUser";
import { signIn } from "next-auth/react";
import Link from "next/link";

// Para redirecionar

export const LoginRegister = () => {
  const {
    handleSubmit,
    formState: { isSubmitting, errors },
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
    }
    console.log(data);
  };
  return (
    <form
      className="flex flex-col space-y-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="E-mail"
        placeholder="E-mail"
        type="email"
        name="email"
        control={control}
        showError={false}
      />
      <div>
        <Input
          label="Senha"
          placeholder="Senha"
          type="password"
          name="password"
          control={control}
          isPassword
          showError={false}
        />
        {errors.email && errors.password && (
          <small className="block text-xs text-red-500 p-1 ">
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="py-4 text-sm text-grayText">
        Ao continuar, afirmo que concordo com a Política de privacidade e os
        Termos de uso da Fashion Starage.
      </div>

      <button
        type="submit"
        className="bg-black text-white py-2 uppercase font-bold tracking-wider rounded my-5 h-12 shadow hover:opacity-80 transition-colors duration-300"
      >
        Entrar
      </button>
    </form>
  );
};
