import React, { useState } from "react";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import {useNavigate} from "react-router-dom"
import "./Add.css";

const YourFormComponent = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    address: "",
  });

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Category:", selectedCategory);
    console.log("Username:", username);
    console.log("Name:", name);
    console.log("Password:", password);

    if (selectedCategory === "addAddress") {
      console.log("First Name:", formData.firstName);
      console.log("Last Name:", formData.lastName);
      console.log("Father Name:", formData.fatherName);
      console.log("Mother Name:", formData.motherName);
      console.log("Address:", formData.address);
      navigate("/")
    }
  };

  const handleCancel = () => {
    setSelectedCategory("");
    setUsername("");
    setName("");
    setPassword("");

    // Reset additional fields for the addAddress category
    setFormData({
      ...formData,
      firstName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      address: "",
    });
  };

  const renderFields = () => {
    switch (selectedCategory) {
      case "addAddress":
        return (
          <>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                required
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                required
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherName">Father Name:</label>
              <input
                required
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={(e) =>
                  setFormData({ ...formData, fatherName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="motherName">Mother Name:</label>
              <input
                required
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={(e) =>
                  setFormData({ ...formData, motherName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                required
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
          </>
        );
      case "bankAccount":
        return (
          <>
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number:</label>
              <input
                required
                type="text"
                id="accountNumber"
                name="accountNumber"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ifscNumber">IFSC Number:</label>
              <input required type="text" id="ifscNumber" name="ifscNumber" />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">PIN Code:</label>
              <input required type="password" id="pinCode" name="pinCode" />
            </div>
          </>
        );
      case "socialMedia":
        return (
          <>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                required
                type="text"
                id="username"
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input required type="text" id="password" name="password" />
            </div>
            
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            className="select1"
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="addAddress">Add Local Address</option>
            <option value="socialMedia">Social Media</option>
            <option value="bankAccount">Bank Account</option>
          </select>
        </div>

        {renderFields()}

        {/* <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div> */}

        <div className="buttons-container">
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default YourFormComponent;