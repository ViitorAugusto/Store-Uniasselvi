import React from "react";

// Tipagem para props caso esteja usando TypeScript
// interface ProductModalProps {
//   product: Product;
//   onClose: () => void;
// }

const ProductModal = ({ product, onClose }:any) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-2" />
        <p>{product.description}</p>
        <span className="text-lg">{`${product.currency} ${product.price}`}</span>
        <button onClick={onClose} className="mt-4 ">Fechar</button>
      </div>
    </div>
  );
};

export default ProductModal;
