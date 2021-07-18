import React, { useState } from "react";
import Modal from "components/GlobalComponents/Modal";
import Input from "components/GlobalComponents/Input";
import Label from "components/GlobalComponents/Label";
import Button from "components/GlobalComponents/Button";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";

const ModalTitle = styled.div`
  font-size: 57px;
  font-font-weight: medium;
`;

const ModalForm = styled.form``;

const ModalBody = styled.div`
  margin-top: 30px;
`;
const InputGroup = styled.div`
  margin-bottom: 30px;
`;

const AddEvent = ({ open, setOpen, type }) => {
  const [name, setName] = useState("");
  const [spec, setSpec] = useState("");
  const [contacts, setContacts] = useState(0);
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState(1);
  const [graduatedFrom, setGraduatedFrom] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const BASE_URL = `http://localhost:5000/api`;
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  let responseObject = { ...hospitalLogin.hospitalInfo };
  let id = responseObject._id;
  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    let reqBody = {
      name,
      spec,
      contacts: Number(contacts),
      email,
      doctorId: Math.floor(Math.random() * 10000000).toString(),
      exp: Number(exp),
      graduatedFrom,
    };
    // const [data, error] = await axiosRequest({
    //     url: `${BASE_URL}/hospitals/${id}/addDoctors`,
    //     method: "post",
    //     body: {...reqBody},
    // })

    // setSubmitting(false)
    // if (data) {
    //     alert("Successfully submitted form");
    //     setName("")
    //     setSpec("")
    //     setContacts(0)
    //     setEmail("")
    //     setExp(1)
    //     setGraduatedFrom("")
    // }
    // if (error) {
    //     alert("Error submitting form");
    //     console.log(error.response)
    // }
    try {
      const data = await axios.post(
        `${BASE_URL}/hospitals/${id}/addDoctors`,
        reqBody
      );
      setSubmitting(false);
      alert("Successfully submitted form");
      // console.log(data);
      setName("");
      setSpec("");
      setContacts(0);
      setEmail("");
      setExp(1);
      setGraduatedFrom("");
    } catch (error) {
      alert("Error submitting form");
      // console.log(error.response)
    }
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>{type === "add" ? "Add Doctor" : "Update Doctor"}</ModalTitle>

      <ModalForm onSubmit={handleSubmit}>
        <ModalBody>
          <InputGroup>
            <Label htmlFor="doctorName">Doctor Name</Label>
            <Input
              type="text"
              id="doctorName"
              fluid
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="doctorEmail">Doctor Email</Label>
            <Input
              type="email"
              id="doctorEmail"
              fluid
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="doctorExp">Experience</Label>
            <Input
              type="number"
              id="doctorExp"
              fluid
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="doctorSpecialities">Speciality</Label>
            <Input
              type="text"
              id="doctorSpecialities"
              fluid
              value={spec}
              onChange={(e) => setSpec(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="primaryNumber">Primary Number</Label>
            <Input
              type="number"
              id="primaryNumber"
              fluid
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="graduatedFrom">Graduated From</Label>
            <Input
              type="text"
              id="graduatedFrom"
              fluid
              value={graduatedFrom}
              onChange={(e) => setGraduatedFrom(e.target.value)}
            />
          </InputGroup>
        </ModalBody>
        {type === "add" ? (
          <Button type="submit" disabled={submitting}>
            Add Doctor
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            Update Doctor
          </Button>
        )}
      </ModalForm>
    </Modal>
  );
};

export default AddEvent;
