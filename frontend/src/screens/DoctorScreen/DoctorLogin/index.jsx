import { useEffect } from 'react'
// import { doctorLoginAction } from 'actions/doctorActions'
import { colors } from 'colors'
import Button from 'components/GlobalComponents/Button'
import Input from 'components/GlobalComponents/Input'
import Label from 'components/GlobalComponents/Label'
import LoginLayout from 'components/GlobalComponents/LoginLayout'
import { fonts } from 'fonts'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
    padding-left: 100px;
    margin-top: 120px;
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

const LoginScreen = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm()
    const dispatch = useDispatch()
    const history = useHistory()
    const doctorLogin = useSelector(state => state.doctorLogin);
    const onSubmit = async (data) => {
        const { doctoremail, doctorpassword } = data;
        try {
            // await dispatch(doctorLoginAction(doctoremail, doctorpassword));
            console.log({ doctoremail, doctorpassword})
        }   
        catch (error) {
            setError("doctoremail", {
                type: "server",
                message: "Invalid email or password"
            })

            setError("doctorpassword", {
                type: "server",
                message: "Invalid email or password"
            })
        }

    }

    useEffect(() => {
        // if (doctorLogin.doctorInfo?._id) {
        //     let id = doctorLogin.doctorInfo._id;
        //     history.push(`/${id}/doctorDashboard`);
        // }

    }, [doctorLogin, history])

    return (
        <LoginLayout>
            <FormContainer>
                <Title>
                    Doctor Login
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label htmlFor="doctoremail">Email</Label>
                        <Input fluid type="email" error={errors.doctoremail ? true : false}
                            id="doctoremail"
                            aria-invalid={errors.doctoremail ? "true" : "false"}
                            {...register("doctoremail", { required: { value: true, message: "Email Required" } })} />
                        {errors.doctoremail && <Error role="alert">{errors.doctoremail.message}</Error>}
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="doctorpassword">Password</Label>
                        <Input fluid type="password" id="doctorpassword"
                            error={errors.doctorpassword ? true : false}
                            aria-invalid={errors.doctorpassword ? "true" : "false"}
                            {...register("doctorpassword", { required: { value: true, message: "Password required" }, minLength: { value: 5, message: "Password should be atleast 8 charactes long" } })} />
                        {(errors.doctorpassword) && <Error role="alert">{errors.doctorpassword.message}</Error>}
                    </InputGroup>
                    <ForgetPassword>Forget you  password?</ForgetPassword>
                    <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton>
                </Form>

            </FormContainer>
        </LoginLayout>
    )
}

export default LoginScreen