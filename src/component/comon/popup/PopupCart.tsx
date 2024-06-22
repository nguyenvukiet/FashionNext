import { CSSTransition, TransitionGroup } from "react-transition-group";

const PopupCart = ({ openCart, handleCloseCart }) => {

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
              {/* {cartItems.length !== 0 ? (
                <>
                  <div className="popup-cart-list">
                    <div className="cmini-list">
                      <TransitionGroup>
                        {cartItems.map((item) => (
                          <CSSTransition
                            key={item.id}
                            classNames="fade"
                            timeout={300}
                          >
                            <div className="cmini-item">
                              <div className="cmini-box">
                                <div className="cmini-img">
                                  <a className="box" href="/">
                                    <img src={item.img[0].img1} alt="" />
                                  </a>
                                </div>
                                <div className="cmini-desc">
                                  <div className="cmini-desc-top">
                                    <a className="cmini-name" href="/">
                                      {item.name}
                                    </a>
                                    <div className="cmini-desc-control">
                                      <button
                                        className="cmini-remove"
                                        onClick={() => removeItems(item)}
                                      >
                                        <i className="fa-regular fa-trash-can"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div className="cmini-option">
                                    <div className="cmini-option-txt">
                                      <div className="cmini-option-op">
                                        <span className="sub">Color: </span>
                                        <span className="txt">
                                          {item.color_name}
                                        </span>
                                      </div>
                                      <div className="cmini-option-op">
                                        <span className="sub">Size: </span>
                                        <span className="txt">
                                          {item.size_name}
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
                                          {(
                                            item.price * item.quantity
                                          ).toLocaleString()}{" "}
                                          {item.currency}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CSSTransition>
                        ))}
                      </TransitionGroup>
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
                          <p className="txt">{totalPrice()}Đ</p>
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
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCart;
