import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
function Drawer({ isOpen, onClose, favorites }: any) {
    if (!isOpen) return null;
    const drawerVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        exit: {
            x: "100%",
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };
    return (
        <AnimatePresence>
            {isOpen && (
            <motion.div
                className="fixed top-0 right-0 w-64 h-full bg-red-400 shadow-lg z-50"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <button onClick={onClose} className="p-4">Fechar</button>
                <h2 className="text-xl font-bold p-4">Favoritos</h2>
                <div className="p-4">
                    {favorites.length > 0 ? (
                        favorites.map((product: any) => (
                            <div key={product.id} className="mb-4">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-auto mb-2" />
                                <h3 className="text-lg font-semibold">{product.name}</h3>
                                <p>{`${product.currency} ${product.price}`}</p>
                            </div>
                        ))
                    ) : (
                        <p>Nenhum produto favoritado.</p>
                    )}
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Drawer;
