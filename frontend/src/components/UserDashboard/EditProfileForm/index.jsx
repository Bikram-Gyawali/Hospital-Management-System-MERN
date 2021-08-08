import Modal from 'components/GlobalComponents/Modal';
import Input from 'components/GlobalComponents/Input';
import Label from 'components/GlobalComponents/Label';
import Button from 'components/GlobalComponents/Button';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { colors } from 'colors';

const ModalTitle = styled.div`
    font-size: 57px;
    font-weight: medium;
`

const ModalForm = styled.form``

const ModalBody = styled.div`
    margin-top: 30px;
`
const InputGroup = styled.div`
    margin-bottom: 30px;
`

const Error = styled.div`
    margin-top: 5px;
    color: ${colors.error};
`


const EditProfile = ({ open, setOpen }) => {




    const [userDescription, setuserDescription] = useState("")

    const dispatch = useDispatch()
    console.log(dispatch)
    const userLogin = useSelector((state) => {
        return state.userLogin;
    });

    let responseObject = { ...userLogin.userInfo }

    console.log(responseObject)
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            name: responseObject.name,
            dob: responseObject.dob,
            contactNumber: responseObject.contacts,
            email :responseObject.email
        }
    });


    const onSubmit = async (data) => {
        console.log(data);
        //await dispatch(updateuserDescription(id, userDescription))
    }

    return (

        <Modal setOpen={setOpen} open={open} >
            <ModalTitle>
                Edit User Profile
            </ModalTitle>
            <ModalForm onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <InputGroup>
                        <Label htmlFor="fullname">Name</Label>
                        <Input type="text" id="fullname"
                            error={errors.name ? true : false}
                            {...register("name", { required: "This field is required" })} fluid />
                        <Error>{errors?.name?.message}</Error>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="userEmail">Email</Label>
                        <Input
                            type="email" id="userEmail" {...register("email")} fluid disabled />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="userDOB">Date Of Birth</Label>
                        <Input
                            error={errors.dob ? true : false}
                            type="date" id="userDOB" fluid {...register("dob", { required: "This field is required" })} />
                        <Error>{errors?.dob?.message}</Error>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="userContact">Primary Number</Label>
                        <Input type="number"
                            id="userContact"
                            error={errors.contactNumber ? true : false}
                            fluid {...register("contactNumber", { minLength: { value: 8, message: "Phone number should be atleast 8 characters long" }, required: "This field is required" })} />
                        <Error>{ errors?.contactNumber?.message }</Error>
                    </InputGroup>
                    {/* <InputGroup>
                                    <Label htmlFor="htmlFor" serviceProvided">Service Provided</Label>
                                        <Input id="serviceProvided" fluid onFocus={() => { console.log("Focus") }} />
                                    </InputGroup> */
                    }
                </ModalBody>
                <Button type="submit" disabled={isSubmitting}>Update</Button>
            </ModalForm>

        </Modal>

    )
}

export default EditProfile
