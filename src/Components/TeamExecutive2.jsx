import { Link } from "react-router-dom";
import speakerImg1 from "../assets/images/team/Acharya.png";
import speakerImg2 from "../assets/images/team/Milin.png";

export default function TeamExecutive2() {
  return (
    <>
      <div className="row clearfix" style={{display:"flex", alignItems:"center",justifyContent:"center", gap:"20px"}}>
        {/* Team Block Start */}
        <div className="news-block_two col-lg-4 col-md-6 col-sm-12" style={{width:"500px",}}>
          <div
            className="news-block_two-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            {/* Team Info Start */}
            <div className="news-block_two-date" style={{display:"flex", justifyContent:"center", alignItems:"center",marginTop:"325px", backgroundColor:" #cf288f" }}>CHIEF CONVENOR</div>
            <div className="news-block_two-image">
              <Link to="/">
                <img src={speakerImg1} alt="Speaker Image" />
              </Link>
              <img src={speakerImg1} alt="Speaker Image" />
            </div>
            <div className="news-block_two-content">
              <h4 className="news-block_two-title">Acharya Pawan Tripathi</h4>
              <div className="text">
                Author, Columnist, Social Worker, and Treasurer - {" "}
                <strong>
                  <em>Sri Siddhi Vinayak Temple Trust (SSVT), Mumbai</em>
                </strong>
                .
              </div>
            </div>
            {/* Team Info End */}
          </div>
        </div>
        {/* Team Block End */}
        {/* Team Block Start */}
        <div className="news-block_two col-lg-4 col-md-6 col-sm-12">
          <div
            className="news-block_two-inner wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            {/* Team Info Start */}
            <div className="news-block_two-date" style={{display:"flex", justifyContent:"center", alignItems:"center",marginTop:"325px" ,backgroundColor:" #cf288f"}}>CHIEF PATRON</div>
            <div className="news-block_two-image">
              <Link to="/">
                <img src={speakerImg2} alt="Speaker Image" />
              </Link>
              <img src={speakerImg2} alt="Speaker Image" />
            </div>
            <div className="news-block_two-content">
              <h4 className="news-block_two-title">
                Prof. Milind Sudhakar Marathe
              </h4>
              <div className="text">Chairman - National Book Trust, India</div>
              <p style={{color:"white"}}>.</p>
              
            </div>
            {/* Team Info End */}
          </div>
        </div>
        {/* Team Block End */}
      </div>
    </>
  );
}
