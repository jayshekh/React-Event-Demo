import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () =>
{
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    event_name: "",
    event_type: "",
    description: "",
    handled_by: "",
    organisation: "",
    start_date: "",
    end_date: "",
    sub_events_num: "",

  });

  const {
    event_name, description, handled_by, organisation, start_date, end_date, sub_events_num, event_type
  } = user;
  const onInputChange = e =>
  {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() =>
  {
    loadUser();
  }, []);

  const onSubmit = async e =>
  {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () =>
  {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };

  const [error, setError] = useState(false)

  const handleSubmit = (e) =>
  {
    if (
      event_name.length === 0 || description.length === 0 || handled_by.length === 0 || organisation.length === 0 ||
      sub_events_num.length === 0 || start_date.length === 0 || end_date.length === 0 || event_type.length === 0
    )
    {
      setError(true)
    }

    if (event_name && description && handled_by && organisation && start_date && end_date && sub_events_num && event_type
    )
    {
      console.log(
        "Enter Event Name", event_name, "description: ", description,
        "handled by: ", handled_by, "organisation: ", organisation,
        "Enter your start date", start_date,
        "Enter your end date", end_date,
        "enter your sub events name ", sub_events_num,
        "select your event type id", event_type,
      )
    }
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"

              required minLength={1}
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="event_name"
              value={event_name}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && event_name.length <= 0 ?
            <label>Event Name can't be Empty</label> : ""}

          <div class="form-group" >
            <select className="form-control" name="event_type" value={event_type} onChange={e => onInputChange(e)}>
              <option value="">Select</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="General">General</option>
              <option value="Children">Children</option>
              <option value="School">School</option>
            </select>
          </div>

          {error && event_type.length <= 0 ?
            <label>can't be Empty event type</label> : ""}

          <div className="form-group">
            <input
              type="date"

              required minLength={1}
              className="form-control form-control-lg"
              // placeholder="enter joining date"
              name="start_date"
              value={start_date}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && start_date.length <= 0 ?
            <label>can't be Empty Start date</label> : ""}


          <div className="form-group">
            <input
              type="date"

              required minLength={1}
              className="form-control form-control-lg"
              // placeholder="enter joining date"
              name="end_date"
              value={end_date}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && end_date.length <= 0 ?
            <label>can't be Empty End Date</label> : ""}

          <div className="form-group">
            <input
              type="text"

              required minLength={1}
              className="form-control form-control-lg"
              placeholder="description"
              name="description"
              value={description}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && description.length <= 0 ?
            <label>description can't be Empty</label> : ""}

          <div className="form-group">
            <input
              type="text"

              required minLength={1}
              className="form-control form-control-lg"
              placeholder="handled by"
              name="handled_by"
              value={handled_by}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && handled_by.length <= 0 ?
            <label>handled by can't be Empty</label> : ""}


          <div className="form-group">
            <input
              type="text"

              required minLength={1}
              className="form-control form-control-lg"
              placeholder="organisation"
              name="organisation"
              value={organisation}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && organisation.length <= 0 ?
            <label>organisation can't be Empty</label> : ""}

          <div className="form-group">
            <input
              type="number"

              required minLength={1}
              className="form-control form-control-lg"
              placeholder="Enter your sub_events_num"
              name="sub_events_num"
              value={sub_events_num}
              onChange={e => onInputChange(e)}
            />
          </div>

          {error && sub_events_num.length <= 0 ?
            <label>sub events name can't be Empty</label> : ""}

          <button className="btn btn-warning btn-block" onClick={handleSubmit}>Update User</button>
          <br></br>
        </form>
      </div >
    </div >
  );
};
export default EditUser;
