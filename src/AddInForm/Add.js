import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./Add.css";

const YourFormComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

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
  };

  const handleCancel = () => {
    setSelectedCategory("");
    setUsername("");
    setName("");
    setPassword("");
  };

  const renderFields = () => {
    switch (selectedCategory) {
      case "socialMedia":
        return (
          <>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input-container">
                <input
                  required
                  type={type}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="password-toggle-icon" onClick={handleToggle}>
                  <Icon icon={icon} size={20} />
                </span>
              </div>
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
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="socialMedia">Social Media</option>
            <option value="bankAccount">Bank Account</option>
          </select>
        </div>

        {renderFields()}

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
