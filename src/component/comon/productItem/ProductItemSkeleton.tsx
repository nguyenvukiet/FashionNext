
import Link from "next/link";
import { Skeleton } from 'antd';

export default function ProductItemSkeleton() {
  return (
    <>
      <div className="pro-item">
        <div className="pro-box">
          <div className="pro-img">

            <Link className="box" href="#">
                <Skeleton.Image active/>
            </Link>
          </div>
          <div className="pro-desc">
            <div className="pro-desc-inner">
              <div className="pro-desc-left">
              <Skeleton.Button active/>
              </div>
              <div className="pro-desc-right">
                <div className="pro-price">
                  <div className="pro-price-inner">
                    <p className="price-new">
                        <Skeleton.Button active/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pro-desc-txt"
            >
              <Skeleton.Button active/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
