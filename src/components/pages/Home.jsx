import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home =()=>{
  const showFullText = (e, text) => {
    e.target.innerText = '';
    e.target.nextSibling.innerText = text;
  };
  const hideFullText = (e, text) => {
    e.target.innerText = '';
    e.target.previousSibling.innerText = `${text.slice(0, 35)}...`;
  };
    const [users,setUser]= useState([]);
    useEffect(() => {
        loadUsers();
      }, []);

      const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/user/");
        setUser(result.data.reverse());
      };

      const deleteUser = async id => {
        await axios.delete(`http://localhost:5000/${id}`);
        console.log(id);
          // loadUsers();
          setTimeout(() => {
            // setModal(false)
            window.location.href = '/';
         }, 3000);
      
        // history.push('/')
      };
      

    return(
        <div className="container">
            <div className="py-4">
               
                <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Index</th>
              <th scope="col">name</th>
              <th scope="col">position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>
               {user.title}
                </td>
                <td>
                <span style={{ cursor: 'pointer' }} onClick={(e) => showFullText(e, user.description)}>
                      {user.description.slice(0, 35)}...
                    </span>
                    <span style={{ cursor: 'pointer' }} onClick={(e) => hideFullText(e, user.description)}></span>
                </td>
                <td>{user.image}</td>
                <td>
                <Link class="btn btn-primary mr-2" to={`/users/view/${user._id}`} style={{margin:"5px"}}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user._id}`} style={{margin:"5px"}}
                  >
                    Edit
                  </Link>
                  <Link to='/'
                  style={{margin:"5px"}}
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
        </div>
    )
}
export default Home;