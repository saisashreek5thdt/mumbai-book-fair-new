import { publications } from "../../utils/PublisherData";
import { useState } from "react";
import "../../publisher.css";
import ModalBox from "../ModalBox";
import { useDispatch} from "react-redux";
import { addItem } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
// import CheckoutInfo from "../../Components/Checkout/CheckoutInfo";

export default function PublishersInfo() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredPublications, setFilteredPublications] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [suggestions, setSuggestions] = useState([]); // State to store suggestions
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPublisher, setSelectedPublisher] = useState(null);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 12; 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cartItems = useSelector((state) => state.cart.items);
 // Calculate total pages
 const totalPages = Math.ceil(
  (isSearched ? filteredPublications : publications).length / publicationsPerPage
);


const getCurrentPublications = () => {
  const publicationsToShow = isSearched ? filteredPublications : publications;
  const startIndex = (currentPage - 1) * publicationsPerPage;
  const endIndex = startIndex + publicationsPerPage;
  return publicationsToShow.slice(startIndex, endIndex);
};
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
    setCurrentPage(1);
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

  const openModalWithPublisher = (publisher) => {
    setSelectedPublisher(publisher);
    setIsModalOpen(true);
  };

  // const handleBookSelection = (book) => {
  //   setSelectedBook({ book });
  // };
  // Handle checkbox change for book selection
  const handleCheckboxChange = (book) => (e) => {
    if (e.target.checked) {
      setSelectedBooks((prev) => [...prev, book]);
    } else {
      setSelectedBooks((prev) => prev.filter((b) => b !== book));
    }
  };


   const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    selectedBooks.forEach((book) => {
      dispatch(addItem({ name: book, publisher: selectedPublisher.name }));
    });
    setSelectedBooks([]); // Clear selected books after adding to cart
    setIsModalOpen(false); // Close the modal

    // Redirect to the checkout page
    navigate("/checkout");
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
            {getCurrentPublications().map(
              (publish) => (
                <div
                  key={publish.id}
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
                      <a
                        className="news-block_two-more"
                        href={publish.link}
                        // onClick={() => setIsModalOpen(true)}
                        onClick={() => openModalWithPublisher(publish)}
                      >
                        Publishings
                      </a>
                      {/* <div
                        className="news-block_two-more"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsModalOpen(true)}
                      >
                        Publishings
                      </div> */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* <ModalBox isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>Responsive Modal</h2>
            <p>This is a simple modal component.</p>
          </ModalBox> */}
          {isModalOpen && selectedPublisher && (
            <ModalBox isOpen={isModalOpen} onAddToCart={handleAddToCart} onClose={() => setIsModalOpen(false)}>
              <h6>{selectedPublisher.name} - Books</h6>
              <ul>
              {selectedPublisher.books?.map((book, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedBooks.includes(book)}
                    onChange={handleCheckboxChange(book)}
                  />
                  {book}
                </label>
              </li>
               ))} 
              </ul>
            </ModalBox>
          )}

          {/* Show Message if No Results Fou
            nd After Search */}
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

        {/* Render CheckoutInfo if a book is selected */}
      {/* {selectedBook && <CheckoutInfo bookDetails={selectedBook} />} */}
      

      <ul className="styled-pagination text-center">
        <li
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <a>
            <span className="fa fa-angle-double-left"></span>
          </a>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <li
              key={pageNumber}
              className={currentPage === pageNumber ? "active" : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              <a href="#">{pageNumber}</a>
            </li>
          );
        })}

        <li
          className={`next ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <a>
            <span className="fa fa-angle-double-right"></span>
          </a>
        </li>
      </ul>

      {/* Modal and other components */}
      {/* ... keep your existing modal implementation ... */}
        {/* End Styled Pagination */}
      </section>

    </>
  );
}
