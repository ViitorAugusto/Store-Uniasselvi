"use client";
import { motion } from "framer-motion";
import { getServerSession } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";

export default function Sidebar() {
   const session = getSession();
  const [isOpen, setIsOpen] = useState(true);

  const variants = {
    open: { flexBasis: "250px" },
    closed: { flexBasis: "0px" },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5, type: "tween" }}
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      className="bg-gray-800 text-white"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="py-5 self-end px-6">
        {isOpen ? "Fechar" : "Abrir"}
      </button>
      <nav className=" h-full flex flex-col justify-between items-center py-10">
        <ul>
          <li>
            <button> Cadastrar Produtos </button>
          </li>
          <li>
            <button> Deletar Produtos </button>
          </li>
        </ul>

        <ul>
          <li> </li>
          <li>Sair</li>
        </ul>
      </nav>
    </motion.div>
  );
}
