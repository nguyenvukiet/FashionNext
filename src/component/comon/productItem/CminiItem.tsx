import { cart } from "@/api/product";
import Link from "next/link";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Spin } from 'antd';


export default function CminiItem({ cminiItem }) {
  const { Spin } = require('antd');

    const cartID =
    typeof window !== "undefined" ? localStorage.getItem("cartID") : "";

  const queryClient = useQueryClient();
  //remove item in cart
  const [isUpdateCmini, setIsUpdateCmini] = useState(false);
  const mutationRemoveItem = useMutation(
    (data: any) => cart.removeItemCart(data),
    {
      onMutate: (data: any) => {
        setIsUpdateCmini(true);
      },
      onSuccess: (res : any) => {
        console.log('Đã xóa sản phẩm thành công!');
        queryClient.refetchQueries(['DATA_CART']);
        setIsUpdateCmini(false);
      },
      onError: () => {
        setIsUpdateCmini(false);
      },
    }
  );
  const removeItemCart = async (cminiItem) => {
    const cartItemUID = cminiItem?.uid;
    await mutationRemoveItem.mutateAsync({
      cart_id: cartID, 
      cart_item_uid: cartItemUID 
    });
  };

  // update plus or minus cart items
  const mutationUpdateItem = useMutation(
    (data: any) => cart.updateCart(data),
    {
      onMutate: () => {
        setIsUpdateCmini(true);

      },
      onSuccess: (res : any) => {
        console.log('Đã thay đổi số lượng thành công!');
        queryClient.refetchQueries(['DATA_CART']);
        setIsUpdateCmini(false);

      },
      onError: () => {
        setIsUpdateCmini(false);
      },
    }
  );

  const decreaseItems = async (cminiItem) => {
    const cartItemUID = cminiItem?.uid;
    const currentQuantity = cminiItem?.quantity
    await mutationUpdateItem.mutateAsync({
      cartId : cartID , 
      cartItems: [{
        cart_item_uid: cartItemUID,
        quantity : currentQuantity - 1
      }]
    });
  };
  const increaseItems = async (cminiItem) => {
    const cartItemUID = cminiItem?.uid;
    const currentQuantity = cminiItem?.quantity
    await mutationUpdateItem.mutateAsync({
      cartId : cartID , 
      cartItems: [{
        cart_item_uid: cartItemUID,
        quantity : currentQuantity + 1
      }]
    });
  };
 
  return (
    <>
    <div className="cmini-item">
        <div className="cmini-box">
          {isUpdateCmini && <Spin tip="Loading..." />} 
          <div className="cmini-img">
            <Link className="box" href={`/home/${cminiItem?.product?.url_key}`}>
              <img src={cminiItem.product.image.url} alt="" />
            </Link>
          </div>
          <div className="cmini-desc">
            <div className="cmini-desc-top">
              <Link className="cmini-name"  href={`/home/${cminiItem.url_key}`}>
                {cminiItem.product.name}
              </Link>
              <div className="cmini-desc-control">
                <button
                  className="cmini-remove"
                  onClick={() => removeItemCart(cminiItem)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
            <div className="cmini-option">
              <div className="cmini-option-txt">
                <div className="cmini-option-op">
                  <span className="sub">Price: </span>
                  <span className="txt fw-6">
                    {cminiItem.prices.price.value} - VND
                  </span>
                </div>
              </div>
            </div>
            <div className="cmini-quan">
              <div className="quantity">
                <div className="quantity-count">
                  <div className="count">
                    <button
                      className="count-btn count-minus"
                      onClick={() => decreaseItems(cminiItem)}
                    >
                      <i className="fas fa-minus icon"></i>
                    </button>
                    <p className="count-number">
                      {cminiItem.quantity}
                    </p>
                    <button
                      className="count-btn count-plus"
                      onClick={() => increaseItems(cminiItem)}
                    >
                      <i className="fas fa-plus icon"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="cmini-price">
                <div className="price">
                  <span className="price-new">
            
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
