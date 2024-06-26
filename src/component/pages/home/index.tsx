import { productApi } from "@/api/product";
import ProductItem from "@/component/comon/productItem/ProductItem";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomePage = () => {
  const [listLayout, setListLayout] = useState(4);
  const [activeButton, setActiveButton] = useState(4);
  const handleChangeLayout = (layout) => {
    setListLayout(layout);
    setActiveButton(layout);
  };

  const { data: dataProduct, isLoading } = useQuery<any>({
    queryKey: ["DATA_PRODUCT"],
    queryFn: productApi.getProduct,
  });
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

 const productItems = dataProduct?.products?.items;


  return (
    <>
      <div className="bn">
        <div className="bn-wrap">
          <div className="bn-slide bnSwiper">
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
              <SwiperSlide>
                <div className="bnh-parallax">
                  <div className="bn-img inner">
                    <img src="/bn1.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bnh-parallax">
                  <div className="bn-img inner">
                    <img src="/bn2.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bnh-parallax">
                  <div className="bn-img inner">
                    <img src="/bn3.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-control posi plus">
              <div className="swiper-control-btn swiper-prev">
                <i className="fa-light fa-chevron-left"></i>
              </div>
              <div className="swiper-control-btn swiper-next">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <section className="pcate">
        <div className="pcate-wrap">
          <div className="out-container">
            <div className="pcate-inner">
              <div className="pcate-top">
                <p className="txt"></p>
                <div className="pcate-top-title">
                  <div className="pcate-top-list">
                    <Link className="pcate-top-link" href="/">
                      RECHIC
                    </Link>
                    <Link className="pcate-top-link active" href="/">
                      CARACLUB
                    </Link>
                    <Link className="pcate-top-link" href="/">
                      DYDY
                    </Link>
                  </div>
                </div>
                <div className="sfilter">
                  <div className="sfilter-list">
                    <button
                      className={`sfilter-item ${
                        activeButton === 2 ? "active" : ""
                      }`}
                      onClick={() => handleChangeLayout(2)}
                    >
                      <img src="/filter1.svg" alt="" />
                    </button>
                    <button
                      className={`sfilter-item ${
                        activeButton === 4 ? "active" : ""
                      }`}
                      onClick={() => handleChangeLayout(4)}
                    >
                      <img src="/filter2.svg" alt="" />
                    </button>
                    <button
                      className={`sfilter-item ${
                        activeButton === 6 ? "active" : ""
                      }`}
                      onClick={() => handleChangeLayout(6)}
                    >
                      <img src="/filter3.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pcate-main">
                <div
                  className="pcate-list sfilter-list-js"
                  data-list={listLayout}
                >
                  {productItems?.map((item, index) => (
                      <ProductItem key={index} productItem={item}/>
                  ))} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hjoin">
        <div className="hjoin-wrap">
          <div className="hjoin-top">
            <h1 className="title t-center fw-5">JOIN WITH US</h1>
          </div>
          <div className="hjoin-main">
            <div className="hjoin-list">
              <div className="ab-item">
                <div className="ab-box">
                  <div className="ab-img">
                    {" "}
                    <img src="/join1.jpg" alt="" />
                  </div>
                  <a className="ab-hover" href="/">
                    {" "}
                    <span className="ab-hover-inner">
                      <span className="ab-item-title">CARACLUB</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="ab-item">
                <div className="ab-box">
                  <div className="ab-img">
                    {" "}
                    <img src="/join2.jpg" alt="" />
                  </div>
                  <a className="ab-hover" href="/">
                    {" "}
                    <span className="ab-hover-inner">
                      <span className="ab-item-title">RECHIC</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="ab-item">
                <div className="ab-box">
                  <div className="ab-img">
                    {" "}
                    <img src="/join3.jpg" alt="" />
                  </div>
                  <a className="ab-hover" href="/">
                    {" "}
                    <span className="ab-hover-inner">
                      <span className="ab-item-title">DYDY</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;

