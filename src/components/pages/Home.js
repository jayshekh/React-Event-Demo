import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () =>
{
  const [users, setUser] = useState([]);
  useEffect(() =>
  {
    loadUsers();
  }, []);

  const loadUsers = async () =>
  {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id =>
  {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Event name</th>
              <th scope="col">Event Type </th>
              <th scope="col">Start date - End date </th>
              <th scope="col">Description</th>
              <th scope="col">Handled by</th>
              <th scope="col">Organisation</th>
              <th scope="col">Total number of sub-events</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.event_name}</td>
                <td>{user.event_type}</td>
                <td>{user.start_date} - {user.end_date}  </td>
                <td>{user.description}</td>
                <td>{user.handled_by}</td>
                <td>{user.organisation}</td>
                <td>{user.sub_events_num}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger "
                    onClick={() => deleteUser(user.id)}
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
  );
};

export default Home;
