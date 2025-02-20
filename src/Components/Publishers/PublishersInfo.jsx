import authorImg1 from "../../assets/images/publishers/publisher.png";

export default function PublishersInfo() {
  const publications = [
    {
      boothNumber: 1,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 2,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 3,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 4,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 5,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 6,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 7,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 8,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 9,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 10,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 11,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
    {
      boothNumber: 12,
      imgURL: authorImg1,
      name: "Publisher Name",
      link: "/publishers",
    },
  ];

  return (
    <>
      <section className="testimonial-two">
        <div className="auto-container">
          <div className="row clearfix">
            {publications.map((publish, index) => (
              <div
                key={index}
                className="news-block_two col-lg-3 col-md-6 col-sm-12"
              >
                <div
                  className="news-block_two-inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  {/* Post Info */}
                  <div className="news-block_two-date">
                    Booth Number: {publish.boothNumber}
                  </div>
                  <div className="news-block_two-image">
                    <a href={publish.link}>
                      <img src={publish.imgURL} alt="" />
                    </a>
                    <img src={publish.imgURL} alt="" />
                  </div>
                  <div className="news-block_two-content">
                    <h4 className="news-block_two-title">
                      <a href={publish.link}>{publish.name}</a>
                    </h4>
                    <a className="news-block_two-more" href={publish.link}>
                      Publishings
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Styled Pagination */}
          <ul className="styled-pagination text-center">
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-double-left"></span>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-double-right"></span>
              </a>
            </li>
          </ul>
          {/* End Styled Pagination */}
        </div>
      </section>
    </>
  );
}
