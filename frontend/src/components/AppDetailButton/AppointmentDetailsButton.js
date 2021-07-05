import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function AppointmentDetailsButton({ res }) {
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  const { hospitalInfo } = hospitalLogin;

  const [fullscreen, setFullscreen] = useState(true);

  const [lgShow, setLgShow] = useState(false);
  function handleShow() {
    setFullscreen(!fullscreen);
    setLgShow(true);
  }
  // console.log("button", res);
  return (
    <div>
      <Button
        className=" bg-primary mx-auto my-auto p-3 rounded-lg"
        style={{ fontSize: "10px" }}
        onClick={() => handleShow()}
      >
        View Details
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
            <Button>Appointments Details</Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-blue-200">
          <div className="flex flex-col flex-wrap" style={{ fontSize: "20px" }}>
            <div className=" text-left border-b border-b-2 border-black">
              <span className="mr-10 font-semibold">Name:</span>
              <span className="font-light">{res?.name}</span>
            </div>
            <br />
            <div className="border-b-2 border-b-2 border-black">
              <span className="mr-16 font-semibold">Age:</span>
              <span className="font-light">{res?.age}</span>
            </div>
            <div className=" text-left border-b border-b-2 border-black">
              <div className="border-b-2 border-black">
                <span className="mr-3 font-semibold  ">Contacts:</span>
                <span>{res?.contact}</span>
              </div>
              <div className=" text-left border-b border-b-2 border-black">
                <span className="mr-8 font-semibold">Service:</span>
                <span>{res?.services}</span>
              </div>
              <div className=" text-left border-b border-b-2 border-black ">
                <span className="mr-6 font-semibold">Address:</span>
                <span>{res?.location}</span>
              </div>
              <div className=" text-left border-b flex flex-row border-b-2 border-black">
                <span className="mr-4 font-semibold">Description:</span>
                <span className="" style={{ display: "block" }}>
                  {res?.desc}
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AppointmentDetailsButton;
