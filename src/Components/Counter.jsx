
import { useEffect, useState } from "react";
// import ""; 

import "../count.css";
export default function CounterOne() {

  // useEffect(() => {
  //   // Initialize Odometer for each element with the class "odometer"
  //   const odometerElements = document.querySelectorAll(".odometer");
  //   odometerElements.forEach((element) => {
  //     new Odometer({
  //       el: element,
  //       value: 0, // Initial value
  //       duration: 2000, // Animation duration in milliseconds
  //     });
  //     // Set the final value from the data-count attribute
  //     element.innerHTML = element.getAttribute("data-count");
  //   });
  // }, []);
  const [counts, setCounts] = useState({
    count1: 50,
    count2: 9911,
    count3: 0,
    count4: 10,
    count5: 100
  });
  useEffect(() => {
    const counters = [
      { id: "count1", start: 50, end: 107 },
      { id: "count2", start: 120, end: 132 },
      { id: "count3", start: 0, end: 21 },
      { id: "count4", start: 205511, end: 205848 },
      { id: "count5", start: 100, end: 145 },
    ];

    counters.forEach(({ id, start, end }) => {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(1000 / range)); // Duration is fixed at 1000ms
      const timer = setInterval(() => {
        current += increment;
        setCounts((prevCounts) => ({
          ...prevCounts,
          [id]: current,
        }));
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
    });
  }, []);

  return (
    <section className="counter-wrapper">

    <div className="counter-inner">
        <div className="container">
            <div className="row g-0" style={{display:"flex", justifyContent:"space-evenly", alignContent:"center",gap:"0px"}}  >
                <div className="col-6 col-lg-3"  >
                    <div className="py-5 text-center text-white" style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <div>
                            {/* <i className="bi bi-building count-icon"></i> */}
                        </div>
                        <div className="py-2 count">
                            <span id="count1">{counts.count1}</span>
                        </div>
                        <div style={{fontSize:"20px"}}>
                            Speakers
                        </div> 
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="py-5 text-center text-white"  style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <div>
                            {/* <i className="bi bi-people count-icon"></i> */}
                        </div>
                        <div className="py-2 count">
                            <span id="count2">{counts.count2}</span>+
                        </div>
                        <div style={{fontSize:"20px"}}>
                            Publishers
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="py-5 text-center text-white"  style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <div>
                            {/* <i className="bi bi-people count-icon"></i> */}
                        </div>
                        <div className="py-2 count">
                            <span id="count2">{counts.count5}</span>+
                        </div>
                        <div style={{fontSize:"20px"}}>
                            Booths
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="py-5 text-center text-white"  style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <div>
                            {/* <i className="bi bi-trophy count-icon"></i> */}
                        </div>
                        <div className="py-2 count">
                            <span id="count3">{counts.count3}</span>
                        </div>
                        <div style={{fontSize:"20px"}}>
                            Workshops
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-3">
                    <div className="py-5 text-center text-white"  style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                        <div>
                            {/* <i className="bi bi-graph-up count-icon"></i> */}
                        </div>
                        <div className="py-2 count">
                            <span id="count4">{counts.count4}</span>+
                        </div>
                        <div style={{fontSize:"20px"}}>
                            Guests
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    // <section className="counter-one">
    //   <div className="auto-container">
    //     <div className="inner-container">
    //       {/* Background Image */}
    //       <div
    //         className="counter-one_image"
    //         style={{ backgroundImage: "url(assets/images/background/11.JPG)" }}
    //       ></div>

    //       {/* Counter Columns */}
    //       <div className="row clearfix">
    //         {/* Speakers */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter" style={{display:"flex",gap:"10px"}}>
    //               <span className="odometer" data-count="32">+</span>
    //               <div className="counter-one_text" style={{fontSize:"24px", paddingTop:"15px"}}>Event Artists</div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Attendance */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter" style={{display:"flex",gap:"10px"}}>
    //               <span className="odometer" data-count="5">+</span>
    //               <div className="counter-one_text" style={{fontSize:"24px", paddingTop:"15px"}}>Event Stages</div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Workshops */}
    //         {/* <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter">
    //               <span
    //                 className="odometer"
    //                 data-count="8"
    //               ></span>
    //               HR
    //             </div>
    //             <div className="counter-one_text">Workshops</div>
    //           </div>
    //         </div> */}

    //         {/* Guests */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter" style={{display:"flex",gap:"10px"}}>
    //               <span className="odometer"data-count="3">+</span>
    //               <div className="counter-one_text" style={{fontSize:"24px", paddingTop:"15px"}} >Days Concert</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    // <section className="counter-one">
    //   <div className="auto-container">
    //     <div className="inner-container">
    //       <div className="counter-one_image" style={{ backgroundImage: "url(assets/images/background/11.JPG)" }}></div>
    //       <div className="row clearfix">



    //         {/* <!-- Counter Column --> */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter"><span className="odometer" data-count="124"></span>+</div>
    //             <div className="counter-one_text">Speakers</div>
    //           </div>
    //         </div>

    //         {/* <!-- Counter Column --> */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter"><span className="odometer" data-count="1,14,476"></span>+</div>
    //             <div className="counter-one_text">Attendence</div>
    //           </div>
    //         </div>

    //         {/* <!-- Counter Column --> */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12" >
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter"><span className="odometer" data-count="8"></span></div>
    //             <div className="counter-one_text">Workshops</div>
    //           </div>
    //         </div>


    //         {/* <!-- Counter Column --> */}
    //         <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
    //           <div className="counter-one_inner">
    //             <div className="counter-one_counter"><span className="odometer" data-count="235128"></span>+</div>
    //             <div className="counter-one_text">Guests</div>
    //           </div>
    //         </div>



    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};
