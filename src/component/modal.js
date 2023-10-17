import React, { useState } from 'react';
import '../style/modal.css';

function AddModal({ onCancel, onAddContact }) {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleCancel = () => {
    onCancel();
  };

  const handleAddContact = () => {
    const newContact = {
      name,
      "contact number": contactNumber,
      email,
    };
    
    fetch('http://localhost:4000/people', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        // Call the onAddContact function with the added contact data
        onAddContact(data);
      })
      .catch((error) => {
        console.error('Error adding contact:', error);
      });
  };

  return (
    <div>
      <div className="hero">
        <div className="modal">
          <div className="modal-field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="modal-field">
            <label>Contact Number</label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="modal-field">
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="modal-buttons">
            <button className="modal-cancelbtn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="modal-addbtn" onClick={handleAddContact}>
              Add Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
