import React, { useState } from "react";
import axios from 'axios'

import { useHistory } from "react-router-dom";

const AddUser = () =>
{

  let history = useHistory();
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


  const {
    event_name, description, handled_by, organisation, start_date, end_date, sub_events_num, event_type
  } = user;

  const onInputChange = e =>
  {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState(false)

  const onSubmit = async e =>
  {
    e.preventDefault();
    e.preventDefault();
    await axios.post("http://localhost:3003/users", user);
    history.push("/");
  };

  const handleSubmit = (e) =>
  {
    if (
      event_name.length === 0 || description.length === 0 || handled_by.length === 0 || organisation.length === 0 ||
      sub_events_num.length === 0 || start_date.length === 0 || end_date.length === 0 ||
      event_type.length === 0
    )
    {
      setError(true)
    }

    if (event_name && description && handled_by && organisation && start_date && end_date
      && sub_events_num && event_type
    )
    {
      console.log(
        "Enter Event Name", event_name,
        "select event type", event_type,
        "description: ", description,
        "handled_by: ", handled_by,
        "organisation: ", organisation,
        "Enter start date", start_date, "Enter end date", end_date,
        "enter  sub_events_num ", sub_events_num,
      )
    }

  }
  debugger;

  return (
    <>
      <div className="container" >
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                required minLength={[1, "enter your name"]}
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Event Name"
                name="event_name"
                value={event_name}
                onChange={e => onInputChange(e)}
              />
            </div>

            {error && event_name.length <= 0 ?
              <label>Event Name can't be Empty</label> : ""}

            <div class="form-group" >
              <select className="form-control" name="event_type" value={event_type}
                onChange={e => onInputChange(e)}>
                <option value="">select</option>
                <option value="Sports">Sports</option>
                <option value="Music">Music</option>
                <option value="General">General</option>
                <option value="Children">Children</option>
                <option value="School">School</option>
              </select>

            </div>

            {error && event_type.length <= 0 ?
              <label>can't be select Event type</label> : ""}

            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="enter start date"
                name="start_date"
                value={start_date}
                onChange={e => onInputChange(e)}
              />
            </div>

            {error && start_date.length <= 0 ?
              <label>can't be Empty start date</label> : ""}

            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="enter end date"
                name="end_date"
                value={end_date}
                onChange={e => onInputChange(e)}
              />
            </div>

            {error && end_date.length <= 0 ?
              <label>can't be end date</label> : ""}

            <div className="form-group">
              <input
                required minLength={1}
                type="text"
                className="form-control form-control-lg"
                placeholder="Description"
                name="description"
                value={description}
                onChange={e => onInputChange(e)}
              />
            </div>

            {error && description.length <= 0 ?
              <label>description can't be Empty</label> : ""}

            <div className="form-group">
              <input
                required minLength={1}
                type="text"
                className="form-control form-control-lg"
                placeholder="Handled by"
                name="handled_by"
                value={handled_by}
                onChange={e => onInputChange(e)}
              />
            </div>

            {error && handled_by.length <= 0 ?
              <label>handled by can't be Empty</label> : ""}

            <div className="form-group">
              <input
                required minLength={1}
                type="text"
                className="form-control form-control-lg"
                placeholder="Organisation"
                name="organisation"
                value={organisation}
                onChange={e => onInputChange(e)}
              />
            </div>

            {error && organisation.length <= 0 ?
              <label>organisation can't be Empty</label> : ""}

            <div className="form-group">
              <input
                required minLength={1}
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter Sub Events number"
                name="sub_events_num"
                value={sub_events_num}
                onChange={e => onInputChange(e)}
              />

            </div>

            {error && sub_events_num.length <= 0 ?
              <label>sub events name can't be Empty</label> : ""}

            <button type="submit" className="btn btn-primary btn-block" id='submit' onClick={handleSubmit} >Submit</button>
          </form>
        </div>
      </div >
    </>
  );
}

export default AddUser;