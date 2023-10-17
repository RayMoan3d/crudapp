import "../style/index.css";
import { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import Card from "../component/card";
import Modal from "../component/modal";
import Table from "../component/table";
import editIcon from "./edit.png";
import removeIcon from "./delete.png"; 

function Dashboard() {

  const tableHeaders = ["Id", "Name","Phone", "Email"];

  const [people, setPeople] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddContact = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Use the Fetch API to make the GET request
    fetch("http://localhost:4000/people")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPeople(data);
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
          <br></br>
          <div className="cardview">
          {people.map((person) => (
            <Card
              key={person.id}
              name={person.name}
              email={person.email}
              contactNumber={person.phone}
              onEdit={() => handleEdit(person.id)}
              onDelete={() => handleDelete(person.id)}
            />
          ))}
          </div>
        </div>
      )}


{isListView && (
        <Table
          data={people}
          headers={tableHeaders}
          actions={[
            {
              label: <img className="t-icon" src={editIcon} alt="Edit" />,
            },
            {
              label: <img className="t-icon" src={removeIcon} alt="Remove" />,
            }
          ]}
        />
      )}
    </div>
  );
}

export default Dashboard;
