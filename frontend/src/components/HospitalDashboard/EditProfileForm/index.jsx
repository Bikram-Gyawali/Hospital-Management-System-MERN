import Modal from "components/GlobalComponents/Modal";
import Input from "components/GlobalComponents/Input";
import Label from "components/GlobalComponents/Label";
import TextArea from "components/GlobalComponents/Textarea";
import Button from "components/GlobalComponents/Button";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateHospitalDescription } from "actions/hospitalActions";
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

const EditProfile = ({ open, setOpen }) => {
  const [hospitalDescription, setHospitalDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  // console.log(dispatch)
  const hospitalLogin = useSelector((state) => {
    return state.hospitalLogin;
  });

  let responseObject = { ...hospitalLogin.hospitalInfo };
  let id = responseObject._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await dispatch(updateHospitalDescription(id, hospitalDescription));
    setIsSubmitting(false);
  };

  return (
    <Modal setOpen={setOpen} open={open}>
      <ModalTitle>Edit Profile</ModalTitle>
      <ModalForm onSubmit={handleSubmit}>
        <ModalBody>
          <InputGroup>
            <Label htmlFor="hospitalName">Name</Label>
            <Input type="text" id="hospitalName" fluid disabled />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="hospitalEmail">Email</Label>
            <Input type="email" id="hospitalEmail" fluid disabled />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="hospitalDescription">Description</Label>
            <TextArea
              id="hospitalDescription"
              value={hospitalDescription}
              fluid
              onChange={(e) => setHospitalDescription(e.target.value)}
            />
          </InputGroup>
          {/* <InputGroup>
                                    <Label htmlFor="htmlFor" serviceProvided">Service Provided</Label>
                                        <Input id="serviceProvided" fluid onFocus={() => { console.log("Focus") }} />
                                    </InputGroup> */}
        </ModalBody>
        <Button type="submit" disabled={isSubmitting}>
          Update
        </Button>
      </ModalForm>
    </Modal>
  );
};

export default EditProfile;
