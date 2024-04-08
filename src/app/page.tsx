"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Atualize para 'next/router'

export default function Splash() {
  const router = useRouter();
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  useEffect(() => {
    // Após 3 segundos, muda para a segunda tela
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
      // Após mais 2 segundos, redireciona para a página de login
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
  }, [router]);

  if (showWelcomeScreen) {
    return (
      <div className="h-screen flex justify-center items-center bg-blue-500">
        <h1 className="text-white text-4xl">Bem-vindo(a) ao Nosso Site!</h1>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex justify-center items-center bg-green-500">
        <h2 className="text-white text-3xl">Preparando tudo para você...</h2>
      </div>
    );
  }
}
