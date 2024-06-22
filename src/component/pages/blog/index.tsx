import  blogItems from "@/api/blog.json"
import Link from "next/link";

const BlogPage = () => {
  return (
    <>
      <div className="bn bn-thin">
        <div className="bn-wrap">
          <div className="bn-img inner">
            <img src="/pro5.jpg" alt="" />
          </div>
        </div>
      </div>
      <section className="blog">
        <div className="blog-wrap">
          <div className="blog-inner">
            <div className="blog-top">
              <h1 className="title fw-5 t-center">ALL BLOG</h1>
              <div className="fb-soft">
                <div className="ip-control">
                  <select className="re-select-main">
                    <option value="WY">A-Z</option>
                    <option value="WY">Z-A</option>
                    <option value="WY">Latest</option>
                    <option value="WY">Oldest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="blog-main">
              <div className="blog-list">
                {blogItems.map((item, index) => (
                  <div className="blog-item" key={index}>
                    <Link className="blog-img" href={`/blog/${item.id}`}>
                      <img src={item.img} alt="" />
                    </Link>
                    <div className="blog-desc">
                      <Link className="blog-name" href={`/blog/${item.id}`}>
                        {item.name}
                      </Link>
                      <p className="blog-date">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="repro-control">
                <a className="tlink" href="/blog">
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
