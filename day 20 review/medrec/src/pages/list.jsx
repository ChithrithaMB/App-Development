import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
 import './home.css';
import axiosInstance from "./AxiosConfig";
import '../assets/css/list.css';

export default function List() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axiosInstance.get("http://localhost:8080/api/v1/medical/getDoctor");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axiosInstance.delete(`http://localhost:8080/api/v1/medical/deleteDoctor/${id}`);
    loadUsers();
  };

  return (
    <>
<div>
    <section1>
      <br/>
      <h2 className="big32">Doctor List</h2><br/><br/><br/><br/><br/><br/>
      <div className="container">
      <div className="py-4">
        
        <table className="table border shadow">
          <thead>
            <tr>
              <th className="big22" scope="col">ID</th>
              <th className="big22" scope="col">Name</th>
              <th className="big22" scope="col">Phone Number</th>
              <th className="big22" scope="col">Email</th>
              <th className="big22" scope="col">Dept</th>
              <th className="big22" scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index} ><td className="font2">
                  {index + 1}</td>
                </th>
                <td className="font2">{user.name}</td>
                <td className="font2">{user.phone}</td>
                <td className="font2">{user.email}</td>
                <td className="font2">{user.place}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button2
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </section1>
    </div>
  </>
  );
}