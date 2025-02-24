import "../../Sidebar.css";
import PropTypes from "prop-types";

export default function Sidebar({ isVisible, onClose, publisher }) {
  if (!isVisible) return null; // Don't render anything if the sidebar is not visible

  return (
    <section className="modal container" id="open-modal">
      <div className="modal__container" >
        <div className="modal__content">
          {/* Close Button */}
          <div className="modal__close close-modal" title="Close" onClick={onClose}>
            <i className="bx bx-x"></i>
          </div>

          {/* Publisher Information */}
          {publisher ? (
            <>
              <h1 className="modal__title">{publisher.name}</h1>
              <p className="modal__description">Books Published:</p>
              <ul>
                {publisher.books.map((book, index) => (
                  <li key={index}>{book}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="modal__description">No publisher selected.</p>
          )}
        </div>
      </div>
    </section>
  );
}

// Add PropTypes validation for all props
Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired, // isVisible is a required boolean
  onClose: PropTypes.func.isRequired, // onClose is a required function
  publisher: PropTypes.shape({
    name: PropTypes.string.isRequired, // name is a required string
    books: PropTypes.arrayOf(PropTypes.string).isRequired, // books is an array of strings
  }),
};