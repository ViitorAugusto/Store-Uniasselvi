"use client";
import { RegisterUser, RegisterUserSchema } from "@/@types/registerUser";
import { Input } from "../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

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
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(RegisterUserSchema),
  });

  const router = useRouter();
  const onSubmit = async (data: RegisterUser) => {
    const url = "http://localhost:3333/users";
    const checkEmail = getValues("email");
    const checkEmailUrl = `http://localhost:3333/users?email=${checkEmail}`;
    const checkEmailResponse = await fetch(checkEmailUrl);
    const existingUsers = await checkEmailResponse.json();
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
        router.push("/login");
      } else {
        console.error("Falha ao cadastrar:", response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };
  return (
    <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-3">
        <Input
          control={control}
          label="Nome"
          placeholder="Nome"
          type="text"
          name="name"
          showError
        />
        <Input
          control={control}
          label="Sobrenome"
          placeholder="Sobrenome*"
          type="text"
          name="lastName"
          showError
        />
      </div>
      <Input
        label="E-mail"
        placeholder="Digite seu e-mail"
        type="email"
        name="email"
        control={control}
        showError
      />
      <Input
        control={control}
        name="password"
        label="Password"
        placeholder="Digite sua senha"
        type="password"
        isPassword
        showError
      />
      <Input
        label="Confirme a senha"
        placeholder="Digite sua senha novamente"
        type="password"
        isPassword
        name="confirmPassword"
        control={control}
        showError
      />
      <Button />
    </form>
  );
};
