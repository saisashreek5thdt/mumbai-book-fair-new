/* eslint-disable react/prop-types */
import "../modalBox.css";
import { FiX } from "react-icons/fi";

export default function ModalBox({ isOpen, onClose, children, onAddToCart }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <FiX />
          </button>
          {children}
          {/* Add to Cart Button */}
        <button className="add-to-cart-button" onClick={onAddToCart}>
          Add to Cart
        </button>
        </div>
      </div>
    </>
  );
}
