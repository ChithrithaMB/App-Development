import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../pages/AxiosConfig";
//import bg5.jpg from "../images"
import '../assets/css/addUser.css';

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    place:""
  });

  const { name, phone, email, place } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if(name==""){
      alert('enter a Name')
      this.setState({
        error: "Invalid name"
    });
    }
    const mail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if( !(phone.match('[0-9]{10}')) ){
      alert('Please provide valid phone number');
      this.setState({
        error: "Phone Number is not valid"
      });
    }
    if(!email.match(mail)){
      alert('Please provide valid e-mail');
      this.setState({
        error: "Email Id is not valid"
      });
    }
    if(place==""){
      alert('enter a Place')
      this.setState({
        error: "Invalid place"
    });
    }
    await axiosInstance.post("http://localhost:8080/api/v1/medical/doctor", user);
    navigate("/list");
  };

  return (
    <>
    <div>
    <div className="divs">
    <div className="container1">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="big22">Add Doctors</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="font2">
              <label htmlFor="Name" className="form-label1">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="font2">
              <label htmlFor="PhoneNumber" className="form-label1">
                Phone Number
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="font2">
              <label htmlFor="Email" className="form-label1">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="font2">
              <label htmlFor="Place" className="form-label1">
              Dept
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your department"
                name="place"
                value={place}
                onChange={(e) => onInputChange(e)}/>
                </div><br/>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}