// import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import "./addNew.css";
import Select from "react-select";
import { bathrooms, bedrooms, purpose, types } from "./InputData";
const AddNew = () => {
  const [inputData, setInputData] = useState({
    title: "",
    price: "",
    types: "",
    details: "",
    bedrooms: "",
    bathrooms: "",
    purpose: "",
    size: "",
    location: "",
  });
  console.log(inputData);
  const handleValue = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div class="container">
      <div class="title">Add New Post</div>
      <form action="#">
        <div class="user__details">
          <div class="input__box">
            <span class="details">House Name</span>
            <input
              name="title"
              value={inputData.title}
              type="text"
              placeholder="E.g: Modern Apartments"
              required
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Price</span>
            <input
              name="price"
              value={inputData.price}
              type="text"
              placeholder="enter amount..."
              required
              onChange={handleValue}
            />
          </div>
          {/* types */}
          <div class="input__box">
            <span class="details">Types</span>
            <Select
              className="basic-single"
              classNamePrefix="select"
              // name="types"
              value={inputData.types}
              options={types}
              // name="types"
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Details</span>
            <input
              type="text"
              placeholder="Enter details about your house.."
              required
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Bedrooms</span>
            <Select
              className="basic-single"
              classNamePrefix="select"
              options={bedrooms}
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Bathrooms</span>
            <Select
              className="basic-single"
              classNamePrefix="select"
              options={bathrooms}
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Purpose</span>
            <Select
              className="basic-single"
              classNamePrefix="select"
              options={purpose}
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Size</span>
            <input
              type="text"
              placeholder="E.g: 3260 sqrft..."
              required
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Location</span>
            <input
              type="text"
              placeholder="enter the location..."
              required
              onChange={handleValue}
            />
          </div>
          <div class="input__box">
            <span class="details">Image</span>
            <input type="file" onChange={handleValue} />
          </div>
        </div>

        <div class="button">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddNew;
