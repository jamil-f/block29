import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import "./pageStyles.css";

export default function AddPuppy() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ status: "bench" });
  
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.imageUrl) {
        formData.imageUrl =
        "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
    }
    axios
    .post(`${import.meta.env.VITE_BASE_URL}/players`, formData)
    .then((response) => {
        console.log(response);
        if (response.data.success) {
            alert("Successfully Added Player!")
            navigate("/");
        }
    })
    .catch((err) => console.log(err));
    console.log(formData);
  };

  return (
    <>
      <form>
        <label>
          Player's Name:
          <input type="text" name="name" onChange={handleInput} />
        </label>
        <label>
          Player's Breed:
          <input type="text" name="breed" onChange={handleInput} />
        </label>
        <label>
          Status:
          <select name="status" defaultValue="bench" onChange={handleInput}>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <label>
          Image Url:
          <input type="text" name="imageUrl" onChange={handleInput} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}