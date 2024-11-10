import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row justify-content-center m-auto">
        <div className="col-lg-6">
          <div className="card p-4">
            <h3 className="m-0">User Details</h3>
            <hr />
            <h5>Name: {data.name}</h5>
            <h5>Username: {data.username}</h5>
            <h5>Email: {data.email}</h5>
            <h5>Phone: {data.phone}</h5>
            <h5 className="mb-3">Website: {data.website}</h5>
            <div>
            <Link to="/" className="btn btn-dark">Go Back</Link>
            <Link to={`/update/${id}`} className="btn btn-primary mx-2">Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
