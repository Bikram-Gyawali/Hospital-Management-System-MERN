import React, { useState, useRef } from "react";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { PermMedia } from "@material-ui/icons";
import axios from "axios";
import { useParams } from "react-router";

function Hosdetails() {
  const local = "http://localhost:5000/api";
  const dispatch = useDispatch();
  const hospitalId = useParams().id;

  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  const { hospitalInfo } = hospitalLogin;
  // const {...other,password}=hospitalInfol;
  // console.log(hospitalInfo);

  const bio = useRef();
  const serviceCharge = useRef();
  const serviceName = useRef();
  const serviceDesc = useRef();
  const eventname = useRef();
  const eventdesc = useRef();
  const eventdate = useRef();
  const docName = useRef();
  const docSpec = useRef();
  const docExp = useRef();
  const docId = useRef();
  const docGrad = useRef();
  const docCon = useRef();
  const docEmail = useRef();
  const emgName = useRef();
  const emgCon = useRef();
  const beds = useRef();
  const occupied = useRef();
  const available = useRef();
  const icu = useRef();
  const ventilator = useRef();
  const others = useRef();
  const position = useRef();
  const reqTotal = useRef();
  const vacDesc = useRef();

  const [data, setData] = useState();

  const [file, setFile] = useState(null);
  const handleBio = async (e) => {
    e.preventDefault();
    const newBio = {
      hospitalDescription: bio.current.value,
    };
    try {
      await axios.put(
        `${local}/hospitals/${hospitalInfo?._id}/updateHospital`,
        newBio
      );
      bio.current.value = "";
    } catch (error) {
      console.log("error updating  bio", error);
    }
  };
  const newService = async (e) => {
    e.preventDefault();
    const newService = {
      topic: serviceName.current.value,
      serviceCharge: serviceCharge.current.value,
      desc: serviceDesc.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo?._id}/services/addservice`,
        newService
      );
    } catch (error) {
      console.log("error on adding service");
    }
  };
  const addEvents = async (e) => {
    e.preventDefault();
    const newEvents = {
      eventName: eventname.current.value,
      date: eventdate.current.value,
      desc: eventdesc.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo?._id}/events/addEvents`,
        newEvents
      );
    } catch (error) {
      console.log("unable to add new events", error);
    }
  };
  const addDoctors = async (e) => {
    e.preventDefault();
    const addNewDoctor = {
      name: docName.current.value,
      spec: docSpec.current.value,
      contacts: docCon.current.value,
      email: docEmail.current.value,
      doctorId: docId.current.value,
      exp: docExp.current.value,
      graduatedForm: docGrad.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo?._id}/addDoctors`,
        addNewDoctor
      );
    } catch (error) {
      console.log("unable to add new events", error);
    }
  };
  const handleBeds = async (e) => {
    e.preventDefault();
    const updateBeds = {
      total: beds.current.value,
      occupied: occupied.current.value,
      available: available.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo?._id}/addBeds`,
        updateBeds
      );
    } catch (error) {
      console.log("unable to add new events", error);
    }
  };
  const handleBedTypes = async (e) => {
    e.preventDefault();
    const bedTypes = {
      icu: icu.current.value,
      ventilator: ventilator.current.value,
      other: others.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo?._id}/bedTypes`,
        bedTypes
      );
    } catch (error) {
      console.log("unable to add new events", error);
    }
  };
  const handleVaccancy = async (e) => {
    e.preventDefault();
    console.log("handle vaccancy");
    const addVaccancy = {
      position: position.current.value,
      amount: reqTotal.current.value,
      desc: vacDesc.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo._id}/addVaccancy`,
        addVaccancy
      );
    } catch (error) {
      console.log("unable to add new events", error);
    }
  };

  const handleContacts = async (e) => {
    e.preventDefault();
    const addContacts = {
      name: emgName.current.value,
      number: emgCon.current.value,
    };
    try {
      await axios.post(
        `${local}/hospitals/${hospitalInfo?._id}/addContacts`,
        addContacts
      );
    } catch (error) {
      console.log("unable to add new events", error);
    }
  };

  // console.log(file);
  return (
    <div className="mx-9">
      <div className="descForm mx-14 border-4 rounded-lg mt-8 shadow p-3">
        <form
          action="submit"
          className="flex flex-row ml-7 pt-2 mx-auto "
          onSubmit={handleBio}
        >
          <h1 className="text-blue-400"> Hospital Bio: </h1>
          <div className="flex flex-row">
            <textarea
              name="decription"
              id=""
              required
              cols="60"
              placeholder="Add your Hospital Description"
              className="mx-3 border-2 border-blue-400 rounded-lg"
              rows="3"
              ref={bio}
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

      {/* event block */}

      <div className="mx-14 border-4 rounded-lg mt-8 shadow p-3">
        <form
          action="submit"
          className="flex flex-row mx-auto"
          onSubmit={addEvents}
        >
          <div className="mx-9 flex flex-col align-left">
            <div className="serviceName mt-2">
              <span className="mr-2">Event Name:</span>
              <input
                type="text"
                name="name"
                required
                label="name"
                className=" border-2 border-blue-400 rounded-lg"
                placeholder="Event Name"
                ref={eventname}
              />
              <span className="ml-3 mr-2">Date:</span>
              <input
                type="date"
                required
                className=" border-2 border-blue-400 rounded-lg"
                ref={eventdate}
              />
            </div>

            <div className="serviceCharge  mt-2  "></div>
            <div className="servDesc mt-2 flex flex-row">
              <div>
                <h3 className="mr-2">Description:</h3>
              </div>
              <textarea
                name="servicedesc"
                required
                id="servicedesc"
                cols="40"
                rows="3"
                style={{ resize: "none" }}
                placeholder="Event Desc"
                className=" border-2 border-blue-400 rounded-lg"
                ref={eventdesc}
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

      {/* service block */}
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
                required
                label="name"
                className=" border-2 border-blue-400 rounded-lg"
                placeholder="Service Name"
                ref={serviceName}
              />
            </div>
            <div className="serviceCharge  mt-2  ">
              <span className="mr-10">Charge:</span>
              <input
                type="number"
                required
                placeholder="Rs.00"
                className=" border-2 border-blue-400 rounded-lg"
                ref={serviceCharge}
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
                required
                style={{ resize: "none" }}
                placeholder="serviceDesc"
                className=" border-2 border-blue-400 rounded-lg"
                ref={serviceDesc}
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

      {/* doctors block */}
      <div className="doctors mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        <form action="submit" onSubmit={addDoctors}>
          <div className="flex flex-col">
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              required
              placeholder="Doctor's Name"
              ref={docName}
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              required
              placeholder="Category/Specialists"
              ref={docSpec}
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="number"
              required
              placeholder="expreience in yrs"
              ref={docExp}
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              required
              placeholder="Doctor Id"
              ref={docId}
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="text"
              placeholder="graduatedForm"
              ref={docGrad}
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="number"
              placeholder="Contacts"
              ref={docCon}
            />
            <input
              className="mt-2 p-2 border-2 rounded-lg  border-blue-400 "
              type="email"
              placeholder="Doctor email"
              ref={docEmail}
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

      {/* Contacts Addition Function */}
      <div className="emgContacts mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        <form action="submit" onSubmit={handleContacts}>
          <div className="flex flex-row justify-start mx-auto ">
            <h1 className="mr-2 my-auto">Emergency Contacts:</h1>
            <input
              className="mr-2 p-2 border-2 rounded-lg  border-blue-400"
              type="text"
              required
              placeholder="Name"
              ref={emgName}
            />
            <input
              className="mr-2 p-2 border-2 rounded-lg  border-blue-400"
              placeholder="9867321212"
              type="number"
              required
              ref={emgCon}
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
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="Beds"
              ref={beds}
            />
            <input
              type="number"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="Occupied"
              ref={occupied}
            />
            <input
              type="number"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              name="number"
              placeholder="Available"
              ref={available}
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

      {/* bed types blocl */}
      <div className="bedTypes mx-14 mt-16 border-4 p-8 rounded-lg shadow">
        Bed Types in number.
        <form action="submit" onSubmit={handleBedTypes}>
          <div>
            <input
              type="number"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="ICU"
              ref={icu}
            />
            <input
              type="number"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              placeholder="Ventilator"
              ref={ventilator}
            />
            <input
              type="number"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2"
              name="number"
              placeholder="Others"
              ref={others}
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

      {/* new vaccancy */}
      <div className="newVaccancy mx-14 mt-16 border-4 p-8 rounded-lg shadow mb-10">
        New Vaccancy
        <form action="submit" onSubmit={handleVaccancy}>
          <div>
            Position:
            <input
              type="text"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2 ml-9"
              placeholder="Vaccancy Position"
              ref={position}
            />
            Total No:
            <input
              type="number"
              required
              className="p-2 border-2 rounded-lg  border-blue-400 mr-2 ml-2"
              placeholder="Total required"
              ref={reqTotal}
            />
          </div>
          <div className="flex flex-row mt-3">
            <h1 className="mb-8 mr-1 ">Description:</h1>
            <textarea
              name=""
              required
              placeholder="Description about the available vaccancy"
              id=""
              cols="51"
              rows="3"
              style={{ resize: "none" }}
              ref={vacDesc}
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
