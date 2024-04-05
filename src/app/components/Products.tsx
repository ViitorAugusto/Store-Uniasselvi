"use client";
import { Product } from "@/utils/products";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import ProductModal from "./ModalProducts";
import Drawer from "./Drawer";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Header } from "./Header";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setLoading(true); // Inicia o carregamento
    fetch("http://localhost:3333/products")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: any) => {
    const isFavorite = favorites.find(fav => fav.id === product.id);
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      {/* <header className="bg-zinc-400 flex justify-between p-4 cursor-pointer">
                <div>Logo</div>
                <ul className="flex gap-6 justify-center items-center">
                    <li>Home</li>
                    <li>Produtos</li>
                    <button
                        className=" text-white text-2xl hover:text-blue-600 transition duration-300 ease-in-out relative"
                        onClick={() => {
                            console.log("Abrindo Drawer");
                            setIsDrawerOpen(true);
                        }}
                    >
                        <IoCartOutline />
                        {favorites.length > 0 && (
                            <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {favorites.length}
                            </span>
                        )}
                    </button>
                </ul>
            </header> */}
      <div className="p-8">
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          favorites={favorites}
        />

        <h1 className="text-2xl font-bold mb-8">Produtos</h1>

        <div className="grid md:grid-cols-3 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="border p-4 cursor-pointer flex flex-col"
              onClick={() => {
                setSelectedProduct(product);
                setIsModalOpen(true);
              }}
            >
              <button onClick={() => toggleFavorite(product)} className="">
                {favorites.find(fav => fav.id === product.id) ? (
                  <MdAddShoppingCart />
                ) : (
                  <MdAddShoppingCart />
                )}
              </button>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto mb-2"
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mb-2">{product.description}</p>
              <span className="text-lg">{`${product.currency} ${product.price}`}</span>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </>
  );
}
