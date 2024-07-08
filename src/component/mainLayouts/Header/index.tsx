import PopupCart from "@/component/comon/popup/PopupCart";
import PopupLogin from "@/component/comon/popup/PopupLogin";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useCart } from "@/api/cart/useCart";
import { cart } from "@/api/product";


const Header = () => {

  const {quantityTotal} = useCart();

  //show mobile nav
  const [openMobile, setOpenMobile] = useState(false);
  const handleClickMobile = () => {
    setOpenMobile((prevState) => !prevState);
  };
  const handleCloseMobile = () => {
    setOpenMobile(false);
  };

//   // show form search---------------------------------------------------------
  const [openSrch, setOpenSrch] = useState(false);
  const searchRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickSrch = () => {
    // setOpenSrch(prevState => !prevState);
    setOpenSrch(true);
  };
  const handleCloseSrch = () => {
    setOpenSrch(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        handleCloseSrch();
      }
    };

    // Thêm event listener khi component mount
    document.addEventListener("mousedown", handleClickOutside);

    // Dọn dẹp event listener khi component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

//   //show popup cart--------------------------------------------------------
  const [openCart, setOpenCart] = useState(false);

  const handleClickCart = () => {
    // setOpenCart(prevState => !prevState);
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  useEffect(() => {
    if (openCart === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openCart]);

//   // show popup Login--------------------------------------------------------
  const [openLogin, setOpenLogin] = useState(false);
  const handleClickLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  useEffect(() => {
    if (openLogin === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openLogin]);

  return (
    <header className={`header ${openSrch ? "show-form" : ""}`}>
      <div className="header-wrapper">
        <div className="container">
          <div className="header-wrap">
            <div className="header-burger">
              <button
                className={`hamburger ${openMobile ? "active" : ""}`}
                id="hamburger"
                onClick={handleClickMobile}
                ref={buttonRef}
              >
                <img src="/hamburger.svg" alt="" />
                <span className="icon-close">
                  <img src="/close.png" alt="" />
                </span>
              </button>
            </div>
            <div className="header-logo">
              <Link className="custom-logo-link" href="/">
                <img src="/logo.svg" alt="" decoding="async" loading="lazy" />
              </Link>
            </div>
            <div className="header-logo-mobile">
              <a className="custom-logo-link" href="/" rel="home">
                <img
                  src="/logo-mo.svg"
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="header-gr">
              <nav className="header-nav">
                <div className="menu">
                  <div className="menu-nav">
                    <ul className="menu-list" id="menu-primary">
                      <li className="menu-item current-menu-item page_item current_page_item">
                        <Link className="menu-link" href="/">
                          HOME
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" href="/about">
                          ABOUT
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" href="/">
                          PRODUCTS
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" href="/blog">
                          BLOG
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" href="/">
                          CONTACT
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="header-control">
                <button
                  className="header-btn-search header-action"
                  onClick={handleClickSrch}
                >
                  <div className="header-action-icon">
                    <span className="icon">
                      <img src="/search.svg" alt="" />
                    </span>
                  </div>
                </button>

                <div className="header-action">
                  <button
                    className="header-action-icon popup-open"
                    onClick={handleClickLogin}
                  >
                    <span className="icon">
                      <img src="/user.svg" alt="" />
                    </span>
                  </button>
                </div>
                <div className="header-action">
                  <button
                    className="header-action-icon"
                    onClick={handleClickCart}
                  >
                    <span className="icon">
                      <img src="/cart.svg" alt="" />
                    </span>
                    <span className="text">{quantityTotal}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`mobile-overlay ${openMobile ? "open" : ""}`}
          onClick={handleCloseMobile}
        ></div>
        <div className={`mobile ${openMobile ? "open" : ""}`}>
          <div className="mobile-con">
            <button className="mobile-close" onClick={handleCloseMobile}>
              <img src="/close.png" alt="" />
            </button>
            <div className="mobile-wr">
              <div className="mobile-nav">
                <ul className="menu-list">
                  <li className="menu-item">
                    <a className="menu-link" href="/">
                      HOME
                    </a>
                    <span className="show-sub-menu-js icon">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/">
                      ABOUT
                    </a>
                    <span className="show-sub-menu-js icon">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/">
                      PRODUCTS
                    </a>
                    <span className="show-sub-menu-js icon">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/">
                      BLOG
                    </a>
                    <span className="show-sub-menu-js icon">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/">
                      CONTACT
                    </a>
                    <span className="show-sub-menu-js icon">
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                </ul>
                <div className="mobile-nav-btn">
                  <a className="link" href="/">
                    SHOP ALL PRODUCTS
                  </a>
                </div>
              </div>
            </div>

            <div className="mobile-contact">
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    Về chúng tôi
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    Chính sách bảo hành
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    kietngyn.it@gmail.com
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    0868077087
                  </a>
                </li>
              </ul>
              <div className="footer-social">
                <a className="footer-social-link" href="/">
                  <img src="/fb.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openSrch && (
        <div className="header-sform" ref={searchRef}>
          <button className="header-sform-close" onClick={handleCloseSrch}>
            <span className="text">Đóng</span>
          </button>
          <div className="header-srch-box"> 
                        <div className="header-srch-input">
                          <input handleChange type="text" placeholder="What are you looking for?" title="What are you looking for?"/>
                          <button className="btn btn-trans" type="submit"><span className="icon"><i className="fa-light fa-magnifying-glass"></i></span></button>
                        </div>
                        <div className="header-srch-re"> 
                          <div className="header-srch-list"> 
                            <div className="cmini-item">   
                              <div className="cmini-box"> 
                                <div className="cmini-img"><a className="box" href="/"> <img src="./cmini.jpg" alt=""/></a></div>
                                <div className="cmini-desc"> 
                                  <div className="cmini-desc-top"> <a className="cmini-name" href="/">VALLAS DRESS </a></div>
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
        </div>
      )}

      <PopupCart openCart={openCart} handleCloseCart={handleCloseCart} />

      <PopupLogin openLogin={openLogin} handleCloseLogin={handleCloseLogin} />
    </header>
  );
};

export default Header;
