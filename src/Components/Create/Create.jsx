import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const navigate = useNavigate();

    const handleSubmit =(event)=>{
        event.preventDefault();
        axios.post("http://localhost:3000/users", values)
        .then((res) => {
            console.log(res);
            navigate('/');
        })
        .catch((err) => console.log(err));
    }


  return (
    <div className="container">
      <div className="row justify-content-center m-auto">
        <div className="col-lg-6">
          <div className="card p-4 mt-4">
            <h3 className="m-0">Add User</h3>
            <hr />
            <form action="" onSubmit={handleSubmit}>
              <div class="mb-1">
                <label class="form-label">Enter Name</label>
                <input type="text" class="form-control" 
                onChange={e=> setValues({...values, name: e.target.value})} 
                />
              </div>
              <div class="mb-1">
                <label class="form-label">Enter Username</label>
                <input type="text" class="form-control"
                onChange={e=> setValues({...values, username: e.target.value})}
                 />
              </div>
              <div class="mb-1">
                <label class="form-label">Enter Email</label>
                <input type="email" class="form-control"
                onChange={e=> setValues({...values, email: e.target.value})}
                 />
              </div>
              <div class="mb-1">
                <label class="form-label">Enter Phone</label>
                <input type="text" class="form-control"
                onChange={e=> setValues({...values, phone: e.target.value})}
                 />
              </div>
              <div class="mb-3">
                <label class="form-label">Enter Your Website Link</label>
                <input type="text" class="form-control"
                onChange={e=> setValues({...values, website: e.target.value})}
                 />
              </div>
              <div>
                <Link to="/" className="btn btn-dark">Go Back</Link>
                <button type="submit" className="btn btn-primary mx-2">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
