import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () =>
{
  const [user, setUser] = useState({
    event_name: "",
    description: "",
    handled_by: "",
    organisation: "",
    start_date: "",
    end_date: "",
    sub_events_num: "",
    event_type: "",
  });

  const { id } = useParams();
  useEffect(() =>
  {
    loadUser();
  }, []);

  const loadUser = async () =>
  {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <>
      <div className="container py-4">
        <Link className="btn btn-primary" to="/">
          back to List
        </Link>

        <h1 className="display-5">User Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">event Name: {user.event_name}</li><br></br>
          <p className="list-group-item"> event type: {user.event_type}</p>
          <li className="list-group-item">Date: {user.start_date} - {user.end_date}</li><br></br>
          <li className="list-group-item">description: {user.description}</li><br></br>
          <li className="list-group-item">handled by: {user.handled_by}</li><br></br>
          <li className="list-group-item">organisation: {user.organisation}</li><br></br>
          <li className="list-group-item">sub events name: {user.sub_events_num}</li><br></br>
        </ul>

      </div >
    </>
  );
};

export default User;
