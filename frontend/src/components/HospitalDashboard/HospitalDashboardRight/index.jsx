import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { PermMedia } from "@material-ui/icons";
function Hosdetails() {
  const [file, setFile] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const newService = (e) => {
    e.preventDefault();
  };
  const submitDoctors = (e) => {
    e.preventDefault();
  };
  const handleBeds = (e) => {
    e.preventDefault();
  };
  const handleBedTypes = (e) => {
    e.preventDefault();
  };
  const handleVaccancy = (e) => {
    e.preventDefault();
  };

  const handleContacts = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-9">
      <div className="descForm mx-14 border-4 rounded-lg mt-8 shadow p-3">
        <form
          action="submit"
          className="flex flex-row ml-7 pt-2 mx-auto "
          onSubmit={submitHandler}
        >
          <h1 className="text-blue-400"> Hospital Bio: </h1>
          <div className="flex flex-row">
            <textarea
              name="decription"
              id=""
              cols="60"
              placeholder="Add your Hospital Description"
              className="mx-3 border-2 border-blue-400 rounded-lg"
              rows="3"
              style={{ resize: "none" }}
            ></textarea>
          </div>

          <Button
            type="submit"
            style={{
              marginTop: "50px",
              border: "1px solid black",
              marginLeft: "10px",
            }}
          >
            Done
          </Button>
        </form>
      </div>

      <div className="mx-14 border-4 rounded-lg mt-8 shadow p-3">
        <form
          action="submit"
          className="flex flex-row mx-auto"
          onSubmit={newService}
        >
          <div className="mx-9 flex flex-col align-left">
            <div className="serviceName mt-2">
              <span className="mr-2">Event Name:</span>
              <input
                type="text"
                name="name"
                label="name"
                className=" border-2 border-blue-400 rounded-lg"
                placeholder="Service Name"
              />
              <span className="ml-3 mr-2">Date:</span>
              <input
                type="date"
                className=" border-2 border-blue-400 rounded-lg"
              />
            </div>
            <div className="serviceCharge  mt-2  "></div>
            <div className="servDesc mt-2 flex flex-row">
              <div>
                <h3 className="mr-2">Description:</h3>
              </div>
              <textarea
                name="servicedesc"
                id="servicedesc"
                cols="40"
                rows="3"
                style={{ resize: "none" }}
                placeholder="serviceDesc"
                className=" border-2 border-blue-400 rounded-lg"
              ></textarea>
            </div>
          </div>
          <div className="servImg  mt-2">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,.mp4"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <Button
            className="servBtn  h-10 w-30"
            type="submit"
            style={{
              marginTop: "130px",
              border: "1px solid black",
              marginLeft: "-80px",
            }}
          >
            Add New Events
          </Button>
        </form>
      </div>

      <div className="mx-14 border-4 rounded-lg mt-8 shadow p-3">
        <form
          action="submit"
          className="flex flex-row mx-auto"
          onSubmit={newService}
        >
          <div className="mx-9 flex flex-col align-left">
            <div className="serviceName mt-2">
              <span className="mr-10">Service:</span>
              <input
                type="text"
                name="name"
                label="name"
                className=" border-2 border-blue-400 rounded-lg"
                placeholder="Service Name"
              />
            </div>
            <div className="serviceCharge  mt-2  ">
              <span className="mr-10">Charge:</span>
              <input
                type="number"
                placeholder="Rs.00"
                className=" border-2 border-blue-400 rounded-lg"
              />
            </div>
            <div className="servDesc mt-2 flex flex-row">
              <div>
                <h3 className="mr-2">Description:</h3>
              </div>
              <textarea
                name="servicedesc"
                id="servicedesc"
                cols="20"
                rows="3"
                style={{ resize: "none" }}
                placeholder="serviceDesc"
                className=" border-2 border-blue-400 rounded-lg"
              ></textarea>
            </div>
          </div>
          <div className="servImg  mt-2">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,.mp4"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <Button
            className="servBtn  h-10 w-30"
            type="submit"
            style={{
              marginTop: "130px",
              border: "1px solid black",
              marginLeft: "-80px",
            }}
          >
            Add Service
          </Button>
        </form>
      </div>

      <div className="doctors mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        <form action="submit" onSubmit={submitDoctors}>
          <div className="flex flex-col">
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              placeholder="Doctor's Name"
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              placeholder="Category/Specialists"
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="number"
              placeholder="expreience in yrs"
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              placeholder="Doctor Id"
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              placeholder="graduatedForm"
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="number"
              placeholder="Contacts"
            />
            <Button
              className="servBtn  h-10 w-full "
              type="submit"
              style={{
                marginTop: "10px",
                border: "1px solid black",
                // marginLeft: "-80px",
              }}
            >
              Add Doctors
            </Button>
          </div>
        </form>
      </div>

      <div className="emgContacts mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        <form action="submit" onSubmit={handleContacts}>
          <div className="flex flex-row justify-start mx-auto ">
            <h1 className="mr-2 my-auto">Emergency Contacts:</h1>
            <input
              className="mr-2 p-2 border-2 rounded-lg  border-blue-400"
              type="text"
              placeholder="Name"
            />
            <input
              className="mr-2 p-2 border-2 rounded-lg  border-blue-400"
              placeholder="9867321212"
              type="number"
            />

            <Button
              className="servBtn  h-10 w-50 "
              type="submit"
              style={{
                marginTop: "0px",
                border: "1px solid black",
                // marginLeft: "-80px",
              }}
            >
              Add Contacts
            </Button>
          </div>
        </form>
      </div>

      <div className="beds mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        Bed Status in number
        <form action="submit" onSubmit={handleBeds}>
          <div>
            <input
              type="number"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="Beds"
            />
            <input
              type="number"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="Occupied"
            />
            <input
              type="number"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              name="number"
              placeholder="Available"
            />
          </div>
          <Button
            className="servBtn  h-10 w-full "
            type="submit"
            style={{
              marginTop: "10px",
              border: "1px solid black",
              // marginLeft: "-80px",
            }}
          >
            Update
          </Button>{" "}
        </form>
      </div>
      <div className="bedTypes mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        Bed Types in number.
        <form action="submit" onSubmit={handleBedTypes}>
          <div>
            <input
              type="number"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="ICU"
            />
            <input
              type="number"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="Ventilator"
            />
            <input
              type="number"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              name="number"
              placeholder="Others"
            />
          </div>
          <Button
            className="servBtn  h-10 w-full "
            type="submit"
            style={{
              marginTop: "10px",
              border: "1px solid black",
              // marginLeft: "-80px",
            }}
          >
            Update
          </Button>{" "}
        </form>
      </div>
      <div className="newVaccancy mx-14 mt-16 border-4 p-8 rounded-lg shadow mb-10">
        New Vaccancy
        <form action="submit" onSubmit={handleVaccancy}>
          <div>
            Position:
            <input
              type="text"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2 ml-9"
              placeholder="Vaccancy Position"
            />
            Total No:
            <input
              type="text"
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2 ml-2"
              placeholder="Total required "
            />
          </div>
          <div className="flex flex-row mt-3">
            <h1 className="mb-8 mr-1 ">Description:</h1>
            <textarea
              name=""
              placeholder="Description about the available vaccancy"
              id=""
              cols="51"
              rows="3"
              style={{ resize: "none" }}
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2 ml-2"
            ></textarea>
          </div>
          <br />
          <Button
            className="servBtn  h-10 w-full "
            type="submit"
            style={{
              marginTop: "5px",
              border: "1px solid black",
              // marginLeft: "-80px",
            }}
          >
            Add New Vaccancy
          </Button>{" "}
        </form>
      </div>
    </div>
  );
}

export default Hosdetails;
