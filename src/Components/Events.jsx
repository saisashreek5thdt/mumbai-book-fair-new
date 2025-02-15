import { useState } from "react";
const circle2 = "../assets/images/icons/circle-icon-two.png";
const shape1 = "../assets/images/icons/shape-1.png";
// const author15 = "assets/images/resource/author-15.png";
import "../DownloadButton.css";
export default function LeadershipOne() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedTitleFilter, setSelectedTitleFilter] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleTitleFilterChange = (event) => {
    setSelectedTitleFilter(event.target.value);
  };

  // New schedule data
  const scheduleData = [
    {
      time: "10:00 AM - 11:00 AM",
      name:" Vaibhav Purandare",
      designation:"Senior Editor at The Times Of India & Author ",
      day:"04 April",
      title: "Young Picassos: Drawing Competition",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
    },
    {
      time: "11:15 AM - 12:15 PM",
      name: "Chandraprakash Dwivedi",
      designation:"Author",
      day:"05 April",
      title: "Spin-a-Tale: Let's Write a Story",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
    },
    {
      time: "10:00 AM - 10:45 AM",
      name:"shiv kera",
      designation:"Indian author, motivational speaker, educator, and business consultant",
      day:"06 April",
      title: "Open Mic Express",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
    },
    {
      time: "11:00 AM - 11:45 AM",
      name:"Govind dolakiya",
      designation:"",
      day:"",
      title: "Art Attack! Drawing Competition",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "05/04/2025",
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: "kailash kher",
      designation:"",
      day:"",
      title: "Power of Words: Slogan Writing Competition",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "05/04/2025",
    },
    {
      time: "10:00 AM - 10:45 AM",
      name:"Ankur warikoo",
      designation:"",
      day:"",
      title: "Once Upon a Story",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "05/04/2025",
    },
    {
      time: "11:00 AM - 11:45 AM",
      name:" Upendra rai",
      designation:"",
      day:"",
      title: "Mini Sculptors Clay Workshop",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "27/5/2025",
    },
    {
      time: "12:00 PM - 12:45 PM",
      title: "Theatre-Improv Fusion",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "27/5/2025",
    },
    {
      time: "10:00 AM - 10:45 AM",
      title: "कहानी का जादू: Puppets के साथ एक आकर्षक स",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "28/5/2025",
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "Mastering the Art of Calligraphy",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "28/5/2025",
    },
    {
      time: "12:00 PM - 12:45 PM",
      title: "Fun with Science!",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "28/5/2025",
    },
    {
      time: "10:00 AM - 10:45 AM",
      title: "Theatre of Tales",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "29/5/2025",
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "Meet the Little Author",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "29/5/2025",
    },
    {
      time: "12:00 PM - 12:45 PM",
      title: "Fearless & Ready: Self-Defence Workshop",
      designation:"",
      day:"",
      description: "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "29/5/2025",
    },
  ];

  // const filteredSchedule = scheduleData.filter((item) => {
  //   const timeFilter =
  //     selectedFilter === "All" ||
  //     (selectedFilter === "Morning" && item.time.includes("AM")) ||
  //     (selectedFilter === "Afternoon" &&
  //       item.time.includes("PM") &&
  //       parseInt(item.time.split(":")[0]) < 6) ||
  //     (selectedFilter === "Evening" &&
  //       item.time.includes("PM") &&
  //       parseInt(item.time.split(":")[0]) >= 6);

  //   const titleFilter =
  //     selectedTitleFilter === "All" || item.title.includes(selectedTitleFilter);

  //   return timeFilter && titleFilter;
  // });

  return (
    <>
      <section className="event-schedule-section">
        <div
          className="circle-layer"
          style={{ backgroundImage: `url(${circle2})` }}
        ></div>
        <div
          className="shape-icon"
          style={{ backgroundImage: `url(${shape1})` }}
        ></div>
        <div className="auto-container">
          {/* <!-- Sec Title --> */}
          <div className="sec-title centered">
            <div className="sec-title_title">Schedule of Events</div>
            <h2 className="sec-title_heading">Explore a wide range of
            literary, cultural <br /> and children activities</h2>
            {/* <div className="sec-title_text">
              Lorem ipsum gravida nibh vel velit auctor aliquetnean
              sollicitudin, lorem quis Bibendum <br /> auci elit consequat
              ipsutis sem nibh id elit
            </div> */}
          </div>

          <div className="schedule-tabs tabs-box">
            <div className="btns-box">
              {/* <!--Tabs Box--> */}
              <ul className="tab-buttons clearfix">
                <li className="tab-btn active-btn" data-tab="#tab-1">
                  <span className="day">Day 01</span>
                  <span className="date">04</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-2">
                  <span className="day">Day 02</span>
                  <span className="date">05</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-3">
                  <span className="day">Day 03</span>
                  <span className="date">06</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-4">
                  <span className="day">Day 04</span>
                  <span className="date">07</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-5">
                  <span className="day">Day 05</span>
                  <span className="date">08</span>
                  <span className="month">April</span> 2025
                </li>
              </ul>
            </div>

            <div className="row m-4" style={{ display: "flex" }}>

              <div className="col-lg-4">
                <div className="input-group" style={{height:"50px"}}>
                  <span
                    style={{ background: " #cf288f", color: "white" }}
                    className="input-group-text"
                  >
                    <i className="fa-regular fa-calendar-days"></i>
                  </span>
                  <select
                    style={{height:"50px"}}
                    className="select form-select form-control"
                    value={selectedFilter}
                    onChange={handleFilterChange}
                  >
                    <option value="All">All</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4" >
                <div className="input-group" style={{height:"50px"}} >
                  <span
                    style={{ background: " #cf288f", color: "white" }}
                    className="input-group-text"
                  >
                    <i className="fa-regular fa-calendar-days"></i>
                  </span>
                  {/* <select className="select form-select form-control">
                      <option value="">All Titles</option>
                      <option value="1">Title 1</option>
                      <option value="2">Title 2</option>
                      <option value="3">Title 3</option>
                    </select> */}
                  <select
                  style={{height:"50px"}}
                    value={selectedTitleFilter}
                    onChange={handleTitleFilterChange}
                    className="select form-select form-control"
                  >
                    <option value="All">All Titles</option>
                    {scheduleData.map((item, index) => (
                      <option key={index} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="download-btns-box text-center " >
                  <a
                    href="speaker-detail.html"
                    className="theme-btn btn-style-two"
                    style={{height:"50px"}}
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Download Agenda</span>
                      <span className="text-two">Download Agenda</span>
                    </span>
                  </a>
                </div>
              </div>

            </div>
     
            
            <div  className="tabs-content">
              {/* <!--Tab--> */}
              <div className="tab active-tab" id="tab-1">
                <div className="schedule-timeline">
                  {/* <!-- Schedule Block --> */}
                  
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                    {filteredSchedule
                      .map((item, index) => (
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner" >
                            <div className="author-image">
                              <img src={author15} alt="" />
                            </div>
                            <h6>{item.name}</h6>
                            <div className="designation">{item.designation}</div>
                          </div>
                        </div>
                        <div className="date">{item.day}</div>
                        <h4>{item.title}</h4>
                        <div className="text">
                          
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            Mumbai
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box" style={{padding:"10px"}}>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-16.png"
                                alt=""
                              />
                            </div>
                            <h6>Chandraprakash Dwivedi</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Introduction to Artificial Inteliigence</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Schedule Block --> */}
                  <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-17.jpg"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Launch of DinTalk - A social Media App </h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Tab--> */}
              <div className="tab" id="tab-2">
                <div className="schedule-timeline">
                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-15.png"
                                alt=""
                              />
                            </div>
                            <h6>John Smith</h6>
                            <div className="designation">Ux/Ui Designer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>The future of Ux/Ui in 2025</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-16.png"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Introduction to Artificial Inteliigence</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-17.jpg"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Launch of DinTalk - A social Media App </h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <!--Tab--> */}
              <div className="tab" id="tab-3">
                <div className="schedule-timeline">
                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-15.png"
                                alt=""
                              />
                            </div>
                            <h6>John Smith</h6>
                            <div className="designation">Ux/Ui Designer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>The future of Ux/Ui in 2025</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-16.png"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Introduction to Artificial Inteliigence</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-17.jpg"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Launch of DinTalk - A social Media App </h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <!--Tab--> */}
              <div className="tab" id="tab-4">
                <div className="schedule-timeline">
                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-15.png"
                                alt=""
                              />
                            </div>
                            <h6>John Smith</h6>
                            <div className="designation">Ux/Ui Designer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>The future of Ux/Ui in 2025</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-16.png"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Introduction to Artificial Inteliigence</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-17.jpg"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Launch of DinTalk - A social Media App </h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <!--Tab--> */}
              <div className="tab" id="tab-5">
                <div className="schedule-timeline">
                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-15.png"
                                alt=""
                              />
                            </div>
                            <h6>John Smith</h6>
                            <div className="designation">Ux/Ui Designer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>The future of Ux/Ui in 2025</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-16.png"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Introduction to Artificial Inteliigence</h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* <!-- Schedule Block --> */}
                  {/* <div className="schedule-block">
                    <div className="inner-box">
                      <div className="content">
                        <div className="author-box">
                          <div className="box-inner">
                            <div className="author-image">
                              <img
                                src="assets/images/resource/author-17.jpg"
                                alt=""
                              />
                            </div>
                            <h6>William Sam</h6>
                            <div className="designation">Developer </div>
                          </div>
                        </div>
                        <div className="date">15 April</div>
                        <h4>Launch of DinTalk - A social Media App </h4>
                        <div className="text">
                          Lorem ipsum gravida nibh vel velit auctor aliquetnean
                          sollicitudin, <br /> lorem quis Bibendum auci elit.
                        </div>
                        <ul className="event-info">
                          <li>
                            <span className="icon flaticon-maps-and-flags"></span>
                            TechX Park, NY, New York
                          </li>
                          <li>
                            <span className="icon flaticon-call-1"></span>14
                            April 2024, 10:00 AM-6:00 PM
                          </li>
                        </ul>
                        <div className="btns-box">
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">View Details</span>
                              <span className="text-two">View Details</span>
                            </span>
                          </a>
                          <a
                            href="speaker-detail.html"
                            className="theme-btn btn-style-two"
                          >
                            <span className="btn-wrap">
                              <span className="text-one">Buy Ticket</span>
                              <span className="text-two">Buy Ticket</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="download-btns-box text-center">
            <a href="speaker-detail.html" className="theme-btn btn-style-two">
              <span className="btn-wrap">
                <span className="text-one">More Schedules</span>
                <span className="text-two">More Schedules</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}



// <div className="leadership-one_block style-two">
//                     <div className="leadership-one_block-inner">
//                       <div className="leadership-one_block-content">
//                         <div className="leadership-one_block-image">
//                           <img
//                             src="assets/images/resource/leadership-2.jpg"
//                             alt=""
//                           />
//                           <div className="leadership-one_block-icon flaticon-voice"></div>
//                         </div>
//                         <div className="leadership-one_block-time">
//                           11:00 am -- 11:45 am
//                         </div>
//                         <div className="leadership-one_block-name mt-5">
//                           Art Attack! Drawing Competition
//                         </div>
//                         <h3 className="leadership-one_block-title mt-5">
//                           <a href="speaker-detail.html">Classes: 6 to 8.</a>
//                         </h3>
//                         {/* <div className="leadership-one_block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste similique aspernatur nam porro laboriosam inventore doloribus consequuntur corporis illo.</div> */}
//                       </div>
//                     </div>
//                   </div>

//                   {/* <!-- Leadership One Ship --> */}
//                   <div className="leadership-one_block">
//                     <div className="leadership-one_block-inner">
//                       <div className="leadership-one_block-content">
//                         <div className="leadership-one_block-image">
//                           <img
//                             src="assets/images/resource/leadership-3.jpg"
//                             alt=""
//                           />
//                           <div className="leadership-one_block-icon flaticon-voice"></div>
//                         </div>
//                         <div className="leadership-one_block-time">
//                           9:00 am -- 11:00 am
//                         </div>
//                         <div className="leadership-one_block-name">
//                           Lorem, ipsum.
//                         </div>
//                         <h3 className="leadership-one_block-title">
//                           <a href="speaker-detail.html">
//                             Lorem ipsum dolor sit amet.
//                           </a>
//                         </h3>
//                         <div className="leadership-one_block-text">
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Deleniti iste similique aspernatur nam porro
//                           laboriosam inventore doloribus consequuntur corporis
//                           illo.
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//      {/* <!-- Leadership One Ship --> */}
//      <div className="leadership-one_block">
//                     <div className="leadership-one_block-inner">
//                       <div className="leadership-one_block-content">
//                         <div className="leadership-one_block-image">
//                           <img
//                             src="assets/images/resource/leadership-3.jpg"
//                             alt=""
//                           />
//                           <div className="leadership-one_block-icon flaticon-voice"></div>
//                         </div>
//                         <div className="leadership-one_block-time">
//                           9:00 am -- 11:00 am
//                         </div>
//                         <div className="leadership-one_block-name">
//                           Lorem, ipsum.
//                         </div>
//                         <h3 className="leadership-one_block-title">
//                           <a href="speaker-detail.html">
//                             Lorem ipsum dolor sit amet.
//                           </a>
//                         </h3>
//                         <div className="leadership-one_block-text">
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Deleniti iste similique aspernatur nam porro
//                           laboriosam inventore doloribus consequuntur corporis
//                           illo.
//                         </div>
//                       </div>
//                     </div>
//                   </div>

// {/* <!-- Tab --> */}
// <div className="tab" id="event-two">
// <div className="content">
// {/* <!-- Leadership One Ship / Style Two --> */}
// <div className="leadership-one_block style-two">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-2.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Ashli Scroggy
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Modern Marketing Summit Sydney 2024
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>

// {/* <!-- Leadership One Ship --> */}
// <div className="leadership-one_block">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-3.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Robert Gates
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Introduction About Speakers
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>

// {/* <!-- Tab --> */}
// <div className="tab" id="event-three">
// <div className="content">
// {/* <!-- Leadership One Ship --> */}
// <div className="leadership-one_block">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-1.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Paul Wilson
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Registration For Opening Workshop
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>

// {/* <!-- Leadership One Ship / Style Two --> */}
// <div className="leadership-one_block style-two">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-2.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Ashli Scroggy
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Modern Marketing Summit Sydney 2024
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>

// {/* <!-- Leadership One Ship --> */}
// <div className="leadership-one_block">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-3.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Robert Gates
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Introduction About Speakers
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>

// {/* <!-- Tab --> */}
// <div className="tab" id="event-four">
// <div className="content">
// {/* <!-- Leadership One Ship / Style Two --> */}
// <div className="leadership-one_block style-two">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-2.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Ashli Scroggy
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Modern Marketing Summit Sydney 2024
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>

// {/* <!-- Leadership One Ship --> */}
// <div className="leadership-one_block">
// <div className="leadership-one_block-inner">
//   <div className="leadership-one_block-content">
//     <div className="leadership-one_block-image">
//       <img
//         src="assets/images/resource/leadership-3.jpg"
//         alt=""
//       />
//       <div className="leadership-one_block-icon flaticon-voice"></div>
//     </div>
//     <div className="leadership-one_block-time">
//       9:00 am -- 11:00 am
//     </div>
//     <div className="leadership-one_block-name">
//       Robert Gates
//     </div>
//     <h3 className="leadership-one_block-title">
//       <a href="speaker-detail.html">
//         Introduction About Speakers
//       </a>
//     </h3>
//     <div className="leadership-one_block-text">
//       We&apos;re inviting the top creatives in the tech
//       industry from all over the world to come learn,
//       grow, scrape their knees, try new things, to be
//       vulnerable, and to have epic adventures
//     </div>
//   </div>
// </div>
// </div>
