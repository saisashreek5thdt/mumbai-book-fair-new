//import clientImg1 from "../assets/images/clients/sponsor.png";
import clientImg2 from "../assets/images/clients/sponsor-8.jpeg";
import clientImg3 from "../assets/images/clients/sponsor-3.png";
import clientImg4 from "../assets/images/clients/sponsor-4.png";
 import clientImg5 from "../assets/images/clients/sponsor-9.png";
import clientImg6 from "../assets/images/clients/sponsor-7.jpeg";
import clientImg7 from "../assets/images/clients/sponsor-6.jpg";
import clientImg8 from "../assets/images/clients/sponsor-10.jpg";
import clientImg9 from "../assets/images/clients/sponsor-11.png";
export default function Client() {
  const clientsImgs = [
    // {
    //   id: 1,
    //   imgURL: clientImg2,
    // },
    {
      id: 2,
      imgURL: clientImg3,
    },
    {
      id: 3,
      imgURL: clientImg4,
    },
    {
      id: 4,
      imgURL: clientImg6,
    },
    {
      id: 5,
      imgURL: clientImg5,
    },
    {
      id: 6,
      imgURL: clientImg2,
    },
    {
      id: 7,
      imgURL: clientImg7,
    },
    {
      id: 8,
      imgURL: clientImg8,
    },
    {
      id: 9,
      imgURL: clientImg9,
    },
  ];

  return (
    <>
      <section className="clients-two">
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Collaborations</div>
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
