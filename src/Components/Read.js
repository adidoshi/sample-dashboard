import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://61481f4a65467e0017384cde.mockapi.io/usersData")
      .then((resp) => {
        setApiData(resp.data);
        // console.log(resp.data)
      });
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, emailId, phoneNumber } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email Id", emailId);
    localStorage.setItem("Phone Number", phoneNumber);
  };

  const getData = () => {
    axios
      .get(`https://61481f4a65467e0017384cde.mockapi.io/usersData`)
      .then((response) => {
        setApiData(response.data);
      });
  };

  const onDel = (id) => {
    axios
      .delete(`https://61481f4a65467e0017384cde.mockapi.io/usersData/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <h1 className="main">Read Component</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((elem) => {
            return (
                <React.Fragment key={elem.id}>
                <tr>
                  <td>{elem.id}</td>
                  <td>{elem.firstName}</td>
                  <td>{elem.lastName}</td>
                  <td>{elem.emailId}</td>
                  <td>{elem.phoneNumber}</td>
                  <td>
                    <Link to="/update">
                      <button
                        onClick={() => setData(elem)}
                        className="btn btn-warning"
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDel(elem.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
