/* eslint-disable react/prop-types */
import "../modalBox.css";
import { FiX } from "react-icons/fi";

export default function ModalBox({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            <FiX />
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
