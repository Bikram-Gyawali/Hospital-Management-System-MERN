import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { userRegisterAction } from 'actions/userActions'
import { colors } from 'colors'
import Button from 'components/GlobalComponents/Button'
import Input from 'components/GlobalComponents/Input'
import Label from 'components/GlobalComponents/Label'
import LoginLayout from 'components/GlobalComponents/LoginLayout'
import { fonts } from 'fonts'
import { useHistory } from 'react-router-dom'

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

const LoginScreen = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory()
    const onSubmit = async (data) => {
        const {username, useremail, userDateOfBirth, userpassword, userprimarycontact } = data;
        try {
            await dispatch(userRegisterAction(username, useremail, userDateOfBirth, userprimarycontact, userpassword));
            history.push("/user_login");
        }
        catch (error) {
            alert("Error");
        }

    }

    return (
        <LoginLayout>
            <FormContainer>
                <Title>
                    Client Register
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label htmlFor="username">Name</Label>
                        <Input fluid type="text" error={errors.username ? true : false}
                            id="username"
                            aria-invalid={errors.username ? "true" : "false"}
                            {...register("username", { required: { value: true, message: "Name Required" }, minLength: { value: 8, message: "Minimum Length of name should be 8 characters" } })} />
                        {errors.username && <Error role="alert">{errors.username.message}</Error>}
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="useremail">Email</Label>
                        <Input fluid type="email" id="useremail"
                            error={errors.useremail ? true : false}
                            aria-invalid={errors.useremail ? "true" : "false"}
                            {...register("useremail", { required: { value: true, message: "Email required" } })} />
                        {(errors.useremail) && <Error role="alert">{errors.useremail.message}</Error>}
                    </InputGroup>
                    <TwoColumnGroups>
                        <InputGroup>
                            <Label htmlFor="userprimarycontact">Primary Contact</Label>
                            <Input fluid type="number" id="userprimarycontact"
                                error={errors.userprimarycontact ? true : false}
                                aria-invalid={errors.userprimarycontact ? "true" : "false"}
                                {...register("userprimarycontact", { required: { value: true, message: "Primary Contact required" }, minLength: { value: 8, message: "Minimum Length of Contact should be 8 characters" }, maxLength: { value: 14, message: "Minimum Length of Contact should be 8 characters" } })} />
                            {(errors.userprimarycontact) && <Error role="alert">{errors.userprimarycontact.message}</Error>}
                        </InputGroup>
                        <InputGroup>
                            <Label htmlFor="userprimarycontact">Date Of Birth</Label>
                            <Input fluid type="date" id="userDateOfBirth"
                                error={errors.userDateOfBirth ? true : false}
                                aria-invalid={errors.userDateOfBirth ? "true" : "false"}
                                {...register("userDateOfBirth", { required: {value: true, message: "Date Of Birth is required"} })} />
                            {(errors.userDateOfBirth) && <Error role="alert">{errors.userDateOfBirth.message}</Error>}
                        </InputGroup>
                    </TwoColumnGroups>
                    <InputGroup>
                        <Label htmlFor="userpassword">Password</Label>
                        <Input fluid type="password" id="userpassword"
                            error={errors.userpassword ? true : false}
                            aria-invalid={errors.userpassword ? "true" : "false"}
                            {...register("userpassword", { required: { value: true, message: "Password required" }, minLength: { value: 8, message: "Minimum Length of password should be 8 characters" } })} />
                        {(errors.userpassword) && <Error role="alert">{errors.userpassword.message}</Error>}
                    </InputGroup>
                    <ForgetPassword>Forget you  password?</ForgetPassword>
                    <SubmitButton type="submit" disabled = {isSubmitting}>Submit</SubmitButton>
                </Form>

            </FormContainer>
        </LoginLayout>
    )
}

export default LoginScreen