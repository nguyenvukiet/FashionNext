import { useRouter } from "next/router";
import  blogItems  from '@/api/blog.json';


const BlogDePage = () => {

    const router = useRouter()
  const blogItem = blogItems.find(item => item.id === router.query.slug); // Assuming blogItems is accessible here

  if (!blogItem) {
    return <div>Blog post not found</div>;
  }
  return (
    <>
       <div className="bn bn-thin bn-text"> 
        <div className="bn-wrap"> 
          <div className="bn-img inner"> <img src={blogItem.img} alt=""/>
          </div>
          <div className="bn-desc">
            <h1 className="title t24 fw-7 t-center">{blogItem.name}</h1>
            <p className="txt t-center t14">{blogItem.date}</p>
          </div>
        </div>
      </div>
      <section className="dblog"> 
        <div className="dblog-wrap"> 
          <div className="container"> 
            <div className="dblog-inner"> 
              <div className="dblog-txt"> 
                <p className="fw-7 t-up t-center">{blogItem.desc}</p>
              </div>
              <div className="dblog-img"> <img src="/dblog1.jpg" alt=""/>
              </div>
              <div className="dblog-txt"> 
                <p className="fw-7">Color It In</p>
                <p className="txt mt-10">New Year’s Eve is a celebration and what says festive more than a bold color palette? If you’re color shy, there’s never been a better excuse to try adding a vibrant pop of color to your look—even if it’s just in your shoes or accessories. If you’re a color fan, find your favorite hue and amp up the volume with a popping representation. It could be a statement piece, a top-to-toe matching look, or even a clash of colors. Whatever your flavor, just remember to be color confident and it will work for you. Extra points if you do colorful makeup too.</p>
              </div>
              <div className="dblog-flex"> 
                <div className="dblog-img"> <img src="/dblog2.jpg" alt=""/>
                </div>
                <div className="dblog-img"> <img src="/dblog3.jpg" alt=""/>
                </div>
              </div>
              <div className="dblog-txt"> 
                <p className="fw-7">Dramatic Monochromatic</p>
                <p className="txt mt-10">At the opposite end of the color spectrum sits the monochrome look. Easy to style, innately elegant, whether you’re all-black, all-white, or mixing black and white, it’s a strikingly simple look that is effortless to achieve. Whether a LBD, a pant suit, a blazer and slip dress, a shirt and pants, you really can’t go wrong with the classics. And, you’ll wear any of these looks on repeat too. </p>
              </div>
              <div className="dblog-txt mt-40">
                <p className="fw-7">The Onesie</p>
                <p className="txt mt-10">If decision-fatigue is your thing, then an instant look in one could be the way to go. Think a jumpsuit, romper, or a dress, the point is keeping it simple and not overthinking it. Just throw on your favorite jewelry and pair your look with your most appropriate NYE shoes and you’re good to go. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDePage;
