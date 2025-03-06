import { galleryData } from "../../utils/galleryData";
import { useState } from "react";
import "../../gallery.css";
export default function GalleryInfo() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const filteredData = activeFilter === "all"
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset page on filter change
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="gallery-three">
      {/* "children-pavilion", "cultural", */}
        <div className="filter-buttons">
          {["all", "authors", "business-meet",
             "vip"].map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter.replace(/-/g, " ").toUpperCase()}
              </button>
            ))}
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Gallery One Block */}
            {currentItems.map((item) => (
              <div key={item.id} className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
                <div className="gallery-one_block-inner">
                  <div className="gallery-one_block-image">
                    <img src={item.image} alt={item.title} />
                    <div className="gallery-one_block-overlay">
                      <a
                        href={item.image}
                        className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
          </div>
          {/* Styled Pagination */}
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
            {/* End Styled Pagination */}
      </section>
    </>
  );
}
