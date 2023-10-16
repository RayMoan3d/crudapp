import "../style/index.css";
import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import Card from "../component/card";
import axios from "axios";
import Modal from "../component/modal";

function Dashboard() {
  const [people, setPeople] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddContact = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/people")
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEdit = (personId) => {
    // Handle the edit action here
    console.log("Edit clicked for person with ID:", personId);
  };

  const handleDelete = (personId) => {
    // Handle the delete action here
    console.log("Delete clicked for person with ID:", personId);
  };

  const [isCardView, setIsCardView] = useState(true);
  const [isListView, setIsListView] = useState(false);

  const handleCardView = () => {
    setIsCardView(true);
    setIsListView(false);
  };

  const handleListView = () => {
    setIsCardView(false);
    setIsListView(true);
  };

  return (
    <div className="dashboard">
      <h3>Contact Information</h3>
      <div className="dashboard dash">
        <p>
          Your list of customers appear here. To add a new contact, click on{" "}
          <br></br>the Add New Customer button.
        </p>
        <button className="add" onClick={handleAddContact}>
          Add New Customer
        </button>
        {isModalVisible && <Modal onCancel={handleCancel} />}
      </div>

      <div className="viewicon">
        <i
          className={`fa fa-th-large fa-lg icon ${
            isCardView ? "" : "icon-inactive"
          }`}
          aria-hidden="true"
          onClick={handleCardView}
        ></i>
        <i
          className={`fa fa-list fa-lg icon ${
            isListView ? "" : "icon-inactive"
          }`}
          aria-hidden="true"
          onClick={handleListView}
        ></i>
      </div>

      {isCardView && (
        <div className="card-view">
          <p>Card View Content</p>
          {people.map((person) => (
            <Card
              key={person.id}
              name={person.name}
              email={person.email}
              contactNumber={person.contactNumber}
              onEdit={() => handleEdit(person.id)}
              onDelete={() => handleDelete(person.id)}
            />
          ))}
        </div>
      )}
      {isListView && (
        <div className="list-view">
          <p>List View Content</p>
          {
            //content
          }
        </div>
      )}
    </div>
  );
}

export default Dashboard;
