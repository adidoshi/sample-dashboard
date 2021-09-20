import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';

function Update() {
    let history = useHistory();
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmail] = useState("");
  const [phoneNumber, setPhoneNum] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
      setId(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setEmail(localStorage.getItem('Email Id'));
    setPhoneNum(localStorage.getItem('Phone Number'));
  }, [])

  function updateApiData(e){
        e.preventDefault();
      axios.put(`https://61481f4a65467e0017384cde.mockapi.io/usersData/${id}`, {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        phoneNumber: phoneNumber,
      })
      .then(() => {
        history.push('/read')
  })}
    return (
        <>
        <h1 className="main">Update Component</h1>
        <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              value={firstName}
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
              value={lastName}
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
              value={emailId}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputphoneNum" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputphoneNum"
              value={phoneNumber}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={updateApiData}>
            Update
          </button>
        </form>
      </div>
        </>
    )
}

export default Update
