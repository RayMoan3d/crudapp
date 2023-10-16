import React, { useState } from "react";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";

function AddContact() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");

  const [contactNumber, setContactNumber] = useState("");

  const [email, setEmail] = useState("");

  const [errorMessages, setErrorMessages] = useState({
    name: "",

    contactNumber: "",

    email: "",
  });

  const handleClose = (action) => {
    if (
      action === "add" &&
      name === "" &&
      contactNumber === "" &&
      email === ""
    ) {
      alert("Please fill in at least one field to add a contact.");
    } else {
      const newErrorMessages = { name: "", contactNumber: "", email: "" };

      if (name === "") {
        newErrorMessages.name = "Name is required";
      }

      if (contactNumber === "") {
        newErrorMessages.contactNumber = "Contact Number is required";
      } else if (!/^\d+$/.test(contactNumber)) {
        newErrorMessages.contactNumber =
          "Contact Number must contain only numerical values";
      }

      if (email === "") {
        newErrorMessages.email = "Email Address is required";
      } else if (!email.endsWith("@gmail.com")) {
        newErrorMessages.email = "Email Address must be end with '@gmail.com'";
      }

      setErrorMessages(newErrorMessages);

      if (
        !newErrorMessages.name &&
        !newErrorMessages.contactNumber &&
        !newErrorMessages.email
      ) {
        setShow(false);
      }
    }
  };

  const handleShow = () => {
    setErrorMessages({ name: "", contactNumber: "", email: "" });

    setName(""); // Reset the name state to an empty string

    setContactNumber(""); // Reset the contactNumber state to an empty string

    setEmail(""); // Reset the email state to an empty string

    setShow(true);
  };

  const handleInputChange = (fieldName, value) => {
    // Clear the error message for the specific field

    setErrorMessages((prevErrorMessages) => ({
      ...prevErrorMessages,

      [fieldName]: "",
    }));

    // Update the corresponding state value

    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "contactNumber") {
      setContactNumber(value);
    } else if (fieldName === "email") {
      setEmail(value);
    }
  };

  const isAddButtonDisabled =
    errorMessages.name || errorMessages.contactNumber || errorMessages.email;

  return (
    <>
      <button
        variant="primary"
        onClick={handleShow}
        className="btn-AddNewCustomer"
      >
        Add New Customer
      </button>

      <Modal show={show} onHide={() => handleClose("close")}>
        <Modal.Body>
          <Form>
            <Form.Group className="EName" controlId="forName">
              <Form.Label>Name</Form.Label>

              <Form.Control
                type="text"
                value={name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Name"
              />

              <Form.Text className="text-danger">
                {errorMessages.name}
              </Form.Text>
            </Form.Group>

            <Form.Group className="EContactNumber" controlId="forContactNumber">
              <Form.Label>Contact Number</Form.Label>

              <Form.Control
                type="text"
                value={contactNumber}
                onChange={(e) =>
                  handleInputChange("contactNumber", e.target.value)
                }
                placeholder="Contact Number"
              />

              <Form.Text className="text-danger">
                {errorMessages.contactNumber}
              </Form.Text>
            </Form.Group>

            <Form.Group className="EEmail" controlId="forEmail">
              <Form.Label>Email Address</Form.Label>

              <Form.Control
                type="email"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Email Address"
              />

              <Form.Text className="text-danger">
                {errorMessages.email}
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="Btn">
          <Button
            variant="secondary"
            onClick={() => handleClose("close")}
            onDoubleClick={() => setShow(false)}
          >
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => handleClose("add")}
            disabled={isAddButtonDisabled}
          >
            Add Contact
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContact;
