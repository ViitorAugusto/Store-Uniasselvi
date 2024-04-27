import { FaTruck } from "react-icons/fa";
import { GiSwipeCard } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { PiShieldCheckeredFill } from "react-icons/pi";

const advantages = [
  {
    Icon: IoShieldCheckmarkSharp,
    title: "Garantia",
    description: "12 meses",
  },
  {
    Icon: GiSwipeCard,
    title: "Pagamento",
    description: "Parcelado",
  },
  {
    Icon: FaTruck,
    title: "Frete",
    description: "Grátis",
  },
  {
    Icon: PiShieldCheckeredFill,
    title: "Segurança",
    description: "Compra segura",
  },
];

export const Advantage = () => {
  return (
    <div className=" w-full py-8 my-2 flex justify-around items-center bg-gray-50 rounded">
      {advantages.map((advantage, index) => (
        <div key={index} className="flex justify-center items-center gap-8">
          <advantage.Icon className="size-12 text-primaryColor" />
          <p className="flex flex-col gap-4 font-bold text-primaryColor">
            {advantage.title}
            <span className="font-normal text-gray-600">
              {advantage.description}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};
