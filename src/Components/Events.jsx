import { useState } from "react";
import shape1 from "../assets/images/icons/shape-1.png";
import { BiFilter } from "react-icons/bi";
import {
  GiVideoConference,
  GiSettingsKnobs,
  GiBackwardTime,
} from "react-icons/gi";
import { jsPDF } from "jspdf";
import logo from "../assets/images/logo/logo.png";
import { scheduleData } from "../utils/eventsData";
import circle2 from "../assets/images/icons/circle-icon-two1.png";
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
  const iconFilterSection = { background: " #EAA690", color: "white" };
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
  const agendaBtn = { height: "50px", backgroundColor: " #EAA690" };
  // New schedule data
  

  const uniqueFilterTitles = [
    "Children Activities",
    "Authors Corner",
    "Cultural Activities",
    "Film Festival",
    "Exhibition",
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
          item.filterTitle.includes(selectedTitleFilter);

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

  // Add Logo
  const logoImg = new Image();
  logoImg.src = logo;
  doc.addImage(logoImg, 'PNG', 15, 10, 20, 20);

  // Title with Center Alignment and Color
  doc.setFontSize(26);
  doc.setTextColor('#cf288f');
  doc.setFont('helvetica', 'bold');
  doc.text("Mumbai Book Festival", doc.internal.pageSize.width / 2, 20, { align: 'center' });

  // Subtitle
  doc.setFontSize(16);
  doc.setTextColor('#333333');
  doc.text("Event Schedule", doc.internal.pageSize.width / 2, 30, { align: 'center' });

  let yOffset = 40;
  const dataToInclude = selectedDate !== null ? { [selectedDate]: filteredScheduleData[selectedDate] } : filteredScheduleData;

  Object.keys(dataToInclude).forEach((date) => {
    // Add Date Header with Background Highlight
    doc.setFillColor('#f3f3f3');
    doc.rect(10, yOffset, 190, 10, 'F');
    doc.setFontSize(14);
    doc.setTextColor('#cf288f');
    doc.text(`Date: ${date}`, 12, yOffset + 7);
    yOffset += 15;

    dataToInclude[date].forEach((item, index) => {
      doc.setFontSize(12);
      doc.setTextColor('#000000');

      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}. ${item.title}`, 10, yOffset);
      doc.setFont('helvetica', 'normal');
      yOffset += 6;

      doc.text(`Time: ${item.time}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Name: ${item.name}`, 10, yOffset);
      yOffset += 5;
      doc.text(`Place: ${item.place}`, 10, yOffset);
      yOffset += 6;

      if (expandedDates[date]) {
        doc.setFontSize(10);
        doc.setTextColor('#555555');
        doc.text(`Description: ${item.description}`, 10, yOffset, { maxWidth: 180 });
        doc.setFontSize(12);
        doc.setTextColor('#000000');
        yOffset += 10;
      }

      // Add a line separator between events
      doc.setDrawColor(200, 200, 200);
      doc.line(10, yOffset, 200, yOffset);
      yOffset += 10;

      if (yOffset >= 270) {
        doc.addPage();
        yOffset = 20;
      }
    });

    yOffset += 10;
  });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor('#888888');
  doc.text("Thank you for being a part of the Mumbai Book Festival!", 10, doc.internal.pageSize.height - 10);

  // Save the PDF
  doc.save("Mumbai_Book_Festival_Schedule.pdf");
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
              Explore a Wide Range of Literary, Cultural <br /> and Children
              Activities
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
                <li
                  className="tab-btn active-btn"
                  data-tab="#tab-1"
                  onClick={() => setSelectedDate("08/10/2025")}
                >
                  <span className="day">Day 01</span>
                  <span className="date">08</span>
                  <span className="month">Oct</span> 2025
                </li>

                <li
                  className="tab-btn"
                  data-tab="#tab-2"
                  onClick={() => setSelectedDate("09/10/2025")}
                >
                  <span className="day">Day 02</span>
                  <span className="date">09</span>
                  <span className="month">Oct</span> 2025
                </li>

                <li
                  className="tab-btn"
                  data-tab="#tab-3"
                  onClick={() => setSelectedDate("10/10/2025")}
                >
                  <span className="day">Day 03</span>
                  <span className="date">10</span>
                  <span className="month">Oct</span> 2025
                </li>

                <li
                  className="tab-btn"
                  data-tab="#tab-4"
                  onClick={() => setSelectedDate("11/10/2025")}
                >
                  <span className="day">Day 04</span>
                  <span className="date">11</span>
                  <span className="month">Oct</span> 2025
                </li>

                <li
                  className="tab-btn"
                  data-tab="#tab-5"
                  onClick={() => setSelectedDate("12/10/2025")}
                >
                  <span className="day">Day 05</span>
                  <span className="date">12</span>
                  <span className="month">Oct</span> 2025
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
                    {/* {uniqueFilterTitles.map((item, index) => (
                      <option key={index} value={item.filterTitle}>
                        {item.filterTitle}
                      </option>
                    ))} */}
                    {uniqueFilterTitles.map((title, index) => (
                      <option key={index} value={title}>
                        {title}
                      </option>
                    ))}
                    {/* <option value="Children Activities">Children Activities</option>
                    <option value="Authors Corner">Authors Corner</option>
                    <option value="Cultural Activities">Cultural Activities</option>
                    <option value="Film Festival">Film Festival</option>
                    <option value="Exhibition">Exhibition</option> */}
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
                    <span className="btn-wrap">
                      <span className="text-one">Download Agenda</span>
                      <span className="text-two">Download Agenda</span>
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
                                <li>
                                  <span className="icon">
                                  <GiSettingsKnobs style={iconPlace} />
                                  </span>
                                  {item.filterTitle}
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
                          style={{backgroundColor:"#ffc107"}}
                        >
                          <span className="btn-wrap">
                            <span className="text-one" style={{color:"black"}}>
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
