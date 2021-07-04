import Modal from 'components/GlobalComponents/Modal';
import Input from 'components/GlobalComponents/Input';
import Label from 'components/GlobalComponents/Label';
import TextArea from 'components/GlobalComponents/Textarea';
import Button from 'components/GlobalComponents/Button';
import styled from 'styled-components'
import { axiosRequest } from 'utils/axiosRequest';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const ModalTitle = styled.div`
    font-size: 57px;
    font-font-weight: medium;
`

const ModalForm = styled.form``

const ModalBody = styled.div`
    margin-top: 30px;
`
const InputGroup = styled.div`
    margin-bottom: 30px;
`


const BASE_URL = `http://localhost:5000/api`

const EditProfile = ({ open, setOpen }) => {
    const [hospitalDescription, setHospitalDescription] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const hospitalLogin = useSelector((state) => {
        return state.hospitalLogin;
    });

    let responseObject = { ...hospitalLogin.hospitalInfo }
    let id = responseObject._id

    const handleSubmit = async (e) => {
        setIsSubmitting(true)
        e.preventDefault()
        let reqBody = {
            url: `${BASE_URL}/hospitals/${id}/updateHospital`,
            method: "put",
            body: hospitalDescription
        }
        
        let [data, error] = await axiosRequest(reqBody)
        setIsSubmitting(false)
        if(data) {
            console.log(data);
            alert("Successfully submitted Form");
            setHospitalDescription("")
        }
        if (error) {
            alert("Falied to submit form");
        }
    }

    return (

        <Modal setOpen={setOpen} open={open} >
            <ModalTitle>
                Edit Profile
            </ModalTitle>
            <ModalForm onSubmit = {handleSubmit}>
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
                        <TextArea id="hospitalDescription" value={hospitalDescription} fluid onChange={(e) => setHospitalDescription(e.target.value)} />
                    </InputGroup>
                    {/* <InputGroup>
                                    <Label htmlFor="htmlFor" serviceProvided">Service Provided</Label>
                                        <Input id="serviceProvided" fluid onFocus={() => { console.log("Focus") }} />
                                    </InputGroup> */
                    }
                </ModalBody>
                <Button type="submit" disabled={ isSubmitting}>Update</Button>
            </ModalForm>

        </Modal>

    )
}

export default EditProfile
