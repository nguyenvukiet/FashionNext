import { cart } from "@/api/product";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useMutation, useQueryClient } from "react-query";

const PopupCart = ({ openCart, handleCloseCart }) => {
  // Query to get cart data
  const cartID =
    typeof window !== "undefined" ? localStorage.getItem("cartID") : "";

  const { data: dataCart, isLoading } = useQuery<any>({
    queryKey: ["DATA_CART", cartID],
    queryFn: () =>
      cart.getCart({ cartId: cartID }).then((res: any) => {
        return res;
      }),
  });
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  console.log("dataCart: ", dataCart);
  const itemCarts = dataCart?.cart?.items;
  console.log("item cart: ", itemCarts);

  const queryClient = useQueryClient();
  //remove item in cart
  const mutationRemoveItem = useMutation(
    (data: any) => cart.removeItemCart(data),
    {
      onMutate: () => {},
      onSuccess: (res: any) => {
        console.log("Da xoa san pham thanh cong !");
        //refetch cart -- update cart khi add san pham vao trong cart
        queryClient.refetchQueries(["DATA_CART"]);
      },
      onError: () => {},
    }
  );
  // const cartItemUID = itemCarts?.product?.uid
  const removeItemCart = async (item) => {
    const cartItemUID = item?.product?.uid;
    await mutationRemoveItem.mutateAsync({
      cart_id: cartID, 
      cart_item_uid: cartItemUID 
    });
  };

  const decreaseItems = async (item) => {
    const cartItemUID = item?.product?.uid;
    await mutationRemoveItem.mutateAsync({
      removeItemFromCartInput: [
        { cart_id: cartID, cart_item_uid: cartItemUID, quantity: 1 },
      ],
    });
  };

  return (
    <div className={`popup popup-cart ${openCart ? "open" : ""}`}>
      <div className="popup-overlay" onClick={handleCloseCart}></div>
      <div className="popup-main">
        <button className="popup-close" onClick={handleCloseCart}>
          <i className="fas fa-times icon"></i>
        </button>
        <div className="popup-over">
          <div className="popup-wrapper">
            <div className="popup-cart-inner">
              <p className="title fw-6">SHOPPING CART</p>
              {itemCarts?.length !== 0 ? (
                <>
                  <div className="popup-cart-list">
                    <div className="cmini-list">
                      {itemCarts?.map((item, index) => (
                        <div className="cmini-item" key={index}>
                          <div className="cmini-box">
                            <div className="cmini-img">
                              <a className="box" href="/">
                                <img src={item.product.image.url} alt="" />
                              </a>
                            </div>
                            <div className="cmini-desc">
                              <div className="cmini-desc-top">
                                <a className="cmini-name" href="/">
                                  {item.product.name}
                                </a>
                                <div className="cmini-desc-control">
                                  <button
                                    className="cmini-remove"
                                    onClick={() => removeItemCart(item)}
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
                                      {item.prices.price.value} - VND
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
                                        onClick={() => decreaseItems(item)}
                                      >
                                        <i className="fas fa-minus icon"></i>
                                      </button>
                                      <p className="count-number">
                                        {item.quantity}
                                      </p>
                                      <button
                                        className="count-btn count-plus"
                                        onClick={() => increaseItems(item)}
                                      >
                                        <i className="fas fa-plus icon"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="cmini-price">
                                  <div className="price">
                                    <span className="price-new">
                                      {/* {(
                                            item.price * item.quantity
                                          ).toLocaleString()}{" "}
                                          {item.currency} */}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="popup-cart-ctn">
                    <div className="popup-cart-control">
                      <div className="popup-cart-price">
                        <div className="popup-cart-left">
                          <div className="txt">
                            TOTAL
                            <p className="t12 c-grey">VAT Included</p>
                          </div>
                        </div>
                        <div className="popup-cart-right">
                          {/* <p className="txt">{totalPrice()}Đ</p> */}
                        </div>
                      </div>
                      <div className="popup-cart-btn">
                        <a className="btn btn-pri full" href="/checkout">
                          <span className="text">CHECKOUT</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="cart-empty">
                  <p className="cart-empty-txt">Your cart is empty</p>
                  <div className="cart-empty-img">
                    <img src="/shopping.png" alt="" />
                  </div>
                  <button
                    className="cart-empty-btn btn btn-pri full mt-20"
                    onClick={handleCloseCart}
                  >
                    <span className="text">CONTINUE SHOPPING</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;
