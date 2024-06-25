import { cart } from "@/api/product";
import Link from "next/link";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";




export default function ProductItem({ productItem }) {

  const queryClient = useQueryClient();
  const [isAdding, setIsAdding] = useState(false);

  const mutationAddtoCart = useMutation(
    (data: any) => cart.addProductToCart(data),
    {
      onMutate: () => {
        setIsAdding(true);
      },
      onSuccess: (res: any) => {
        console.log("Thêm vào giỏ hàng thành công !");
        setIsAdding(false);
        //refetch cart -- update cart khi add san pham vao trong cart
        queryClient.refetchQueries(['DATA_CART'])
      },
      onError: () => {
        setIsAdding(false);
      }
    }
  );
  // lấy biến cartID 
  const cartID = localStorage.getItem('cartID');
  const addToCart = async (productItem) => {
    await mutationAddtoCart.mutateAsync({
      cartId : cartID , cartItems: [{sku : productItem.sku , quantity : 1}]
    });
  };
  
 
  return (
    <>
   
      <div className="pro-item">
        <div className="pro-box">
          <div className="pro-img">
            <Link className="box" href={`/home/${productItem.url_key}`}>
              <img src={productItem.thumbnail.url} alt="" />
              <span className=" box-hover">
                <img src={productItem.thumbnail.url} alt="" />
              </span>
            </Link>
            <div className="pro-hover">
              <button
                className="btn btn-trans full"
                onClick={() => addToCart(productItem)}
              >
                <span className="text">
                  {isAdding ? 'LOADING...' : 'ADD TO CART'}
                </span>
              </button>
            </div>
          </div>
          <div className="pro-desc">
            <div className="pro-desc-inner">
              <div className="pro-desc-left">
                <Link className="pro-name" href={`/home/${productItem.id}`}>
                  {productItem.name}
                </Link>
              </div>
              <div className="pro-desc-right">
                <div className="pro-price">
                  <div className="pro-price-inner">
                    <p className="price-new">
                      {productItem?.price_range?.maximum_price?.final_price?.value.toLocaleString()}{" "}
                      -
                      {
                        productItem?.price_range?.maximum_price?.final_price
                          ?.currency
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pro-desc-txt"
              dangerouslySetInnerHTML={{
                __html: productItem?.description?.html,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
