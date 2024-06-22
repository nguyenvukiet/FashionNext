import { useEffect, useState } from "react";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import  faqItems  from '@/api/faq.json';
import PopupFeedback from "@/component/comon/popup/PopupFeedback";
import PopupSizeGuide from "@/component/comon/popup/PopupSize";
import LightGalleryComponent from "@/component/comon/lightGallery/LightGallery";

const PdpPage = () => {

  console.log(faqItems?.[0].title)


  const [openIndex, setOpenIndex] = useState(null);
  const handleShowHide = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  //mảng của light gallery
  const gallery1Images = ["/pro1.jpg", "/pro2.jpg"];
  const gallery2Images = ["/pro3.jpg", "/pro4.jpg"];

  // open popup size guide--------------------------------------------------
  const [openSize, setOpenSize] = useState(false);
  const handleClickSize = () => {
    // setOpenSize(prevState => !prevState);
    setOpenSize(true);
  };
  const handleCloseSize = () => {
    setOpenSize(false);
  };
  useEffect(() => {
    if (openSize === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openSize]);

  // open popup feed back ------------------------------------------------
  const [openFeedback, setOpenFeedback] = useState(false);
  const handleClickFeedback = () => {
    // setOpenFeedback(prevState => !prevState);
    setOpenFeedback(true);
  };
  const handleCloseFeedback = () => {
    setOpenFeedback(false);
  };
  useEffect(() => {
    if (openFeedback === true) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openFeedback]);

  return (
    <>
      <div className="pdp">
        <div className="pdp-wrap">
          <div className="out-container">
            <div className="pdp-inner">
              <div className="pdp-flex">
                <div className="pdp-left">
                  <div className="pdp-slide bnSwiper">
                    <Swiper
                      modules={[Navigation, Pagination, EffectCreative]}
                      effect="creative"
                      navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                      }}
                      pagination={{ el: ".swiper-pagination", clickable: true }}
                      grabCursor={true}
                      creativeEffect={{
                        prev: {
                          translate: ["-20%", 0, -1],
                        },
                        next: {
                          translate: ["100%", 0, 0],
                        },
                      }}
                    >
                      {/* {productItem.img.map((img, index) => (
                        <SwiperSlide key={index}>
                          <div className="bnh-parallax">
                            <div className="pdp-img inner">
                              <img src={Object.values(img)[0]} alt="" />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))} */}
                    </Swiper>
                    <div className="swiper-control posi plus">
                      <div className="swiper-control-btn swiper-prev">
                        <i className="fa-light fa-chevron-left"></i>
                      </div>
                      <div className="swiper-control-btn swiper-next">
                        <i className="fa-light fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pdp-right">
                  <div className="pdp-right-inner">
                    <div className="breadcrumb">
                      <div className="breadcrumb-inner">
                        <ul className="breadcrumb-list">
                          <li className="breadcrumb-item" data-aos="fade-left">
                            <a className="breadcrumb-link" href="/">
                              PRODUCT
                            </a>
                          </li>
                          <li className="breadcrumb-item" data-aos="fade-left">
                            <a className="breadcrumb-link" href="/">
                              Product name json
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pdp-gr">
                      <div className="pdp-row">
                        <h1 className="pdp-name">
                          Product name json
                          <span className="pdp-heart">
                            <i className="fa-regular fa-heart"></i>
                          </span>
                        </h1>
                        <p className="txt t14">
                          This item belongs to the Casual Luxe collection
                        </p>
                        <div className="pdp-price">
                          <div className="price">
                            <p className="price-odd">
                              {/* {productItem.price.toLocaleString()}
                              {productItem.currency} */}
                            </p>
                            <p className="price-new">
                              {/* {priceDiscountSimple.toLocaleString()}
                              {productItem.currency} */}
                            </p>
                          </div>
                          <p className="pdp-info">
                            <span className="txt">
                              *or 98.000 VNĐ x 3 by Fundiin
                            </span>
                            <span className="icon">
                              <img src="/pdp-info.svg" alt="" />
                            </span>
                          </p>
                        </div>
                      </div>
                      {/* {productItem.type === "complie" ? (
                        <>
                          <div className="pdp-row">
                            <p className="txt">Color: </p>
                            <div className="pdp-opt-color">
                              <div className="cmini-option-row option-color">
                                <div className="recheck">
                                  <div className="recheck-block">
                                    {productItem?.options?.color.map(
                                      (productItem, index) => (
                                        <div
                                          className="recheck-item"
                                          key={index}
                                        >
                                          <input
                                            // checked={
                                            //   productItem.color_name === chooseColor
                                            // }
                                            value={productItem.color_name}
                                            onChange={(e) => e}
                                            className="recheck-input"
                                            type="radio"
                                            name="pdp-color"
                                          />
                                          <div
                                            className="recheck-checkbox"
                                            style={{
                                              background: `${productItem.color}`,
                                            }}
                                          ></div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pdp-row">
                            <p className="txt">Size:</p>
                            <div className="pdp-opt-sz">
                              <div className="cmini-option-row option-size">
                                <div className="recheck">
                                  <div className="recheck-block">
                                    {productItem?.options?.size.map(
                                      (dataSize, index) => (
                                        <div
                                          className="recheck-item"
                                          key={index}
                                        >
                                          <input
                                            value={dataSize.size_name}
                                            onChange={(e) => e}
                                            className="recheck-input"
                                            type="radio"
                                            name={` color ${productItem?.id}`}
                                          />
                                          <div className="recheck-checkbox">
                                            <span className="txt">
                                              {dataSize.size_name}
                                            </span>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="pdp-price">
                                <span className="txt">
                                  Model measurements: 48kg - 1m60 - Size S
                                </span>
                                <button
                                  className="tlink"
                                  onClick={handleClickSize}
                                >
                                  Size guide
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="pdp-control">
                            <a className="btn btn-trans" href="/">
                              <span className="text">ADD TO CART</span>
                            </a>
                            <a className="btn btn-pri" href="/">
                              <span className="text">BUY NOW</span>
                            </a>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="pdp-row">
                            <p className="txt">Color: </p>
                            <div className="pdp-opt-color">
                              <div className="cmini-option-row option-color">
                                <div className="recheck">
                                  <div className="recheck-block">
                                    <div className="recheck-item">
                                      <input
                                        className="recheck-input"
                                        type="radio"
                                        name=""
                                        hidden
                                        checked
                                      />
                                      <div
                                        className="recheck-checkbox"
                                        style={{
                                          background: `${productItem.color}`,
                                        }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pdp-row">
                            <p className="txt">Size:</p>
                            <div className="pdp-opt-sz">
                              <div className="cmini-option-row option-size">
                                <div className="recheck">
                                  <div className="recheck-block">
                                    <div className="recheck-item">
                                      <input
                                        className="recheck-input"
                                        type="radio"
                                        name=""
                                        hidden
                                        checked
                                      />
                                      <div className="recheck-checkbox">
                                        <span className="txt">
                                          {productItem.size_name}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="pdp-price">
                                <span className="txt">
                                  Model measurements: 48kg - 1m60 - Size S
                                </span>
                                <button
                                  className="tlink"
                                  onClick={handleClickSize}
                                >
                                  Size guide
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="pdp-control">
                            <a className="btn btn-trans" href="/">
                              <span className="text">ADD TO CART</span>
                            </a>
                            <a className="btn btn-pri" href="/">
                              <span className="text">BUY NOW</span>
                            </a>
                          </div>
                        </>
                      )} */}

                      <div className="pdp-more">
                        <p className="txt t-center">
                          Free shipping orders over 500k
                          <br />
                          Member promotion program up to 10%
                          <br />
                          Return within 7 days
                          <br />
                          More than 100 new products every month
                        </p>
                      </div>
                      <div className="pdp-faq">
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
                              {openIndex === index && (
                                <div className="faq-item-ctn tech-body open">
                                  <ul>
                                    {item.content.map((line, idx) => (
                                      <li key={idx}>{line}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
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
      <PopupSizeGuide openSize={openSize} handleCloseSize={handleCloseSize} />
      <section className="fb">
        <div className="fb-wrap">
          <div className="container">
            <div className="fb-inner">
              <p className="txt t-center fw-5 mb-40">FEEDBACK</p>
              <div className="fb-top">
                <div className="fb-top-left">
                  <div className="fb-soft">
                    <div className="ip-control">
                      <select className="re-select-main">
                        <option defaultValue disabled="" value="AL">
                          Highest to Lowest Rating
                        </option>
                        <option value="WY">Lowest to Lowest Rating</option>
                        <option value="WY">Newset</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="fb-top-mid">
                  <div className="fb-top-item">
                    {" "}
                    <span className="txt">5.0 Overall Rating</span>
                    <div className="star">
                      <div className="star-list">
                        <div className="star-flex star-empty">
                          <img className="icon" src="/star-fill.png" alt="" />
                          <img className="icon" src="/star-fill.png" alt="" />
                          <img className="icon" src="/star-fill.png" alt="" />
                          <img className="icon" src="/star-fill.png" alt="" />
                          <img className="icon" src="/star-fill.png" alt="" />
                        </div>
                        <div className="star-flex star-filter">
                          <img className="icon" src="/star.png" alt="" />
                          <img className="icon" src="/star.png" alt="" />
                          <img className="icon" src="/star.png" alt="" />
                          <img className="icon" src="/star.png" alt="" />
                          <img className="icon" src="/star.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fb-top-right">
                  <button
                    className="btn btn-trans full"
                    onClick={handleClickFeedback}
                  >
                    <span className="txt">ADD A FEEDBACK</span>
                  </button>
                </div>
              </div>
              <div className="fb-main">
                <div className="fb-list">
                  <div className="fb-item">
                    <div className="fb-flex">
                      <div className="fb-left">
                        <p className="fb-name">Hari Won</p>
                        <div className="fb-left-row">
                          <p className="txt">Height:5'6" - 5'8"</p>
                          <p className="txt">Weight (lbs):121 - 140 lb</p>
                          <p className="txt">Body Type:Athletic</p>
                        </div>
                        <div className="fb-left-row fb-left-mb">
                          <p className="txt">Size Purchased:M</p>
                          <p className="txt">Usual Size:M</p>
                          <p className="txt">Bust Size:38C</p>
                        </div>
                      </div>
                      <div className="fb-right">
                        <div className="star">
                          <div className="star-list">
                            <div className="star-flex star-empty">
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                            </div>
                            <div className="star-flex star-filter">
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="fb-right-desc">
                          <p className="title">Beautiful sweater.</p>

                          <LightGalleryComponent images={gallery1Images} />

                          <div className="text-block-js mt-12">
                            <p className="txt t14 txt-loadMore">
                              This sweater is perfect. I love the bubblegum
                              color. It has a little purple in it and looks good
                              next to my skin. We live in the high desert and it
                              is cold right now. It is what I reach for right
                              when a wake up. The weight is just right. The
                              color is cheery.
                            </p>
                          </div>
                          <p className="fb-date">5 days ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fb-item">
                    <div className="fb-flex">
                      <div className="fb-left">
                        <p className="fb-name">Hari Won</p>
                        <div className="fb-left-row">
                          <p className="txt">Height:5'6" - 5'8"</p>
                          <p className="txt">Weight (lbs):121 - 140 lb</p>
                          <p className="txt">Body Type:Athletic</p>
                        </div>
                        <div className="fb-left-row fb-left-mb">
                          <p className="txt">Size Purchased:M</p>
                          <p className="txt">Usual Size:M</p>
                          <p className="txt">Bust Size:38C</p>
                        </div>
                      </div>
                      <div className="fb-right">
                        <div className="star">
                          <div className="star-list">
                            <div className="star-flex star-empty">
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                              <img
                                className="icon"
                                src="/star-fill.png"
                                alt=""
                              />
                            </div>
                            <div className="star-flex star-filter">
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                              <img className="icon" src="/star.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="fb-right-desc">
                          <p className="title">Beautiful sweater.</p>

                          <LightGalleryComponent images={gallery2Images} />

                          <div className="text-block-js mt-12">
                            <p className="txt t14 txt-loadMore">
                              This sweater is perfect. I love the bubblegum
                              color. It has a little purple in it and looks good
                              next to my skin. We live in the high desert and it
                              is cold right now. It is what I reach for right
                              when a wake up. The weight is just right. The
                              color is cheery.
                            </p>
                          </div>
                          <p className="fb-date">5 days ago </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fb-control">
                  <div className="tlink">
                    <span className="text">READ MORE REVIEWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopupFeedback
        openFeedback={openFeedback}
        handleCloseFeedback={handleCloseFeedback}
      />
    </>
  );
};

export default PdpPage;
