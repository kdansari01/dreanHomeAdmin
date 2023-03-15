// import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import "./addNew.css";
import Select from "react-select";

import { bathrooms, bedrooms, purpose, types } from "./InputData";
const AddNew = () => {
  const [select, setSelect] = useState();
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
    img: "",
  });
  // const [imageAsset, setImageAsset] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
 const uploadImage=()=>{

 }

  console.log("select", select);
  const handleSelect = (option) => {
    setSelect(option.value);
  };
  // console.clear(inputData);
  console.log(inputData);
  const handleValue = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventdefault();
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
              onChange={handleValue}
              value={inputData.title}
              type="text"
              placeholder="E.g: Modern Apartments"
              required
            />
          </div>
          <div class="input__box">
            <span class="details">Price</span>
            <input
              name="price"
              value={inputData.price}
              type="text"
              placeholder="enter amount...E.g: 10K, 20Lac"
              required
              onChange={handleValue}
            />
          </div>
          {/* types */}
          <div class="input__box">
            <span class="details">Types</span>
            {/* <Select
              className="basic-single"
              classNamePrefix="select"
              // value={inputData.types}
              options={types}
              // name="types"
              onChange={handleSelect}
            /> */}
            <select onChange={handleValue} name="types">
              <option value="Appartment">Appartment</option>
              <option value="Villa">Villa</option>
              <option value="Farm-House">Farm-House</option>
            </select>
          </div>
          <div class="input__box">
            <span class="details">Details</span>
            <input
              type="text"
              placeholder="Enter details about your house.."
              required
              name="details"
              onChange={handleValue}
              value={inputData.details}
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
              name="purpose"
              onChange={handleValue}
              value={inputData.purpose}
            />
          </div>
          <div class="input__box">
            <span class="details">Location</span>
            <input
              type="text"
              placeholder="enter the location..."
              required
              name="location"
              onChange={handleValue}
              value={inputData.location}
            />
          </div>
          <div class="input__box">
            <span class="details">Image</span>
            <input
              type="file"
              onChange={uploadImage}
              // name="img"
              value={inputData.img}
            />
          </div>
        </div>

        <div class="button">
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default AddNew;
