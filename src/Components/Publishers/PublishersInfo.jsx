import { publications } from "./PublisherData";
import { useState } from "react";
import "../../publisher.css";
import Sidebar from "./Sidebar";

export default function PublishersInfo() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [suggestions, setSuggestions] = useState([]); // State to store suggestions
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility
  const [selectedPublisher, setSelectedPublisher] = useState(null); // State for selected publisher

  // Function to handle search and filter
  const handleSearch = () => {
    const filtered = publications.filter((res) =>
      res.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredPublications(filtered);
    setIsSearched(true);
    setSuggestions([]); // Clear suggestions after search
  };

  // Function to clear the search and reset to default state
  const handleClearSearch = () => {
    setSearchInput("");
    setFilteredPublications([]);
    setIsSearched(false);
    setSuggestions([]); // Clear suggestions
  };

  // Function to update suggestions dynamically
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    if (inputValue.trim() === "") {
      setSuggestions([]); // Clear suggestions if input is empty
    } else {
      // Filter suggestions based on input
      const matchedSuggestions = publications
        .filter((pub) =>
          pub.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((pub) => pub.name); // Extract only names for suggestions
      setSuggestions(matchedSuggestions);
    }
  };

  // Function to handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion); // Set the selected suggestion as the search input
    setSuggestions([]); // Clear suggestions
    // Perform search with the selected suggestion
    const filtered = publications.filter((res) =>
      res.name.toLowerCase().includes(suggestion.toLowerCase())
    );
    setFilteredPublications(filtered);
    setIsSearched(true);
  };

  // Function to handle publisher link click
  const handlePublisherClick = (publisher) => {
    console.log("Publisher clicked:", publisher);
    setSelectedPublisher(publisher); // Set the selected publisher
    setIsSidebarVisible(true); // Show the sidebar
  };

  return (
    <>
      <section className="testimonial-two">
        <div className="auto-container">
          {/* Search Input */}
          <div className="search-container">
            <div className="search-input">
              <input
                type="text"
                value={searchInput}
                placeholder="Search publishers..."
                onChange={handleInputChange} // Update input and suggestions
                className=""
              />
              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="suggestion-item"
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
              {/* Clear Search Button */}
              {isSearched && (
                <button
                  className="clear-search-button"
                  onClick={handleClearSearch}
                >
                  X
                </button>
              )}
            </div>
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          {/* Display Results or All Publications */}
          <div className="row clearfix">
            {(isSearched ? filteredPublications : publications).map(
              (publish, index) => (
                <div
                  key={index}
                  className="news-block_two col-lg-3 col-md-6 col-sm-12"
                >
                  <div
                    className="news-block_two-inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    {/* Post Info */}
                    <div className="news-block_two-date">
                      Booth Number: {publish.boothNumber}
                    </div>
                    <div className="news-block_two-image">
                      <a href={publish.link}>
                        <img src={publish.imgURL} alt="" />
                      </a>
                      <img src={publish.imgURL} alt="" />
                    </div>
                    <div className="news-block_two-content">
                      <h4 className="news-block_two-title">
                        <a href="#">{publish.name}</a>
                      </h4>
                      <div
                        className="news-block_two-more nav-btn navSidebar-button"
                        onClick={() => {
                          handlePublisherClick(publish);
                        }}
                      >
                        Publishings
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          {/* Show Message if No Results Found After Search */}
          {isSearched && filteredPublications.length === 0 && (
            <div className="no-results">
              No matching publishers found.{" "}
              <button className="clear-search-link" onClick={handleClearSearch}>
                Back to all publishers
              </button>
            </div>
          )}
        </div>
        {/* Styled Pagination */}
        <ul className="styled-pagination text-center">
          <li className="next">
            <a href="#">
              <span className="fa fa-angle-double-left"></span>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li className="next">
            <a href="#">
              <span className="fa fa-angle-double-right"></span>
            </a>
          </li>
        </ul>
        {/* End Styled Pagination */}
      </section>

      {/* Sidebar */}
      {isSidebarVisible && (
        <Sidebar
          isVisible={isSidebarVisible} // Pass visibility state
          onClose={() => setIsSidebarVisible(false)} // Close sidebar
          publisher={selectedPublisher} // Pass selected publisher data
        />
      )}
    </>
  );
}
