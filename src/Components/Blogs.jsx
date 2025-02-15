import { Link } from "react-router-dom";
import blogImg1 from "../assets/images/resource/news-1.jpg";
import blogImg2 from "../assets/images/resource/news-2.jpg";
import blogImg3 from "../assets/images/resource/news-3.jpg";

export default function Blogs() {
  return (
    <>
      <section className="news-one">
        <div className="auto-container">
          <div className="sec-title">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="title-box title-anim">
                <div className="sec-title_title">Get Your</div>
                <h2 className="sec-title_heading">Registration</h2>
              </div>
              {/* <div className="button-box title-anim">
                <a href="blog.html" className="theme-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">View More News</span>
                    <span className="text-two">View More News</span>
                  </span>
                </a>
              </div> */}
            </div>
          </div>

          <div className="row clearfix">
            {/* News Block */}
            <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="news-block_one-inner">
                {/* Post Info */}
                <div className="news-block_one-tag">Registration</div>
                <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg1} alt="" />
                  </Link>
                  <img src={blogImg1} alt="" />
                </div>
                <div className="news-block_one-content">
                  {/* <div className="news-block_one-date">2 May 2024</div>
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fa-regular fa-calendar fa-fw"></span>
                      by Christine
                    </li>
                    <li>
                      <span className="icon fa-solid fa-comments fa-fw"></span>
                      (03) Comments
                    </li>
                  </ul> */}
                  <h5 className="news-block_one-title">
                    <Link to="/">
                      Volunteer
                    </Link>
                  </h5>
                  <Link className="news-block_one-more" to="/">
                    Register
                  </Link>
                </div>
              </div>
            </div>

            {/* News Block */}
            <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="news-block_one-inner">
                {/* Post Info */}
                <div className="news-block_one-tag">Registration</div>
                <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg2} alt="" />
                  </Link>
                  <img src={blogImg2} alt="" />
                </div>
                <div className="news-block_one-content">
                  {/* <div className="news-block_one-date">2 May 2024</div>
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fa-regular fa-calendar fa-fw"></span>
                      by Christine
                    </li>
                    <li>
                      <span className="icon fa-solid fa-comments fa-fw"></span>
                      (03) Comments
                    </li>
                  </ul> */}
                  <h5 className="news-block_one-title">
                    <Link to="/">
                      Author
                    </Link>
                  </h5>
                  <Link className="news-block_one-more" to="/">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* News Block */}
            <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="news-block_one-inner">
                {/* Post Info */}
                <div className="news-block_one-tag">Event</div>
                <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg3} alt="" />
                  </Link>
                  <img src={blogImg3} alt="" />
                </div>
                <div className="news-block_one-content">
                  {/* <div className="news-block_one-date">2 May 2024</div>
                  <ul className="news-block_one-meta">
                    <li>
                      <span className="icon fa-regular fa-calendar fa-fw"></span>
                      by Christine
                    </li>
                    <li>
                      <span className="icon fa-solid fa-comments fa-fw"></span>
                      (03) Comments
                    </li>
                  </ul> */}
                  <h5 className="news-block_one-title">
                    <Link to="/">
                      Sponsors
                    </Link>
                  </h5>
                  <Link className="news-block_one-more" to="/">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
