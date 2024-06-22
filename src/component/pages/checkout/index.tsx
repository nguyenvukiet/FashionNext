import React from "react";

const CheckoutPage = () => {

  const handleChange = () => {
    console.log("value input")
  };

  return (
    
       <section className="ckout"> 
        <div className="ckout-wrap"> 
          <div className="container"> 
            <div className="ckout-inner"> 
              <div className="ckout-flex">    
                <div className="ckout-left"> 
                  <div className="ckout-ctn"> 
                    <div className="ckout-ship"> 
                      <h3 className="title c-black fw-7 t16">SHIPPING </h3>
                      <div className="ckout-ship-form mt-20">
                        <form action="">
                          <div className="form-list">
                            <label className="ip-control x2"><span className="t-label">First name</span>
                              <input onChange={handleChange} placeholder="Enter your first name" title="Enter your first name" type="text"/>
                            </label>
                            <label className="ip-control x2"><span className="t-label">Last name</span>
                              <input onChange={handleChange} placeholder="Enter your last name" title="Enter your last name" type="text"/>
                            </label>
                            <label className="ip-control"><span className="t-label">Phone number</span>
                              <input onChange={handleChange} placeholder="Enter your phone number" title="Enter your phone number" type="text"/>
                            </label>
                            <label className="ip-control"><span className="t-label">Andress</span>
                              <input onChange={handleChange} placeholder="Enter your phone andress" title="Enter your phone andress" type="text"/>
                            </label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="ckout-pay"> 
                      <h3 className="title c-black fw-7 t16">PAYMENT METHOD</h3>
                      <div className="recheck"> 
                        <div className="recheck-block">
                          <div className="recheck-item"> 
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" id="" hidden/>
                            <div className="recheck-text"> 
                              <div className="ckout-pay-icon"> <img src="/pay11.png" alt=""/>
                              </div>
                              <div className="ckout-desc"> 
                                <div className="ckout-desc-top"> <span className="fw-5 mr-10">Fundiin</span><span className="ckout-sale">Up to 50% off</span></div>
                                <div className="ckout-desc-bot">
                                  <p className="txt">Buy and pay later with 0% interest</p>
                                </div>
                              </div>
                            </div>
                            <div className="recheck-radio"></div>
                          </div>
                          <div className="recheck-item"> 
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" id="" hidden/>
                            <div className="recheck-text"> 
                              <div className="ckout-pay-icon"> <img src="/pay2.png" alt=""/>
                              </div>
                              <div className="ckout-desc"> 
                                <div className="ckout-desc-top"> <span className="fw-5 mr-10">VN Pay</span>
                                  <div className="ckout-pay-list"> <span className="ckout-pay-item"><img src="/pay21.png" alt=""/></span><span className="ckout-pay-item"><img src="/pay22.png" alt=""/></span><span className="ckout-pay-item"><img src="/pay23.png" alt=""/></span><span className="ckout-pay-item"><img src="/pay24.png" alt=""/></span></div>
                                </div>
                                <div className="ckout-desc-bot">
                                  <p className="txt">ATM/Visa/Master/JCB/QR Pay by VN Pay</p>
                                </div>
                              </div>
                            </div>
                            <div className="recheck-radio"></div>
                          </div>
                          <div className="recheck-item"> 
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" id="" hidden/>
                            <div className="recheck-text"> 
                              <div className="ckout-pay-icon"> <img src="/pay3.png" alt=""/>
                              </div>
                              <div className="ckout-desc"> 
                                <div className="ckout-desc-top"> <span className="fw-5 mr-10">MoMo</span></div>
                                <div className="ckout-desc-bot">
                                  <p className="txt">Pay with Momo e-wallet</p>
                                </div>
                              </div>
                            </div>
                            <div className="recheck-radio"></div>
                          </div>
                          <div className="recheck-item"> 
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" id="" hidden/>
                            <div className="recheck-text"> 
                              <div className="ckout-pay-icon"> <img src="/pay4.png" alt=""/>
                              </div>
                              <div className="ckout-desc"> 
                                <div className="ckout-desc-top"> <span className="fw-5 mr-10">Ship COD</span></div>
                                <div className="ckout-desc-bot">
                                  <p className="txt">Pay in cash upon receipt of goods</p>
                                </div>
                              </div>
                            </div>
                            <div className="recheck-radio"></div>
                          </div>
                          <div className="recheck-item"> 
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" id="" hidden/>
                            <div className="recheck-text"> 
                              <div className="ckout-pay-icon"> <img src="/pay5.png" alt=""/>
                              </div>
                              <div className="ckout-desc"> 
                                <div className="ckout-desc-top"> <span className="fw-5 mr-10">Banking</span></div>
                                <div className="ckout-desc-bot">
                                  <p className="txt">Bank transfer</p>
                                </div>
                              </div>
                            </div>
                            <div className="recheck-radio"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ckout-right">
                  <div className="ckout-cmini">
                    <div className="popup-cart-inner"> 
                      <h1 className="title fw-7 c-black t16">YOURCART<span className="fw-6">(2) </span></h1>
                      <div className="ckout-cmini-tag"> 
                        <p className="txt t-center">$9.65 more & you receive FREE SHIPPING</p>
                      </div>
                      <div className="popup-cart-list"> 
                        <div className="cmini-list">
                          <div className="cmini-item">   
                            <div className="cmini-box"> 
                              <div className="cmini-img"><a className="box" href="/"> <img src="/cmini.jpg" alt=""/></a></div>
                              <div className="cmini-desc"> 
                                <div className="cmini-desc-top"> <a className="cmini-name" href="/">VALLAS DRESS </a><span className="cmini-remove"><i className="fa-regular fa-trash-can"></i></span></div>
                                <div className="cmini-option"> 
                                  <div className="cmini-option-list"><span className="cmini-option-item">Small</span><span className="cmini-option-item">Pink and Black</span></div>
                                </div>
                                <div className="cmini-quan"> 
                                  <div className="quantity">
                                    <div className="quantity-count">
                                      <div className="count">
                                        <div className="count-btn count-minus"><i className="fas fa-minus icon"></i></div>
                                        <input onChange={handleChange} className="count-input" type="text" value="1" max="99" min="0" hidden/>
                                        <p className="count-number">1</p>
                                        <div className="count-btn count-plus"><i className="fas fa-plus icon"></i></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="cmini-price"> 
                                    <div className="price"> <span className="price-odd">$230.0</span><span className="price-new">$23.80</span></div>
                                    <p className="cmini-price-tag">(60% off Final Sale)</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="popup-cart-ctn"> 
                        <div className="cmini-promo"> 
                          <div className="cmini-promo-title"><span className="icon"> <img src="/ticket.svg" alt=""/></span><span className="txt">ADD YOUR VOUCHER <span className="icon">+ </span></span></div>
                          <div className="cmini-apply"> 
                            <form action="">
                              <div className="form-list">
                                <label className="ip-control">
                                  <div className="ip-feild">
                                    <input onChange={handleChange} placeholder="Coupon" title="Nhập Họ và tên" type="text"/>
                                    <button className="btn btn-trans" type="submit"><span className="text">APPLY</span>
                                    </button>
                                  </div>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="popup-cart-sum"> 
                          <div className="popup-cart-price"> 
                            <div className="popup-cart-left"> 
                              <p className="txt">Subtotal</p>
                            </div>
                            <div className="popup-cart-right">
                              <p className="txt">$225</p>
                            </div>
                          </div>
                          <div className="popup-cart-price"> 
                            <div className="popup-cart-left"> 
                              <p className="txt">Taxs</p>
                            </div>
                            <div className="popup-cart-right">
                              <p className="txt">$15</p>
                            </div>
                          </div>
                          <div className="popup-cart-price"> 
                            <div className="popup-cart-left"> 
                              <p className="txt">Estiamted Shipping</p>
                            </div>
                            <div className="popup-cart-right">
                              <p className="txt">$25</p>
                            </div>
                          </div>
                        </div>
                        <div className="popup-cart-control">    
                          <div className="popup-cart-price"> 
                            <div className="popup-cart-left"> 
                              <div className="txt">TOTAL
                                <p className="t12 c-grey">VAT Included</p>
                              </div>
                            </div>
                            <div className="popup-cart-right">
                              <p className="txt">$23.80</p>
                            </div>
                          </div>
                          <div className="popup-cart-btn"> <a className="btn btn-pri full btn-fat" href="/"><span className="text">PLACE AN ORDER</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CheckoutPage;
