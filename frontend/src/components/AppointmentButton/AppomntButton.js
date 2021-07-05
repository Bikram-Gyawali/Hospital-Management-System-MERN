import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function AppomntButton() {
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  const { hospitalInfo } = hospitalLogin;
  const name = useRef();
  const services = useRef();
  const location = useRef();
  const date = useRef();
  const time = useRef();
  const contact = useRef();
  const desc = useRef();
  const [fullscreen, setFullscreen] = useState(true);

  const [lgShow, setLgShow] = useState(false);
  function handleShow() {
    setFullscreen(!fullscreen);
    setLgShow(true);
  }

  const submitAppointment = async (e) => {
    e.preventDefault();
    const newAppointment = {
      name: name.current.value,
      services: services.current.value,
      location: location.current.value,
      desc: desc.current.value,
      date: date.current.value,
      time: time.current.value,
      contact: contact.current.value,
    };
    try {
      await axios.post(
        `http://localhost:5000/api/userAppointmen/${hospitalInfo?._id}/appointment/setappointment`,
        newAppointment
      );
    } catch (error) {
      console.log(newAppointment);
      console.log("error applying appointments", error.response);
    }
  };
  return (
    <div>
      <Button
        className=" bg-primary mx-auto my-auto p-3 rounded-lg"
        onClick={() => handleShow()}
      >
        Apply Appointments
      </Button>
      <Modal
        size="lg t"
        show={lgShow}
        fullscreen={fullscreen}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Button>Apply Appointments</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form
              action="submit"
              className="mx-auto"
              onSubmit={submitAppointment}
            >
              <div>
                <span>Name:</span>
                <input
                  className="mt-2 mx-8 py-1 border border-blue-900 border-3  rounded-lg"
                  type="text"
                  style={{ resize: "none" }}
                  placeholder="name"
                  ref={name}
                />
                <span>Services:</span>
                <input
                  className="mt-2 mx-8 py-1 border border-blue-900 border-3  rounded-lg"
                  style={{ resize: "none" }}
                  type="text"
                  ref={services}
                  placeholder="services"
                />
                <div>
                  Address:
                  <input
                    className="mt-2 mx-3 py-1 border border-blue-900 border-3  rounded-lg"
                    type="text"
                    style={{ resize: "none" }}
                    placeholder="address"
                    ref={location}
                  />
                </div>
                <div>
                  <span>Date:</span>
                  <input
                    className="mt-2 mx-8 py-1 border border-blue-900 border-3  rounded-lg"
                    style={{ resize: "none" }}
                    type="date"
                    ref={date}
                  />{" "}
                  <span>Time:</span>
                  <input
                    className="mt-2 mx-8 py-1 border border-blue-900 border-3  rounded-lg"
                    style={{ resize: "none" }}
                    type="time"
                    ref={time}
                  />
                  <span>Contact:</span>
                  <input
                    className=" mx-8 py-1 border border-blue-900 border-3  rounded-lg"
                    style={{ resize: "none" }}
                    type="number"
                    ref={contact}
                    placeholder="9967313931"
                  />
                </div>
                <div className="flex flex-row">
                  <span className="mt-4 mr-3 ">Description:</span>
                  <br />
                  <textarea
                    className="border border-blue-900 border-3  rounded-lg mt-3"
                    name="description"
                    id="desc"
                    cols="20"
                    style={{ resize: "none" }}
                    ref={desc}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <Button
                className="bg-primary"
                type="submit"
                style={{
                  marginTop: "50px",
                  border: "1px solid black",
                  marginLeft: "45vw",
                }}
              >
                Apply Apointments
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AppomntButton;
