import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { cart } from "@/api/product";


const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [itemCarts, setItemCarts] = useState([]);
    const [grandTotal, setGrandTotal] = useState(0);
    const [quantityTotal, setQuantityTotal] = useState(0);

    const cartID = typeof window !== "undefined" ? localStorage.getItem("cartID") : "";
  
    const { data: dataCart, isLoading } = useQuery({
      queryKey: ["DATA_CART", cartID],
      queryFn: () => cart.getCart({ cartId: cartID }).then((res) => res),
    });
  
    useEffect(() => {
      if (dataCart) {
        setItemCarts(dataCart?.cart?.items);
        setGrandTotal(dataCart?.cart?.prices?.grand_total?.value);
        setQuantityTotal(dataCart?.cart?.total_quantity);
      }
    }, [dataCart]);

    return (
        <CartContext.Provider value={{itemCarts, isLoading, grandTotal, quantityTotal}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)