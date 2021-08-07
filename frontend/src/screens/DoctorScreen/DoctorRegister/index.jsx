import { doctorLoginAction, doctorRegisterAction } from 'actions/doctorActions'
import { colors } from 'colors'
import Button from 'components/GlobalComponents/Button'
import Input from 'components/GlobalComponents/Input'
import Label from 'components/GlobalComponents/Label'
import LoginLayout from 'components/GlobalComponents/LoginLayout'
import { fonts } from 'fonts'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    padding-left: 100px;
    margin: 120px 0;
    max-width: 600px;
`

const Title = styled.h2`
    font-size: 57px;
    font-weight: ${fonts.medium};
    color: ${colors.darkBrown};
    margin-bottom: 40px;
`
const InputGroup = styled.div`
    margin-bottom: 30px;
`

const Error = styled.div`
    margin-top: 5px;
    color: ${colors.error};
`

const SubmitButton = styled(Button)`
    margin-top: 10px;
    width: 200px;
    font-weight: bold;
    font-size: 24px;
`

const Form = styled.form``


const TwoColumnGroups = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  & > * {
    flex: 1;
  }
`;

const Index = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
    const dispatch = useDispatch();
    const history = useHistory();
    const onSubmit = async (data) => {
        const { doctorname, doctoremail, doctorspeciality, doctorprimarycontact, currentorganization, graduatedFrom, doctorpassword } = data;
        console.log(doctorname, doctoremail, doctorspeciality, doctorprimarycontact, currentorganization, graduatedFrom, doctorpassword);
        try {
            await dispatch(doctorRegisterAction(doctorname, doctoremail, doctorspeciality, doctorprimarycontact, currentorganization, graduatedFrom, doctorpassword));
            reset({ doctorname: "", doctoremail: "", doctorspeciality: "", doctorprimarycontact: "", currentorganization: "", graduatedFrom: "", doctorpassword: "" });
            history.push("/doctor_login");
        }
        catch (error) {
            alert("Error registering doctor");
        }
    }

    return (
        <LoginLayout>
            <FormContainer>
                <Title>
                    Doctor Register
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label htmlFor="doctorname">Name</Label>
                        <Input fluid type="text" error={errors.doctorname ? true : false}
                            id="doctorname"
                            aria-invalid={errors.doctorname ? "true" : "false"}
                            {...register("doctorname", { required: { value: true, message: "Name Required" }, minLength: { value: 8, message: "Minimum Length of name should be 8 characters" } })} />
                        {errors.doctorname && <Error role="alert">{errors.doctorname.message}</Error>}
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="doctoremail">Email</Label>
                        <Input fluid type="email" id="doctoremail"
                            error={errors.doctoremail ? true : false}
                            aria-invalid={errors.doctoremail ? "true" : "false"}
                            {...register("doctoremail", { required: { value: true, message: "Email required" } })} />
                        {(errors.doctoremail) && <Error role="alert">{errors.doctoremail.message}</Error>}
                    </InputGroup>
                    <TwoColumnGroups>
                        <InputGroup>
                            <Label htmlFor="doctorspeciality">Speciality</Label>
                            <Input fluid type="string" id="doctorspeciality"
                                error={errors.doctorspeciality ? true : false}
                                aria-invalid={errors.doctorspeciality ? "true" : "false"}
                                {...register("doctorspeciality", { required: { value: true, message: "Primary Contact required" }, minLength: { value: 8, message: "Minimum Length of Contact should be 8 characters" }, maxLength: { value: 14, message: "Minimum Length of Contact should be 8 characters" } })} />
                            {(errors.doctorspeciality) && <Error role="alert">{errors.doctorspeciality.message}</Error>}
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="doctorprimarycontact">Primary Contact</Label>
                            <Input fluid type="number" id="doctorprimarycontact"
                                error={errors.doctorprimarycontact ? true : false}
                                aria-invalid={errors.doctorprimarycontact ? "true" : "false"}
                                {...register("doctorprimarycontact", { minLength: { value: 8, message: "Minimum Length of Contact should be 8 characters" }, maxLength: { value: 14, message: "Minimum Length of Contact should be 8 characters" } })} />
                            {(errors.doctorprimarycontact) && <Error role="alert">{errors.doctorprimarycontact.message}</Error>}
                        </InputGroup>
                    </TwoColumnGroups>

                    <InputGroup>
                        <Label htmlFor="currentorganization">Current Organization</Label>
                        <Input fluid type="string" id="currentorganization"
                            error={errors.currentorganization ? true : false}
                            aria-invalid={errors.currentorganization ? "true" : "false"}
                            {...register("currentorganization", { required: { value: true, message: "Current Organization Required" } })} />
                        {(errors.currentorganization) && <Error role="alert">{errors.currentorganization.message}</Error>}
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="graduatedFrom">Graduated From</Label>
                        <Input fluid type="string" id="graduatedFrom"
                            error={errors.graduatedFrom ? true : false}
                            aria-invalid={errors.graduatedFrom ? "true" : "false"}
                            {...register("graduatedFrom", { required: { value: true, message: "Current Organization Required" } })} />
                        {(errors.graduatedFrom) && <Error role="alert">{errors.graduatedFrom.message}</Error>}
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="doctorpassword">Password</Label>
                        <Input fluid type="password" id="doctorpassword"
                            error={errors.doctorpassword ? true : false}
                            aria-invalid={errors.doctorpassword ? "true" : "false"}
                            {...register("doctorpassword", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Minimum Length of password should be 8 characters" } })} />
                        {(errors.doctorpassword) && <Error role="alert">{errors.doctorpassword.message}</Error>}
                    </InputGroup>
                    <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton>
                </Form>

            </FormContainer>
        </LoginLayout>
    )
}

export default Index