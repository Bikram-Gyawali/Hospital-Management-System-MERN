import React from "react";
import Modal from "components/GlobalComponents/Modal";
import Input from "components/GlobalComponents/Input";
import Label from "components/GlobalComponents/Label";
import Button from "components/GlobalComponents/Button";
import styled from "styled-components";
import { useState } from "react";
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

const TwoColumnGroups = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  & > * {
    flex: 1;
  }
`;

const AddBed = ({ open, setOpen }) => {
  const [icu, setIcu] = useState(1);
  const [ventilators, setVentilators] = useState(1);
  const [others, setOthers] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });

  let responseObject = { ...hospitalLogin.hospitalInfo };
  let id = responseObject._id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const reqBody = {
      method: "post",
      url: `http://localhost:5000/api/hospitals/${id}/bedTypes`,
      body: { icu, ventilators, others },
    };
    const [data, error] = await axiosRequest(reqBody);
    setSubmitting(false);
    if (data) {
      alert("Successfully added bed");
      // console.log(data)
      setIcu(0);
      setVentilators(0);
      setOthers(0);
    }
    if (error) {
      alert("Error adding bed");
      // console.log(error.response);
    }
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>Update Beds</ModalTitle>
      <ModalForm onSubmit={handleSubmit}>
        <ModalBody>
          <TwoColumnGroups>
            <InputGroup>
              <Label htmlFor="icuRemaining">ICU</Label>
              <Input
                type="number"
                id="icuRemaining"
                fluid
                value={icu}
                onChange={(e) => setIcu(e.target.value)}
              />
            </InputGroup>
            {/* <InputGroup>
                            <Label htmlFor="icuInUse" >ICU in use</Label>
                            <Input type="text" id="icuInUse" fluid />
                        </InputGroup> */}
          </TwoColumnGroups>

          <TwoColumnGroups>
            <InputGroup>
              <Label htmlFor="ventilatorsRemaining">Ventilators</Label>
              <Input
                type="number"
                id="ventilatorsRemaining"
                fluid
                value={ventilators}
                onChange={(e) => setVentilators(e.target.value)}
              />
            </InputGroup>
            {/* <InputGroup>
                            <Label htmlFor="ventilatorsInUse" >Ventilators In Use</Label>
                            <Input type="text" id="ventilatorsInUse" fluid onFocus={() => { console.log("Focus") }} />
                        </InputGroup> */}
          </TwoColumnGroups>

          <TwoColumnGroups>
            <InputGroup>
              <Label htmlFor="othersRemaining">Others</Label>
              <Input
                type="number"
                id="othersRemaining"
                fluid
                value={others}
                onChange={(e) => setOthers(e.target.value)}
              />
            </InputGroup>
            {/* <InputGroup>
                            <Label htmlFor="othersInUse">Others In Use</Label>
                            <Input type="text" id="othersInUse" fluid onFocus={() => { console.log("Focus") }} />
                        </InputGroup> */}
          </TwoColumnGroups>
        </ModalBody>
        <Button type="submit" disabled={submitting}>
          Update Beds
        </Button>
      </ModalForm>
    </Modal>
  );
};

export default AddBed;
