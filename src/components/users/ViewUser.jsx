import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
const ViewUser = () => {
  let history = useHistory();
  const { _id } = useParams();
  const [user, setUser] = useState({
    title: "",
    description: "",
    image: "",
  });
  const { title,description,image } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post(`http://localhost:5000/update/${_id}`, user);
//     console.log(user);
//     history.push("/");
//   };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/user/${_id}`);
    console.log(result);
    setUser(result.data);
  };
 
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">View A User</h2>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Title"
              name="title"
              value={title}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Description"
              name="description"
              value={description}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Image"
              name="image"
              value={image}
            //   onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block" style={{marginTop:"10px"}} onClick={()=> history.push("/")}> Ok</button>
        </form>
      </div>
    </div>
  );
};
export default ViewUser;