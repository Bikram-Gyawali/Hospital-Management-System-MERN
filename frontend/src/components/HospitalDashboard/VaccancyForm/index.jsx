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

const VaccancyForm = ({ open, setOpen }) => {
  const [position, setPosition] = useState("");
  const [amount, setAmount] = useState(1);
  const [desc, setDesc] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });
  let responseObject = { ...hospitalLogin.hospitalInfo };
  let id = responseObject._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let reqBody = {
      method: "post",
      url: `http://localhost:5000/api/hospitals/${id}/events/addEvents`,
      body: { position, amount, desc },
    };
    let [data, error] = await axiosRequest(reqBody);
    setIsSubmitting(false);
    if (data) {
      alert("Successfully added vaccancy");
      // console.log(data)
      setPosition("");
      setAmount(1);
      setDesc("");
    }
    if (error) {
      // console.log(error.response)
      alert("Error adding vaccancy");
    }
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>Vaccancy Form</ModalTitle>

      <ModalForm onSubmit={handleSubmit}>
        <ModalBody>
          <InputGroup>
            <Label htmlFor="position">Position</Label>
            <Input
              type="text"
              id="position"
              fluid
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="amount">Availiable Seats</Label>
            <Input
              type="number"
              id="amount"
              fluid
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="desc">Description</Label>
            <TextArea
              id="desc"
              fluid
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </InputGroup>
        </ModalBody>

        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </ModalForm>
    </Modal>
  );
};

export default VaccancyForm;
