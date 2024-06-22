import React, { useState } from "react";
import faqItems from "@/api/faq.json";

const PopupSizeGuide = ({ openSize, handleCloseSize }) => {
  
  const [openIndex, setOpenIndex] = useState(null);
  const handleShowHide = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`popup popup-cart popup-sz ${openSize ? "open" : ""}`}>
      <div className="popup-overlay" onClick={handleCloseSize}></div>
      <div className="popup-main">
        <div className="popup-login-title">
          <div className="popup-close" onClick={handleCloseSize}>
            <i className="fas fa-times icon"></i>
          </div>
          <span className="txt">SIZE GUIDE</span>
        </div>
        <div className="popup-over">
          <div className="popup-wrapper">
            <div className="popup-sz-inner">
              <div className="faq-list tech-block">
                {faqItems.map((item, index) => (
                  <div className="faq-item" key={index}>
                    <div
                      className={`faq-item-top tech-item-head ${
                        openIndex === index ? "active" : ""
                      }`}
                      onClick={() => handleShowHide(index)}
                    >
                      <span className="txt">{item.title}</span>
                      <span className="icon icon-plus">
                        <i className="fa-solid fa-plus-large"></i>
                      </span>
                      <span className="icon icon-minus">
                        <i className="fa-solid fa-dash"></i>
                      </span>
                    </div>
                    <div
                      className={`faq-item-ctn tech-body ${
                        openIndex === index ? "open" : ""
                      }`}
                    >
                      <ul>
                        {item.content.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="popup-sz-tab tabJS">
                <div className="popup-sz-top">
                  <span className="fw-6">SIZE GUIDE</span>
                  <div className="popup-sz-list">
                    <span className="popup-sz-item tabBtn">CM</span>
                    <span className="popup-sz-item tabBtn">IN</span>
                  </div>
                </div>
                <div className="popup-sz-ctn">
                  <div className="popup-sz-size tabPanel">
                    <img src="/sz.png" alt="" />
                  </div>
                  <div className="popup-sz-size tabPanel">
                    <img src="/sz.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="popup-sz-img">
                <img src="/sz-img.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSizeGuide;
