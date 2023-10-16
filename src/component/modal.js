import React from 'react';
import '../style/modal.css';

function Modal({ onCancel, onAddContact }) {
  const handleCancel = () => {
    onCancel(); // Call the onCancel function passed as a prop
  };

  const handleAddContact = () => {
    onAddContact(); // Call the onAddContact function passed as a prop
  };

  return (
    <div>
      <div className="hero">
        <div className="modal">
          <div className="modal-field">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="modal-field">
            <label>Contact Number</label>
            <input type="text" />
          </div>
          <div className="modal-field">
            <label>Email Address</label>
            <input type="email" />
          </div>
          <div className="modal-buttons">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleAddContact}>Add Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
