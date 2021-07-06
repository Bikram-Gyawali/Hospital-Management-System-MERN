import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import { useParams } from "react-router-dom";
import Input from 'components/GlobalComponents/Input'
import Label from 'components/GlobalComponents/Label'
import Modal from 'components/GlobalComponents/Modal'
import Button from 'components/GlobalComponents/Button'
import styled from "styled-components";
import Textarea from "components/GlobalComponents/Textarea";

const InputGroup = styled.div`
    margin-bottom: 30px;
`

function AppomntButton() {
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  const params = useParams();
  const name = useRef();
  const services = useRef();
  const location = useRef();
  const date = useRef();
  const time = useRef();
  const contact = useRef();
  const desc = useRef();
  const age = useRef();
  const [fullscreen, setFullscreen] = useState(true);
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  function handleShow() {
    setFullscreen(!fullscreen);
    setOpen(true);
  }

  const submitAppointment = async (e) => {
    e.preventDefault();
    console.log("Submitted")
    const newAppointment = {
      name: name.current.value,
      services: services.current.value,
      location: location.current.value,
      desc: desc.current.value,
      date: new Date(date.current.value),
      time: time.current.value,
      contact: Number(contact.current.value),
      age: age.current.value,
    };
    try {
      setIsSubmitting(true);
      await axios.post(
        `http://localhost:5000/api/userAppointment/${params.id}/appointment/setappointment/`,
        newAppointment
      );
      alert("Successfuly submitted appointment form! Please wait for hospital response");
      setOpen(false)
    } catch (error) {
      console.log("error applying appointments", error.response);
      console.log({ ...newAppointment });
      alert("Error applying for appointments");
    }
    setIsSubmitting(false)

    // const reqBody = {
    //   url: `http://localhost:5000/api/userAppointment/60e0638708e8331f5cb3f9bd/appointment/setappointment/`,
    //   method: "post",
    //   body: newAppointment
    // }
    // const [data, error] = await axiosRequest(reqBody)
    // if (data) {
    //   console.log(data)
    // }
    // if (error) {
    //   console.log(newAppointment.date)
    //   console.log(error.response);
    // }
  };
  console.log(params)
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
        fullscreen={fullscreen}
        open={open}
        setOpen={setOpen}

      >
        <form onSubmit={submitAppointment}>
          <InputGroup>
            <Label>Name</Label>
            <Input
              type="text"
              fluid
              placeholder="name"
              ref={name}
            />
          </InputGroup>
          <InputGroup>
            <Label>Age</Label>
            <Input
              type="number"
              placeholder="Age"
              ref={age}
              fluid
            />
          </InputGroup>
          <InputGroup>
            <Label>Services</Label>
            <Input
              fluid
              type="text"
              ref={services}
              placeholder="services"
            />
          </InputGroup>


          <InputGroup>
            <Label>Address</Label>
            <Input
              type="text"
              fluid
              placeholder="address"
              ref={location}
            />
          </InputGroup>
          <InputGroup>
            <Label>Date</Label>
            <Input
              type="date"
              fluid
              ref={date}
            />
          </InputGroup>
          <InputGroup>
            <Label>Time</Label>
            <Input
              type="time"
              fluid
              ref={time}
            />
          </InputGroup>
          <InputGroup>
            <Label>Contact</Label>
            <Input
              type="number"
              ref={contact}
              fluid
              placeholder="9967313931"
            />
          </InputGroup>

          <InputGroup>
            <Label>Description</Label>
            <br />
            <Textarea
              name="description"
              id="desc"
              ref={desc}
              fluid
            />
          </InputGroup>
          <Button disabled = {isSubmitting}>
            Apply Apointments
          </Button>
        </form>
      </Modal>
    </div>
  );
}

export default AppomntButton;
