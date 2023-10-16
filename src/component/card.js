import React from "react";
import "../style/component.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title underlined-text">{props.name}</h2>
        <p className="card-text">
           {props.email}
        </p>
        <p className="card-text">
          {props.contactNumber}
        </p>
      </div>

      <div className="card-icons">
      <span className="edit-icon" onClick={props.onEdit}>
  <img src="edit.png" alt="Edit"/>
</span>
        <span className="delete-icon" onClick={props.onDelete}>
        <img src="delete.png" alt="Edit"/>
        </span>
      </div>
    </div>
  );
};

export default Card;
