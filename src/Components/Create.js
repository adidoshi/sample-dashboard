import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("");
  const [phoneNumber, setPhoneNum] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios
      .post(`https://61481f4a65467e0017384cde.mockapi.io/usersData`, {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        history.push('/read')
  })
  };

  return (
    <>
      <div className="container">
        <h1 className="main">React CRUD Operations</h1>
        <p className="main">Create</p>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={postData}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
