import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    // const [data, setData] = useState([]);
    const { id } = useParams();

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then((res) => {
            setValues(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleUpdate =(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, values)
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
              <h3 className="m-0">Edit User</h3>
              <hr />
              <form action="" onSubmit={handleUpdate}>
                <div class="mb-1">
                  <label class="form-label">Enter Name</label>
                  <input type="text" value={values.name} class="form-control"
                  onChange={e=> setValues({...values, name: e.target.value})}  />
                </div>
                <div class="mb-1">
                  <label class="form-label">Enter Username</label>
                  <input type="text" value={values.username} class="form-control"
                  onChange={e=> setValues({...values, username: e.target.value})} />
                </div>
                <div class="mb-1">
                  <label class="form-label">Enter Email</label>
                  <input type="email" value={values.email} class="form-control"
                  onChange={e=> setValues({...values, email: e.target.value})}  />
                </div>
                <div class="mb-1">
                  <label class="form-label">Enter Phone</label>
                  <input type="text" value={values.phone} class="form-control"
                  onChange={e=> setValues({...values, name: e.target.phone})} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter Your Website Link</label>
                  <input type="text" value={values.website} class="form-control"
                  onChange={e=> setValues({...values, website: e.target.value})} />
                </div>
                <div>
                  <Link to="/" className="btn btn-dark">Go Back</Link>
                  <button type="submit" className="btn btn-primary mx-2">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Update;