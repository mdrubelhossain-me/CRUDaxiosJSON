import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="m-0">List of All User</h3>
          <Link to="/create" className="btn btn-primary">
            Add New +
          </Link>
        </div>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list) => (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.username}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
                <td>{list.website}</td>
                <td>
                  <Link to={`/read/${list.id}`} className="btn btn-info">Read</Link>
                  <Link to={`/update/${list.id}`} className="btn btn-primary mx-2">Edit</Link>
                  <button onClick={e => handleDelete(list.id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
