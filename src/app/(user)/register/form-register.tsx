"use client";
import { RegisterUser, RegisterUserSchema } from "@/@types/registerUser";
import { InputRegister } from "./input-register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const FormRegister = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    control,
    getValues,
    setError,
  } = useForm<RegisterUser>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegisterUserSchema),
  });

  const onSubmit = async (data: RegisterUser) => {

    const url = "http://localhost:3333/users";
    const checkEmail = getValues("email");

    const checkEmailUrl = `http://localhost:3333/users?email=${checkEmail}`;

    const checkEmailResponse = await fetch(checkEmailUrl);
    const existingUsers = await checkEmailResponse.json();

    // Verifica se algum usuário com esse email já existe
    if (existingUsers.length > 0) {
      setError("email", {
        type: "manual",
        message: "Email já cadastrado",
      });
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Usuário cadastrado:", userData);
        reset(); // Limpa o formulário após o sucesso
      } else {
        console.error("Falha ao cadastrar:", response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };
  return (
    <form
      className="flex flex-col  w-full px-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputRegister
        control={control}
        label="Nome"
        placeholder="Nome"
        type="text"
        name="name"
      />
      <InputRegister
        label="E-mail"
        placeholder="E-mail"
        type="email"
        name="email"
        control={control}
      />
      <InputRegister
        control={control}
        name="password"
        label="Password"
        placeholder="Digite sua senha"
        type="password"
        isPassword
      />
      <InputRegister
        label="Confirme a senha"
        placeholder="Confirme a senha"
        type="password"
        isPassword
        name="confirmPassword"
        control={control}
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
          " Cadastrar"
        )}
      </button>
    </form>
  );
};
