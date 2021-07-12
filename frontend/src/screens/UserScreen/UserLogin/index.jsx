import { useEffect } from 'react'
import { colors } from 'colors'
import Button from 'components/GlobalComponents/Button'
import Input from 'components/GlobalComponents/Input'
import Label from 'components/GlobalComponents/Label'
import LoginLayout from 'components/GlobalComponents/LoginLayout'
import { fonts } from 'fonts'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from 'actions/userActions'
import { useHistory } from 'react-router-dom'

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
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector(state => state.userLogin);
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setError } = useForm()

    useEffect(() => {
        if (userLogin.userInfo?._id) {
            let id = userLogin.userInfo._id
            console.log(userLogin, id)
            history.push(`/${id}/userDashboard`)
        }
    }, [history, userLogin])

    const onSubmit = async (data) => {
        const { useremail, userpassword } = data;
        try {
            await dispatch(userLoginAction(useremail, userpassword))
            reset({ useremail: "", userpassword: "" });

        }
        catch (err) {
            console.log(err.response)
            setError("useremail", {
                type: "server",
                message: "Invalid email or password"
            })

            setError("userpassword", {
                type: "server",
                message: "Invalid email or password"
            })
            
        }
    }

    useEffect(() => {
        if (userLogin.userInfo?._id) {
            let id = userLogin.userInfo?._id
            history.push(`/${id}/userDashboard`);
        }
    }, [history, userLogin])

    return (
        <LoginLayout>
            <FormContainer>
                <Title>
                    Client Login
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label htmlFor="useremail">Email</Label>
                        <Input fluid type="email" error={errors.useremail ? true : false}
                            id="useremail"
                            aria-invalid={errors.useremail ? "true" : "false"}
                            {...register("useremail", { required: { value: true, message: "Email Required" } })} />
                        {errors.useremail && <Error role="alert">{errors.useremail.message}</Error>}
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="userpassword">Password</Label>
                        <Input fluid type="password" id="userpassword"
                            error={errors.userpassword ? true : false}
                            aria-invalid={errors.userpassword ? "true" : "false"}
                            {...register("userpassword", { required: { value: true, message: "Password required" }, minLength: { value: 5, message: "Password should be atleast 8 charactes long" } })} />
                        {(errors.userpassword) && <Error role="alert">{errors.userpassword.message}</Error>}
                    </InputGroup>
                    <ForgetPassword>Forget you  password?</ForgetPassword>
                    <SubmitButton type="submit" disabled={isSubmitting}>Submit</SubmitButton>
                </Form>

            </FormContainer>
        </LoginLayout>
    )
}

export default LoginScreen