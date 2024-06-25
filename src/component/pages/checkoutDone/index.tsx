import React from "react";

const CheckoutDonePage = () => {

  return (
    <section className="ckout"> 
    <div className="ckout-wrap"> 
      <div className="container"> 
        <div className="ckout-inner"> 
          <div className="ckout-done"> 
            <div className="ckout-done-icon"> <img src="./assets/images/ckout-done.png" alt=""/>
            </div>
            <div className="ckout-done-desc"> 
              <p className="title t-center fw-6">THANKS FOR YOUR ORDERING!</p>
              <p className="txt t-center t14"> At House of Rechic, we want to express our heartfelt gratitude for choosing our brand. Thank you for your purchase, and we hope our products add a touch of style and elegance to your wardrobe.</p>
            </div>
            <div className="ckout-done-control"><a className="btn btn-trans btn-fat" href="/"><span className="text">CONTINUE SHOPPING</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CheckoutDonePage;
