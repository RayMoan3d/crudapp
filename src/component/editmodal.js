import React, { useState } from "react";

function EditModal({ visible, cardData, onSave, onCancel }) {
  const [editedData, setEditedData] = useState(cardData);

  const handleSave = () => {
    onSave(editedData);
    onCancel();
  };

  return (
    <div className={`edit-modal ${visible ? "visible" : ""}`}>
      <h2>Edit Card</h2>
      <input
        type="text"
        value={editedData.name || ""}
        onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
      />
      <input
        type="text"
        value={editedData.email || ""}
        onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
      />
      <input
        type="text"
        value={editedData.contactNumber || ""}
        onChange={(e) => setEditedData({ ...editedData, contactNumber: e.target.value })}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditModal;
