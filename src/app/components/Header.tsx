"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

export const Header = ({ showLinks = true }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const backdropVariants = {
    hidden: {
      opacity: 0,
      scale: 2,
      borderRadius: "50%",
      originX: -3,
      originY: 4,
    },
    visible: {
      opacity: 1,
      scale: 1,
      borderRadius: "0%",
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const AnimatedLink = ({ href, delay, children }: any) => (
    <div
      className="mt-6 flex flex-col items-end w-full 
        gap-6 font-montserrat font-extrabold text-2.5xl
       text-white"
    >
      <motion.a
        href={href}
        className="cursor-pointer"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: delay, duration: 0.5 }}
      >
        {children}
      </motion.a>
    </div>
  );

  return (
    <div className="pb-20">
      <motion.header
        // initial={{ opacity: 0, y: -80 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.8 }}
        className={`flex justify-between items-center sm:mx-auto sm:container  
        sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:bg-white sm:shadow-md sm:rounded-b-3xl sm:backdrop-filter 
        sm:bg-opacity-60 sm:backdrop-blur-lg px-8 sm:gap-4 sm:font-montserrat 
        sm:font-semibold sm:text-black sm:z-50 sm:w-full sm:transition-all sm:duration-500 
        sm:ease-in-out sm:transform sm:translate-y-0 sm:scale-100 sm:opacity-100 sm:delay`}
      >
        <div
          onClick={() => router.push("/")}
          className="z-10 sm:pl-20 cursor-pointer "
        >
          <Image
            src="/logoSemFundo2.png"
            alt="Logoo"
            width={80}
            height={41}
            priority
          />
        </div>
        <nav className="text-black lg:hidden">
          <div
            onClick={toggleMenu}
            className={`w-10 h-6 flex flex-col justify-between items-center cursor-pointer ${
              isOpen ? "open" : ""
            } z-20`}
          >
            <div
              className={`h-1 w-full ${
                isOpen ? "bg-white" : "bg-primaryColor"
              }  transform transition duration-500 ease-in-out rounded ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              } z-20`}
            ></div>
            <div
              className={`h-1 w-full ${
                isOpen ? "bg-white" : "bg-primaryColor"
              }  transition-opacity duration-500 rounded ${
                isOpen ? "opacity-0" : "opacity-100"
              } z-20`}
            ></div>
            <div
              className={`h-1 w-full ${
                isOpen ? "bg-white" : "bg-primaryColor"
              } transform transition duration-500 ease-in-out rounded ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              } z-20`}
            ></div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-10 "
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-8 z-50">
                <Image
                  src="/logoSemFundo2.png"
                  alt="Logo"
                  width={80}
                  height={41}
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <div
            className={`hidden lg:flex justify-end items-center flex-1 gap-8  font-montserrat font-semibold`}
          >
            {showLinks && (
              <>
                <Link
                  href="/"
                  className="hover:text-primaryColor transition duration-500 ease-in-out"
                >
                  Lançamentos
                </Link>
                <Link
                  href="/search"
                  className="hover:text-primaryColor transition duration-500 ease-in-out"
                >
                  Tênis
                </Link>
                <Link
                  href="/products"
                  className="hover:text-primaryColor transition duration-500 ease-in-out"
                >
                  Produtos
                </Link>
                <Link
                  href="/"
                  className="hover:text-primaryColor transition duration-500 ease-in-out"
                >
                  Acessórios
                </Link>
                <Link
                  href="/register"
                  className="hover:text-primaryColor transition duration-500 ease-in-out"
                >
                  Register
                </Link>
                <Link
                  href="/private"
                  className="hover:text-primaryColor transition duration-500 ease-in-out"
                >
                  Rota Privada
                </Link>
              </>
            )}

            <div className=" flex justify-center items-center relative w-96 ">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full  h-10 rounded border border-zinc-400 placeholder:text-zinc-400 pl-4 font-normal bg-transparent
                text-zinc-800 focus:outline-none focus:ring-1 focus:ring-primaryColor focus:border-transparent transition duration-500 ease-in-out"
              />
              <IoSearchOutline className="absolute right-2 size-6 text-zinc-400 " />
            </div>
          </div>
        )}
        <style jsx>{`
          .open div:first-child {
            transform: rotate(45deg) translate(7px, 7px);
          }

          .open div:last-child {
            transform: rotate(-45deg) translate(7px, -7px);
          }
        `}</style>
      </motion.header>
    </div>
  );
};
