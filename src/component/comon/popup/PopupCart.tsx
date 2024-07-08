import CminiItem from "../productItem/CminiItem";
import { useCart } from "@/api/cart/useCart";


const PopupCart = ({ openCart, handleCloseCart }) => {

  const {itemCarts, grandTotal, isLoading} = useCart();

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
                        <CminiItem key={index} cminiItem={item}/>
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
                          <p className="txt">{grandTotal} - VND</p>
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