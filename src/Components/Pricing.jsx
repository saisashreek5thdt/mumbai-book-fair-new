import priceImg1 from "../assets/images/background/pattern-4.png";
import TeamExecutive2 from "./TeamExecutive2";

export default function Pricing() {
  const pricePattern1 = {
    backgroundImage: `url(${priceImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="price-one" id="team">
        <div className="price-one_pattern" style={pricePattern1}></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Team</div>
            <h2 className="sec-title_heading">Leadership</h2>
          </div>
          <TeamExecutive2 />
        </div>
      </section>
    </>
  );
}
