import React, { useState } from "react";
import Modal from "components/GlobalComponents/Modal";
import Input from "components/GlobalComponents/Input";
import Label from "components/GlobalComponents/Label";
import TextArea from "components/GlobalComponents/Textarea";
import Button from "components/GlobalComponents/Button";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { axiosRequest } from "utils/axiosRequest";

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
const BASE_URL = `http://localhost:5000/api`;
const AddEvent = ({ open, setOpen, type }) => {
  const [topic, setTopic] = useState("");
  const [charge, setCharge] = useState(0);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  let responseObject = { ...hospitalLogin.hospitalInfo };
  let id = responseObject._id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let respBody = {
      url: `${BASE_URL}/hospitals/${id}/services/addservice`,
      method: "post",
      body: { topic, serviceCharge: charge, desc: description },
    };
    const [data, error] = await axiosRequest(respBody);
    // console.log(data, error);
    setIsSubmitting(false);
    if (data) {
      alert("Service Added successfully");
      setTopic("");
      setCharge("");
      setDescription("");
    }
    if (error) {
      alert("Error submitting form");
    }
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>
        {type === "add" ? "Add Service" : "Update Service"}
      </ModalTitle>

      <ModalForm onSubmit={handleSubmit}>
        <ModalBody>
          <InputGroup>
            <Label htmlFor="serviceTopic">Service Topic</Label>
            <Input
              type="text"
              id="serviceTopic"
              fluid
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="serviceCharge">Service Charge</Label>
            <Input
              type="number"
              id="serviceCharge"
              fluid
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="serviceDesc">Speciality</Label>
            <TextArea
              id="serviceDesc"
              fluid
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputGroup>
        </ModalBody>
        {type === "add" ? (
          <Button type="submit" disabled={isSubmitting}>
            Add Service
          </Button>
        ) : (
          <Button type="submit">Update Service</Button>
        )}
      </ModalForm>
    </Modal>
  );
};

export default AddEvent;
