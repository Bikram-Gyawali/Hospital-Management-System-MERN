import { hospitalRegisterAction } from 'actions/hospitalActions'
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

const ForgetPassword = styled.div`
    font-waight: ${fonts.bold};
    color: ${colors.primary};
    font-size: 22px;
    cursor: pointer;
    margin-bottom: 20px;
`

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
        const { hospitalname, hospitalemail, hospitalprimarycontact, hospitalsecondarycontact, hospitalpassword } = data;
        try {
            await dispatch(hospitalRegisterAction(hospitalname, hospitalemail, hospitalpassword, hospitalprimarycontact, hospitalsecondarycontact));
            reset({ hospitalname: "", hospitalemail: "", hospitalprimarycontact: "", hospitalsecondarycontact: "", hospitalpassword: "" })
            history.push("/hospital_login");
        }
        catch (error) {
            alert("Error registering hospital");
        }
    }

    return (
        <LoginLayout>
            <FormContainer>
                <Title>
                    Hospital Register
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label htmlFor="hospitalname">Name</Label>
                        <Input fluid type="text" error={errors.hospitalname ? true : false}
                            id="hospitalname"
                            aria-invalid={errors.hospitalname ? "true" : "false"}
                            {...register("hospitalname", { required: { value: true, message: "Name Required" }, minLength: { value: 8, message: "Minimum Length of name should be 8 characters" } })} />
                        {errors.hospitalname && <Error role="alert">{errors.hospitalname.message}</Error>}
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="hospitalemail">Email</Label>
                        <Input fluid type="email" id="hospitalemail"
                            error={errors.hospitalemail ? true : false}
                            aria-invalid={errors.hospitalemail ? "true" : "false"}
                            {...register("hospitalemail", { required: { value: true, message: "Email required" } })} />
                        {(errors.hospitalemail) && <Error role="alert">{errors.hospitalemail.message}</Error>}
                    </InputGroup>
                    <TwoColumnGroups>
                        <InputGroup>
                            <Label htmlFor="hospitalprimarycontact">Primary Contact</Label>
                            <Input fluid type="number" id="hospitalprimarycontact"
                                error={errors.hospitalprimarycontact ? true : false}
                                aria-invalid={errors.hospitalprimarycontact ? "true" : "false"}
                                {...register("hospitalprimarycontact", { required: { value: true, message: "Primary Contact required" }, minLength: { value: 8, message: "Minimum Length of Contact should be 8 characters" }, maxLength: { value: 14, message: "Minimum Length of Contact should be 8 characters" } })} />
                            {(errors.hospitalprimarycontact) && <Error role="alert">{errors.hospitalprimarycontact.message}</Error>}
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="hospitalsecondarycontact">Secondary Contact</Label>
                            <Input fluid type="number" id="hospitalsecondarycontact"
                                error={errors.hospitalsecondarycontact ? true : false}
                                aria-invalid={errors.hospitalsecondarycontact ? "true" : "false"}
                                {...register("hospitalsecondarycontact", { minLength: { value: 8, message: "Minimum Length of Contact should be 8 characters" }, maxLength: { value: 14, message: "Minimum Length of Contact should be 8 characters" } })} />
                            {(errors.hospitalsecondarycontact) && <Error role="alert">{errors.hospitalsecondarycontact.message}</Error>}
                        </InputGroup>
                    </TwoColumnGroups>
                    <InputGroup>
                        <Label htmlFor="hospitalpassword">Password</Label>
                        <Input fluid type="password" id="hospitalpassword"
                            error={errors.hospitalpassword ? true : false}
                            aria-invalid={errors.hospitalpassword ? "true" : "false"}
                            {...register("hospitalpassword", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Minimum Length of password should be 8 characters" } })} />
                        {(errors.hospitalpassword) && <Error role="alert">{errors.hospitalpassword.message}</Error>}
                    </InputGroup>
                    <ForgetPassword>Forget you  password?</ForgetPassword>
                    <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton>
                </Form>

            </FormContainer>
        </LoginLayout>
    )
}

export default Index