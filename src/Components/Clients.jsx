import clientImg1 from "../assets/images/clients/1.png";
import clientImg2 from "../assets/images/clients/2.png";
import clientImg3 from "../assets/images/clients/3.png";
import clientImg4 from "../assets/images/clients/4.png";
import clientImg5 from "../assets/images/clients/5.png";
import clientImg6 from "../assets/images/clients/6.png";
import clientImg7 from "../assets/images/clients/7.png";
import clientImg8 from "../assets/images/clients/8.png";

export default function Client() {
  return (
    <>
      <section className="clients-one">
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Sponsors and Exhibitors</div>
            <h2 className="sec-title_heading">Appreciate Our Kind Partners</h2>
          </div>
          <div className="row clearfix">
            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg1} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg2} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg3} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg4} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg5} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg6} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg7} alt="" />
              </a>
            </div>

            {/* Client Column */}
            <div className="clients-one_column col-lg-3 col-md-4 col-sm-6">
              <a href="#">
                <img src={clientImg8} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
