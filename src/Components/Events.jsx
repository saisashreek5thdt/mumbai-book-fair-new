import { useState } from "react";
import circle2 from "../assets/images/icons/circle-icon-two.png";
import shape1 from "../assets/images/icons/shape-1.png";
import { BiFilter } from "react-icons/bi";
import { GiVideoConference } from "react-icons/gi";
import { GiBackwardTime } from "react-icons/gi";

import speakerImg1 from "../assets/images/Speakers/Ankur_Warikoo.png";
import speakerImg2 from "../assets/images/Speakers/Chandraprakash_Dwivedi.png";
import speakerImg3 from "../assets/images/Speakers/Govind_Dolakiya.png";
import speakerImg4 from "../assets/images/Speakers/kailash-kher-680x680.png";
import speakerImg5 from "../assets/images/Speakers/Shiv_Khera.png";
import speakerImg6 from "../assets/images/Speakers/Upendra_Rai.png";
import speakerImg7 from "../assets/images/Speakers/VP_Speaker.png";
// import speakerImg8 from "../assets/images/Speakers/Ankur_Warikoo.png";
export default function LeadershipOne() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedTitleFilter, setSelectedTitleFilter] = useState("All");
  const [expandedDates, setExpandedDates] = useState({});

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleTitleFilterChange = (event) => {
    setSelectedTitleFilter(event.target.value);
  };

  const filterMain = { display: "flex" };
  const iconFilterSection = { background: " #cf288f", color: "white" };
  const height50 = { height: "50px" };
  const biFilterFont = { fontSize: "25px" };
  const blockContentSection = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  };
  const marginB10 = { marginBottom: "10px" };
  const dayStyle = { color: "#cf288f", fontWeight: "bold" };
  const textAlignLeft = { textAlign: "left" };
  const iconPlace = { color: " #cf288f", fontSize: "20px" };
  const marginBtn50 = { margin: "50px" };
  const marginTop10 = { marginTop: "10px" };

  // New schedule data
  const scheduleData = [
    {
      time: "10:00 AM - 11:00 AM",
      name: " Vaibhav Purandare",
      designation: "Senior Editor at The Times Of India",
      day: "04 April",
      title: "Young Picassos: Drawing Competition",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
      imgURL: speakerImg7,
      place: "Conference Hall 1",
    },
    {
      time: "11:15 AM - 12:15 PM",
      name: "Dr.Chandraprakash",
      designation: "Indian Author",
      day: "04 April",
      title: "Spin-a-Tale: Let's Write a Story",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
      imgURL: speakerImg2,
      place: "Conference Hall 2",
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Shiv Khera",
      designation: "Indian Author, Motivational Speaker, and Educator",
      day: "04 April",
      title: "Open Mic Express",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
      imgURL: speakerImg5,
      place: "Conference Hall 3",
    },
    {
      time: "11:00 AM - 11:45 AM",
      name: "Govind Dholakia",
      designation: "Indian Author",
      day: "04 April",
      title: "Art Attack! Drawing Competition",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "04/04/2025",
      imgURL: speakerImg3,
      place: "Conference Hall 4",
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: "Kailash Kher",
      designation: "Indian Playback Singer and Composer",
      day: "05 April",
      title: "Power of Words: Slogan Writing Competition",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "05/04/2025",
      imgURL: speakerImg4,
      place: "Conference Hall 5",
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Ankur Warikoo",
      designation: "Indian Author",
      day: "05 April",
      title: "Once Upon a Story",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "05/04/2025",
      imgURL: speakerImg1,
      place: "Conference Hall 6",
    },
    {
      time: "11:00 AM - 11:45 AM",
      name: " Upendra Rai",
      designation: "Indian Author",
      day: "06 April",
      title: "Mini Sculptors Clay Workshop",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "06/04/2025",
      imgURL: speakerImg6,
      place: "Conference Hall 7",
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: "Shiv Khera",
      title: "Theatre-Improv Fusion",
      designation: "Indian Author",
      day: "06 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "06/04/2025",
      imgURL: speakerImg5,
      place: "Conference Hall 8",
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Govind Dholakia",
      title: "कहानी का जादू: Puppets के साथ एक आकर्षक स",
      designation: "Indian Author",
      day: "07 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "07/04/2025",
      imgURL: speakerImg3,
      place: "Conference Hall 9",
    },
    {
      time: "11:00 AM - 11:45 AM",
      name: "Dr.Chandraprakash",
      title: "Mastering the Art of Calligraphy",
      designation: "Indian Author",
      day: "07 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "07/04/2025",
      imgURL: speakerImg2,
      place: "Conference Hall 10",
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: " Vaibhav Purandare",
      title: "Fun with Science!",
      designation: "Indian Author",
      day: "07 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "07/04/2025",
      imgURL: speakerImg7,
      place: "Conference Hall 11",
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Dr.Chandraprakash",
      title: "Theatre of Tales",
      designation: "Indian Author",
      day: "08 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "08/04/2025",
      imgURL: speakerImg2,
      place: "Conference Hall 12",
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "Meet the Little Author",
      name: "Govind Dholakia",
      designation: "Indian Author",
      day: "08 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "08/04/2025",
      imgURL: speakerImg3,
      place: "Conference Hall 13",
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: " Vaibhav Purandare",
      title: "Fearless & Ready: Self-Defence Workshop",
      designation: "Indian Author",
      day: "08 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "08/04/2025",
      imgURL: speakerImg7,
      place: "Conference Hall 14",
    },
  ];

  // Group schedule data by date
  const groupedScheduleData = scheduleData.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});

  // Filter schedule data based on selected filters
  const filteredScheduleData = Object.keys(groupedScheduleData).reduce(
    (acc, date) => {
      acc[date] = groupedScheduleData[date].filter((item) => {
        const timeFilter =
          selectedFilter === "All" ||
          (selectedFilter === "Morning" && item.time.includes("AM")) ||
          (selectedFilter === "Afternoon" &&
            item.time.includes("PM") &&
            parseInt(item.time.split(":")[0]) < 6) ||
          (selectedFilter === "Evening" &&
            item.time.includes("PM") &&
            parseInt(item.time.split(":")[0]) >= 6);

        const titleFilter =
          selectedTitleFilter === "All" ||
          item.title.includes(selectedTitleFilter);

        return timeFilter && titleFilter;
      });
      return acc;
    },
    {}
  );

  // Toggle expanded view for a specific date
  const toggleExpandedDate = (date) => {
    setExpandedDates((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

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
            <h2 className="sec-title_heading">
              Explore a wide range of literary, cultural <br /> and children
              activities
            </h2>
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

            <div className="row m-4" style={filterMain}>
              <div className="col-lg-4">
                <div className="input-group" style={height50}>
                  <span style={iconFilterSection} className="input-group-text">
                    <BiFilter style={biFilterFont} />
                    {/* <i className="fa-regular fa-calendar-days"></i> */}
                  </span>
                  <select
                    style={height50}
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

              <div className="col-lg-4">
                <div className="input-group" style={height50}>
                  <span style={iconFilterSection} className="input-group-text">
                    {/* <i className="fa-regular fa-calendar-days"></i> */}
                    <BiFilter style={biFilterFont} />
                  </span>
                  {/* <select className="select form-select form-control">
                      <option value="">All Titles</option>
                      <option value="1">Title 1</option>
                      <option value="2">Title 2</option>
                      <option value="3">Title 3</option>
                    </select> */}
                  <select
                    style={height50}
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
                <div className="download-btns-box text-center ">
                  <a
                    href=""
                    className="theme-btn btn-style-two"
                    style={height50}
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Download Agenda</span>
                      <span className="text-two">Download Agenda</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="tabs-content">
              {/* Render tabs dynamically */}
              {Object.keys(filteredScheduleData).map((date, index) => (
                <div
                  key={index}
                  className={`tab ${index === 0 ? "active-tab" : ""}`}
                  id={`tab-${index + 1}`}
                >
                  <div className="schedule-timeline">
                    {/* Render schedule blocks */}
                    {filteredScheduleData[date]
                      .slice(0, expandedDates[date] ? undefined : 3) // Show all or first 3 items
                      .map((item, idx) => (
                        <div key={idx} className="schedule-block">
                          <div className="inner-box">
                            <div
                              className="content"
                              style={blockContentSection}
                            >
                              <div className="author-box">
                                <div className="box-inner">
                                  <div
                                    className="author-image"
                                    style={marginB10}
                                  >
                                    {/* Replace with actual image path */}
                                    <img src={item.imgURL} alt="" />
                                  </div>
                                  <h6>{item.name}</h6>
                                  <div className="designation">
                                    {item.designation}
                                  </div>
                                </div>
                              </div>
                              <div className="date" style={dayStyle}>
                                {item.day}
                              </div>
                              <h4>{item.title}</h4>
                              <div className="text" style={textAlignLeft}>
                                {item.description}
                              </div>
                              <ul className="event-info">
                                <li>
                                  {/* <span className="icon flaticon-maps-and-flags"></span> */}
                                  <span className="icon ">
                                    <GiVideoConference style={iconPlace} />{" "}
                                  </span>
                                  {/* <GiVideoConference style={{color:" #cf288f",fontSize:"20px"}}/> */}
                                  {item.place}
                                </li>
                                <li>
                                  <span className="icon">
                                    <GiBackwardTime />
                                  </span>
                                  {item.time}
                                </li>
                              </ul>
                              <div className="btns-box" style={marginBtn50}>
                                <a
                                  href="speaker-detail.html"
                                  // className="theme-btn btn-style-one"
                                >
                                  {/* <span className="btn-wrap">
                                    <span className="text-one">
                                      View Details
                                    </span>
                                    <span className="text-two">
                                      View Details
                                    </span>
                                  </span>
                                </a>
                                <a
                                  href="speaker-detail.html"
                                  className="theme-btn btn-style-two"
                                >
                                  <span className="btn-wrap">
                                    <span className="text-one">Buy Ticket</span>
                                    <span className="text-two">Buy Ticket</span>
                                  </span> */}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    {/* More Schedules button */}
                    {filteredScheduleData[date].length > 3 && (
                      <div
                        className="download-btns-box text-center"
                        style={marginTop10}
                      >
                        <a
                          className="theme-btn btn-style-two"
                          onClick={() => toggleExpandedDate(date)}
                        >
                          <span className="btn-wrap">
                            <span className="text-one">
                              {expandedDates[date]
                                ? "Show Less"
                                : "More Schedules"}
                            </span>
                            <span className="text-two">
                              {expandedDates[date]
                                ? "Show Less"
                                : "More Schedules"}
                            </span>
                          </span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
