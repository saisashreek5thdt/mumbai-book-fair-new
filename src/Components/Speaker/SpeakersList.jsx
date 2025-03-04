import  { useState, useEffect } from 'react';
import speakersPatternImg1 from "../../assets/images/background/pattern-4.png";
import speakersPatternImg3 from "../../assets/images/background/pattern-6.png";

// import speakerImg1 from "../../assets/images/Speakers/Ankur_Warikoo.png";
// import speakerImg2 from "../../assets/images/Speakers/Chandraprakash_Dwivedi.png";
// import speakerImg3 from "../../assets/images/Speakers/Govind_Dolakiya.png";
// import speakerImg4 from "../../assets/images/Speakers/kailash-kher-680x680.png";
// import speakerImg5 from "../../assets/images/Speakers/Shiv_Khera.png";
// import speakerImg6 from "../../assets/images/Speakers/Upendra_Rai.png";
// import speakerImg7 from "../../assets/images/Speakers/VP_Speaker.png";
// import speakerImg8 from "../../assets/images/Speakers/Ankur_Warikoo.png";
// import { Link } from "react-router-dom";

import { speakers } from '../../utils/speakerData';
export default function SpeakersList() {
  // State to track selected year and speakers list
  // const [selectedYear, setSelectedYear] = useState('2023');
  const [displayedSpeakers, setDisplayedSpeakers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const speakersPerPage = 12;

  // Create base speakers list with year-specific IDs
  // const createSpeakersForYear = (year) => [
  //   {
  //     id: `${year}-1`,
  //     name: "Ankur Warikoo",
  //     role: "Entrepreneur, Author, and Public Speaker",
  //     image: speakerImg1
  //   },
  //   {
  //     id: `${year}-2`,
  //     name: "Dr.Chandraprakash Dwivedi",
  //     role: "Indian Film Director and Screenwriter",
  //     image: speakerImg2
  //   },
  //   {
  //     id: `${year}-3`,
  //     name: "Govind Dholakia",
  //     role: "Founder and Chairman of Shree Ramkrishna Exports Pvt. Ltd",
  //     image: speakerImg3
  //   },
  //   {
  //     id: `${year}-4`,
  //     name: "Kailash Kher",
  //     role: "Indian Playback Singer and Music Composer",
  //     image: speakerImg4
  //   },
  //   {
  //     id: `${year}-5`,
  //     name: "Shiv Khera",
  //     role: "Author, Professional Speaker, and Motivational Trainer",
  //     image: speakerImg5
  //   },
  //   {
  //     id: `${year}-6`,
  //     name: "Upendra Rai",
  //     role: "Senior Journalist and Author",
  //     image: speakerImg6
  //   },
  //   {
  //     id: `${year}-7`,
  //     name: "Vaibhav Purandare",
  //     role: "Author and Journalist",
  //     image: speakerImg7
  //   },
  //   {
  //     id: `${year}-8`,
  //     name: "Ankur Warikoo",
  //     role: "Entrepreneur, Author, and Public Speaker",
  //     image: speakerImg8
  //   },
  //   {
  //     id: `${year}-9`,
  //     name: "Ankur Warikoo",
  //     role: "Entrepreneur, Author, and Public Speaker",
  //     image: speakerImg1
  //   },
  //   {
  //     id: `${year}-10`,
  //     name: "Dr.Chandraprakash Dwivedi",
  //     role: "Indian Film Director and Screenwriter",
  //     image: speakerImg2
  //   },
  //   {
  //     id: `${year}-11`,
  //     name: "Govind Dholakia",
  //     role: "Founder and Chairman of Shree Ramkrishna Exports Pvt. Ltd",
  //     image: speakerImg3
  //   },
  //   {
  //     id: `${year}-12`,
  //     name: "Kailash Kher",
  //     role: "Indian Playback Singer and Music Composer",
  //     image: speakerImg4
  //   },
  //   {
  //     id: `${year}-13`,
  //     name: "Shiv Khera",
  //     role: "Author, Professional Speaker, and Motivational Trainer",
  //     image: speakerImg5
  //   },
  //   {
  //     id: `${year}-14`,
  //     name: "Upendra Rai",
  //     role: "Senior Journalist and Author",
  //     image: speakerImg6
  //   },
  //   {
  //     id: `${year}-15`,
  //     name: "Vaibhav Purandare",
  //     role: "Author and Journalist",
  //     image: speakerImg7
  //   },
  //   {
  //     id: `${year}-16`,
  //     name: "Ankur Warikoo",
  //     role: "Entrepreneur, Author, and Public Speaker",
  //     image: speakerImg8
  //   }
  // ];

  // Initialize speakers for 2023 on component mount
  useEffect(() => {
    setDisplayedSpeakers(speakers);
  }, []);

    // Calculate total pages
    const totalPages = Math.ceil(displayedSpeakers.length / speakersPerPage);

    // Get current speakers for the page
  const getCurrentSpeakers = () => {
    const startIndex = (currentPage - 1) * speakersPerPage;
    const endIndex = startIndex + speakersPerPage;
    return displayedSpeakers.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const speakersPattern1 = {
    backgroundImage: `url(${speakersPatternImg1})`,
    backgroundSize: "cover",
  };

  const speakersPattern3 = {
    backgroundImage: `url(${speakersPatternImg3})`,
    backgroundSize: "cover",
  };

  const textNone = {
    textTransform: "none",
  };

  const titleHeading = {
    marginBottom: "15px",
    fontSize: "36px",
    fontWeight: "700",
  };

  // Handle year selection
  // const handleYearClick = (year) => {
  //   setSelectedYear(year);
  //   // Create fresh list of speakers for the selected year
  //   setDisplayedSpeakers(createSpeakersForYear(year));
  // };

  return (
    <>
      <section className="speakers-one">
        <div className="speakers-one_pattern" style={speakersPattern1}></div>
        <div className="speakers-one_pattern-two" style={speakersPattern3}></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title" style={textNone}>
              INVITED SPEAKERS
            </div>
            <h2 className="sec-title_heading" style={titleHeading}>
              Speakers Invited for Mumbai Book Festival 2025
            </h2>
          </div>
          
          {/* Year selection buttons */}
          {/* <div className="row d-flex justify-content-center align-items-center gap-0 mt-4"
            style={{ gap: "25px", flexWrap: "nowrap", margin: "30px" }}>
            {["2023", "2024", "2025"].map((year) => (
              <div key={year} className="col-auto m-0 p-0">
                <div className="about-one_button">
                  <button 
                    onClick={() => handleYearClick(year)}
                    className={`theme-btn btn-style-one ${selectedYear === year ? 'active' : ''}`}
                  >
                    <span className="btn-wrap">
                      <span className="text-one">{year}</span>
                      <span className="text-two">{year}</span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div> */}

          {/* Speakers Grid */}
          <div className="row clearfix">
            {getCurrentSpeakers().map((speaker) => (
              <div key={speaker.id} className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
                <div 
                  className="speaker-block_one-inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="speaker-block_one-image">
                    <img src={speaker.imgUrl} alt={speaker.name} />
                  </div>
                  <div className="speaker-block_one-content">
                    <h4 className="speaker-one_title">
                      <a href="speaker-detail.html">{speaker.name}</a>
                    </h4>
                    <div className="speaker-one_detail">
                      {speaker.designation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <ul className="styled-pagination text-center">
            <li className="next" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              <a >
                <span className="fa fa-angle-double-left"></span>
              </a>
            </li>
            {/* <li>
              <a href="#" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li> */}
            {/* Dynamically Generated Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li key={pageNumber} className={currentPage === pageNumber ? "active" : ""}>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                handlePageChange(pageNumber);
              }}>
                {pageNumber}
              </a>
            </li>
          );
        })}
            <li className="next" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              <a>
                <span className="fa fa-angle-double-right"></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
















//original code


// import speakersPatternImg1 from "../../assets/images/background/pattern-4.png";
// //import speakersPatternImg2 from "../../assets/images/background/pattern-5.png";
// import speakersPatternImg3 from "../../assets/images/background/pattern-6.png";

// import speakerImg1 from "../../assets/images/Speakers/Ankur_Warikoo.png";
// import speakerImg2 from "../../assets/images/Speakers/Chandraprakash_Dwivedi.png";
// import speakerImg3 from "../../assets/images/Speakers/Govind_Dolakiya.png";
// import speakerImg4 from "../../assets/images/Speakers/kailash-kher-680x680.png";
// import speakerImg5 from "../../assets/images/Speakers/Shiv_Khera.png";
// import speakerImg6 from "../../assets/images/Speakers/Upendra_Rai.png";
// import speakerImg7 from "../../assets/images/Speakers/VP_Speaker.png";
// import speakerImg8 from "../../assets/images/Speakers/Ankur_Warikoo.png";
// import { Link } from "react-router-dom";

// export default function SpeakersList() {
//   const speakersPattern1 = {
//     backgroundImage: `url(${speakersPatternImg1})`,
//     backgroundSize: "cover",
//   };

//   // const speakersPattern2 = {
//   //   backgroundImage: `url(${speakersPatternImg2})`,
//   //   backgroundSize: "cover",
//   // };

//   const speakersPattern3 = {
//     backgroundImage: `url(${speakersPatternImg3})`,
//     backgroundSize: "cover",
//   };

//   const textNone = {
//     textTransform: "none",
//   };

//   const titleHeading = {
//     marginBottom: "15px",
//     fontSize: "36px",
//     fontWeight: "700",
//   };

//   return (
//     <>
//       <section className="speakers-one">
//         <div className="speakers-one_pattern" style={speakersPattern1}></div>
//         <div
//           className="speakers-one_pattern-two"
//           style={speakersPattern3}
//         ></div>
//         <div className="auto-container">
//           <div className="sec-title title-anim centered">
//             <div className="sec-title_title" style={textNone}>
//               Speakers Experts
//             </div>
//             <h2 className="sec-title_heading" style={titleHeading}>
//               Meet Speakers For Events
//             </h2>
//           </div>
//           <div className="row d-flex justify-content-center align-items-center gap-0 mt-4"
//               style={{ gap: "25px", flexWrap: "nowrap", margin:  "30px" }}>
//                       <div className="col-auto m-0  p-0">
//                           <div className="about-one_button">
//                             <Link to="/speakers" className="theme-btn btn-style-one">
//                               <span className="btn-wrap">
//                                 <span className="text-one">2023</span>
//                                   <span className="text-two">2023</span>
//                                     </span>
//                                       </Link>
//                                           </div>
//                                             </div>
//                                             <div className="col-auto m-0 p-0">
//                                             <div className="about-one_button">
//                                             <Link to="/speakers" className="theme-btn btn-style-one">
//                                             <span className="btn-wrap">
//                                             <span className="text-one">2024</span>
//                                               <span className="text-two">2024</span>
//                                             </span>
//                                             </Link>
//                                             </div>
//                                             </div>
//                                             <div className="col-auto m-0 p-0">
//                                             <div className="about-one_button">
//                                             <Link to="/speakers" className="theme-btn btn-style-one">
//                                             <span className="btn-wrap">
//                                             <span className="text-one">2025</span>
//                                             <span className="text-two">2025</span>
//                                             </span>
//                                             </Link>
//                                       </div>
//                                   </div>
//                               </div>

//           <div className="row clearfix">
//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="0ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg1} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Ankur Warikoo</a>
//                   </h4>

//                   <div className="speaker-one_detail">
//                     Entrepreneur, Author, and Public Speaker
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="150ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg2} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Dr.Chandraprakash Dwivedi</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Indian Film Director and Screenwriter
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="300ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg3} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Govind Dholakia</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Founder and Chairman of Shree Ramkrishna Exports Pvt. Ltd
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="450ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg4} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Kailash Kher</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Indian Playback Singer and Music Composer
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="0ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg5} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Shiv Khera</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Author, Professional Speaker, and Motivational Trainer
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="150ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg6} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Upendra Rai</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Senior Journalist and Author
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="300ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg7} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Vaibhav Purandare</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Author and Journalist
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="450ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg8} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Ankur Warikoo</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Entrepreneur, Author, and Public Speaker
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="0ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg1} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Ankur Warikoo</a>
//                   </h4>

//                   <div className="speaker-one_detail">
//                     Entrepreneur, Author, and Public Speaker
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="150ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg2} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Dr.Chandraprakash Dwivedi</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Indian Film Director and Screenwriter
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="300ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg3} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Govind Dholakia</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Founder and Chairman of Shree Ramkrishna Exports Pvt. Ltd
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInLeft"
//                 data-wow-delay="450ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg4} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Kailash Kher</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Indian Playback Singer and Music Composer
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="0ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg5} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Shiv Khera</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Author, Professional Speaker, and Motivational Trainer
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="150ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg6} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Upendra Rai</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Senior Journalist and Author
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="300ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg7} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Vaibhav Purandare</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Author and Journalist
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Speaker Block One */}
//             <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
//               <div
//                 className="speaker-block_one-inner wow fadeInRight"
//                 data-wow-delay="450ms"
//                 data-wow-duration="1500ms"
//               >
//                 <div className="speaker-block_one-image">
//                   <img src={speakerImg8} alt="" />
//                   {/* <div
//                     className="speaker-block_one-pattern"
//                     style={speakersPattern2}
//                   ></div> */}
//                 </div>
//                 <div className="speaker-block_one-content">
//                   <h4 className="speaker-one_title">
//                     <a href="speaker-detail.html">Ankur Warikoo</a>
//                   </h4>
//                   <div className="speaker-one_detail">
//                     Entrepreneur, Author, and Public Speaker
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ul className="styled-pagination text-center">
//             <li className="next">
//               <a href="#">
//                 <span className="fa fa-angle-double-left"></span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="active">
//                 1
//               </a>
//             </li>
//             <li>
//               <a href="#">2</a>
//             </li>
//             <li>
//               <a href="#">3</a>
//             </li>
//             <li className="next">
//               <a href="#">
//                 <span className="fa fa-angle-double-right"></span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }
