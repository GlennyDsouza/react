import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    position: ""
  });

  const { name, position } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
      e.preventDefault();
      const finalData = {
        name: user.name,
        position: user.position
      };
      axios
      .post(`http://localhost:5000/user/add`, finalData)
      .then((res) => console.log(res.data)
     )
      .catch((err) => {
        console.log(err);
      });
    setUser({
      name: "",
      position: ""
    });
    history.push("/");
   
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="position"
              name="position"
              value={position}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block" style={{marginTop:"10px"}}>Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
