import { useEffect  } from 'react'
import { hospitalLoginAction } from 'actions/hospitalActions'
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
    const hospitalLogin = useSelector(state => state.hospitalLogin);
    const onSubmit = async (data) => {
        const { hospitalemail, hospitalpassword } = data;
        try {
            await dispatch(hospitalLoginAction(hospitalemail, hospitalpassword));

        }
        catch (error) {
            setError("hospitalemail", {
                type: "server",
                message: "Invalid email or password"
            })

            setError("hospitalpassword", {
                type: "server",
                message: "Invalid email or password"
            })
        }
        
    }

    useEffect(() => {
        if (hospitalLogin.hospitalInfo?._id) {
            let id = hospitalLogin.hospitalInfo._id;
            history.push(`/${id}/hospitalDashboard`);
        }

    }, [hospitalLogin, history])

    return (
        <LoginLayout>
            <FormContainer>
                <Title>
                    Hospital Login
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Label htmlFor="hospitalemail">Email</Label>
                        <Input fluid type="email" error={errors.hospitalemail ? true : false}
                            id="hospitalemail"
                            aria-invalid={errors.hospitalemail ? "true" : "false"}
                            {...register("hospitalemail", { required: { value: true, message: "Email Required" } })} />
                        {errors.hospitalemail && <Error role="alert">{ errors.hospitalemail.message }</Error>}
                    </InputGroup>

                    <InputGroup>
                        <Label htmlFor="hospitalpassword">Password</Label>
                        <Input fluid type="password" id="hospitalpassword"
                            error={errors.hospitalpassword ? true : false}
                            aria-invalid={errors.hospitalpassword ? "true" : "false"}
                            {...register("hospitalpassword", { required: { value: true, message: "Password required" }, minLength: { value: 5, message: "Password should be atleast 8 charactes long" } })} />
                        {(errors.hospitalpassword) && <Error role="alert">{errors.hospitalpassword.message}</Error>}
                    </InputGroup>
                    <ForgetPassword>Forget you  password?</ForgetPassword>
                    <SubmitButton type="submit" disabled = {isSubmitting}>Submit</SubmitButton>
                </Form>

            </FormContainer>
        </LoginLayout>
    )
}

export default LoginScreen