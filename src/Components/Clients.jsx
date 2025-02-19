import clientImg1 from "../assets/images/clients/sponsor.png";
import clientImg2 from "../assets/images/clients/sponsor-2.png";

export default function Client() {
  const clientsImgs = [
    {
      id: 1,
      imgURL: clientImg2,
    },
    {
      id: 2,
      imgURL: clientImg1,
    },
    {
      id: 3,
      imgURL: clientImg1,
    },
    {
      id: 4,
      imgURL: clientImg1,
    },
    {
      id: 5,
      imgURL: clientImg1,
    },
    {
      id: 6,
      imgURL: clientImg1,
    },
    {
      id: 7,
      imgURL: clientImg1,
    },
    {
      id: 8,
      imgURL: clientImg1,
    },
    {
      id: 9,
      imgURL: clientImg1,
    },
  ];

  return (
    <>
      <section className="clients-one">
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Sponsors and Exhibitors</div>
            <h2 className="sec-title_heading">Our Partners</h2>
          </div>
          <div className="clients-two_slide d-flex">
            {/* Client Column Start */}
            {clientsImgs.map((clients, index) => (
              <div className="clients-two_column" key={index}>
                <a href="#">
                  <img src={clients.imgURL} alt="" />
                </a>
              </div>
            ))}
            {/* Client Column End */}
          </div>
        </div>
      </section>
    </>
  );
}
