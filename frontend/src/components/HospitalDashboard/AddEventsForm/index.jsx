import React, { useState, useEffect } from "react";
import Modal from "components/GlobalComponents/Modal";
import Input from "components/GlobalComponents/Input";
import Label from "components/GlobalComponents/Label";
import TextArea from "components/GlobalComponents/Textarea";
import Button from "components/GlobalComponents/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addHospitalEvents } from "actions/hospitalActions";
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
const TwoColumnGroups = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  & > * {
    flex: 1;
  }
`;

const BASE_URL = `http://localhost:5000/api`;

const AddEvent = ({ open, setOpen, type }) => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };
  const handleEventDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });

  let responseObject = { ...hospitalLogin.hospitalInfo };
  let id = responseObject._id;
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      console.log({ eventName, date, desc });
      setSubmitting(true);
      await dispatch(addHospitalEvents(id, eventName, date, desc));
      setSubmitting(false);
    };
  }, [dispatch, date, desc, eventName, id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let reqBody = {
      url: `${BASE_URL}/hospitals/${id}/events/addEvents`,
      method: "post",
      body: { eventName, date, desc },
    };

    console.log({ eventName, date, desc });
    setSubmitting(true);
    await axios.post(reqBody.url, reqBody.body);
    // await dispatch(addHospitalEvents(id, eventName, date, desc));
    setSubmitting(false);
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>{type === "add" ? "Add Event" : "Update Event"}</ModalTitle>

      <ModalForm onSubmit={handleFormSubmit}>
        <ModalBody>
          <InputGroup>
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              type="text"
              id="eventName"
              fluid
              value={eventName}
              onChange={handleEventNameChange}
            />
          </InputGroup>

          <TwoColumnGroups>
            <InputGroup>
              <Label htmlFor="eventDate">Event Date</Label>
              <br />
              <Input
                type="date"
                id="eventDate"
                value={date}
                onChange={handleEventDateChange}
              />
            </InputGroup>
            {/* <InputGroup>
                                        <Label htmlFor="endDate">End Date</Label>
                                        <Input type="date" id="endDate" fluid onFocus={() => { console.log("Focus") }} />
                                    </InputGroup> */}
          </TwoColumnGroups>
          <InputGroup>
            <Label htmlFor="eventDescription">Description</Label>
            <TextArea
              id="eventDescription"
              fluid
              value={desc}
              onChange={handleDescChange}
            />
          </InputGroup>
        </ModalBody>
        {type === "add" ? (
          <Button type="submit" disabled={submitting}>
            Add Event
          </Button>
        ) : (
          <Button type="submit" disabled={submitting}>
            Update Event
          </Button>
        )}
      </ModalForm>
    </Modal>
  );
};

export default AddEvent;
