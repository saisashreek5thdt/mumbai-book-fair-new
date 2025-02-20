import { useState } from "react";
import circle2 from "../assets/images/icons/circle-icon-two.png";
import shape1 from "../assets/images/icons/shape-1.png";
import { BiFilter } from "react-icons/bi";
import { GiVideoConference } from "react-icons/gi";
import { GiBackwardTime } from "react-icons/gi";

import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
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
  const [selectedDate, setSelectedDate] = useState(null);

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
  const agendaBtn={height:"50px",backgroundColor: " #cf288f"}
  // New schedule data
  const scheduleData = [
    {
      time: "10:00 AM - 11:00 AM",
      name: " Vaibhav Purandare",
      designation: "Senior Editor at The Times Of India",
      day: "18 April",
      title: "Young Picassos: Drawing Competition",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "18/04/2025",
      imgURL: speakerImg7,
      place: "Conference Hall 1",
      filterTitle:"Children Activities"
    },
    {
      time: "11:15 AM - 12:15 PM",
      name: "Dr.Chandraprakash",
      designation: "Indian Author",
      day: "18 April",
      title: "Spin-a-Tale: Let's Write a Story",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "18/04/2025",
      imgURL: speakerImg2,
      place: "Conference Hall 2",
      filterTitle:"Authors Corner"
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Shiv Khera",
      designation: "Indian Author, Motivational Speaker, and Educator",
      day: "18 April",
      title: "Open Mic Express",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "18/04/2025",
      imgURL: speakerImg5,
      place: "Conference Hall 3",
      filterTitle:"Cultural Activities"
    },
    {
      time: "11:00 AM - 11:45 AM",
      name: "Govind Dholakia",
      designation: "Indian Author",
      day: "18 April",
      title: "Art Attack! Drawing Competition",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "18/04/2025",
      imgURL: speakerImg3,
      place: "Conference Hall 4",
      filterTitle:"Film Festival"
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: "Kailash Kher",
      designation: "Indian Playback Singer and Composer",
      day: "19 April",
      title: "Power of Words: Slogan Writing Competition",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "19/04/2025",
      imgURL: speakerImg4,
      place: "Conference Hall 5",
      filterTitle:"Exhibition"
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Ankur Warikoo",
      designation: "Indian Author",
      day: "19 April",
      title: "Once Upon a Story",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "19/04/2025",
      imgURL: speakerImg1,
      place: "Conference Hall 6",
      filterTitle:"Children Activities"
    },
    {
      time: "11:00 AM - 11:45 AM",
      name: " Upendra Rai",
      designation: "Indian Author",
      day: "20 April",
      title: "Mini Sculptors Clay Workshop",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "20/04/2025",
      imgURL: speakerImg6,
      place: "Conference Hall 7",
      filterTitle:"Authors Corner"
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: "Shiv Khera",
      title: "Theatre-Improv Fusion",
      designation: "Indian Author",
      day: "20 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin,  lorem quis Bibendum auci elit.",
      date: "20/04/2025",
      imgURL: speakerImg5,
      place: "Conference Hall 8",
      filterTitle:"Cultural Activities"
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Govind Dholakia",
      title: "कहानी का जादू: Puppets के साथ एक आकर्षक स",
      designation: "Indian Author",
      day: "21 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "21/04/2025",
      imgURL: speakerImg3,
      place: "Conference Hall 9",
      filterTitle:"Film Festival"
    },
    {
      time: "11:00 AM - 11:45 AM",
      name: "Dr.Chandraprakash",
      title: "Mastering the Art of Calligraphy",
      designation: "Indian Author",
      day: "21 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "21/04/2025",
      imgURL: speakerImg2,
      place: "Conference Hall 10",
      filterTitle:"Exhibition"
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: " Vaibhav Purandare",
      title: "Fun with Science!",
      designation: "Indian Author",
      day: "21 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "21/04/2025",
      imgURL: speakerImg7,
      place: "Conference Hall 11",
      filterTitle:"Children Activities"
    },
    {
      time: "10:00 AM - 10:45 AM",
      name: "Dr.Chandraprakash",
      title: "Theatre of Tales",
      designation: "Indian Author",
      day: "22 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "22/04/2025",
      imgURL: speakerImg2,
      place: "Conference Hall 12",
      filterTitle:"Authors Corner"
    },
    {
      time: "11:00 AM - 11:45 AM",
      title: "Meet the Little Author",
      name: "Govind Dholakia",
      designation: "Indian Author",
      day: "22 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "22/04/2025",
      imgURL: speakerImg3,
      place: "Conference Hall 13",
      filterTitle:"Cultural Activities"
    },
    {
      time: "12:00 PM - 12:45 PM",
      name: " Vaibhav Purandare",
      title: "Fearless & Ready: Self-Defence Workshop",
      designation: "Indian Author",
      day: "22 April",
      description:
        "Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis Bibendum auci elit.",
      date: "22/04/2025",
      imgURL: speakerImg7,
      place: "Conference Hall 14",
      filterTitle:"Film Festival"
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


  // Function to generate and download PDF
  const downloadAgenda = (event) => {
    event.preventDefault();
    const doc = new jsPDF();

    // Title of the PDF
    doc.setFontSize(18);
    doc.text("Event Schedule", 10, 10);

    let yOffset = 20; // Vertical position for content

    // Determine which data to include in the PDF
    const dataToInclude =
      selectedDate !== null
        ? { [selectedDate]: filteredScheduleData[selectedDate] } // Only selected date
        : filteredScheduleData; // All dates
         
    // Loop through filteredScheduleData to add content to the PDF
    Object.keys(dataToInclude).forEach((date) => {
      // Add date header
      doc.setFontSize(14);
      doc.setTextColor("#cf288f");
      doc.text(`Date: ${date}`, 10, yOffset);
      yOffset += 10;

      // Add schedule items for the date
      dataToInclude[date].forEach((item) => {
        doc.setFontSize(12);
        doc.setTextColor("#000000");

        doc.text(`Time: ${item.time}`, 10, yOffset);
        yOffset += 5;
        doc.text(`Name: ${item.name}`, 10, yOffset);
        yOffset += 5;
        doc.text(`Title: ${item.title}`, 10, yOffset);
        yOffset += 5;
        doc.text(`Place: ${item.place}`, 10, yOffset);
        yOffset += 10;

        // Check if the date is expanded to include the description
        if (expandedDates[date]) {
          doc.text(`Description: ${item.description}`, 10, yOffset);
          yOffset += 10;
        }

        // Ensure content doesn't overflow the page
        if (yOffset >= 280) {
          doc.addPage();
          yOffset = 20;
        }
      });
       // Add spacing between dates
       yOffset += 10;
      });
  
      // Save the PDF
      doc.save("Event_Schedule.pdf");
  };

  return (
    <>
      <section className="event-schedule-section" id="event">
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
                <li className="tab-btn active-btn" data-tab="#tab-1" onClick={() => setSelectedDate("18/04/2025")}>
                  <span className="day">Day 01</span>
                  <span className="date">18</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-2"  onClick={() => setSelectedDate("19/04/2025")}>
                  <span className="day">Day 02</span>
                  <span className="date">19</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-3"  onClick={() => setSelectedDate("20/04/2025")}>
                  <span className="day">Day 03</span>
                  <span className="date">20</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-4"  onClick={() => setSelectedDate("21/04/2025")}>
                  <span className="day">Day 04</span>
                  <span className="date">21</span>
                  <span className="month">April</span> 2025
                </li>

                <li className="tab-btn" data-tab="#tab-5"  onClick={() => setSelectedDate("22/04/2025")}>
                  <span className="day">Day 05</span>
                  <span className="date">22</span>
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
                    {/* {scheduleData.map((item, index) => (
                      <option key={index} value={item.filterTitle}>
                        {item.filterTitle}
                      </option>
                    ))} */}
                    <option value="Children Activities">Children Activities</option>
                    <option value="Authors Corner">Authors Corner</option>
                    <option value="Cultural Activities">Cultural Activities</option>
                    <option value="Film Festival">Film Festival</option>
                    <option value="Exhibition">Exhibition</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="download-btns-box text-center ">
                  <a
                    className="theme-btn btn-style-two"
                    style={agendaBtn}
                    onClick={downloadAgenda}
                  >
                    <span className="btn-wrap" >
                      <span className="text-one" >Download Agenda</span>
                      <span className="text-two" >Download Agenda</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="tabs-content" id="schedule-container">
              {/* Render tabs dynamically */}
              {Object.keys(filteredScheduleData).map((date, index) => (
                <div
                  key={index}
                  className={`tab ${index === 0 ? "active-tab" : ""}`}
                  id={`tab-${index + 1}`}
                >
                 {console.log(date)};
                  <div className="schedule-timeline" >
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
