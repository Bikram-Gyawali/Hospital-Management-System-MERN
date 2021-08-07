import { colors } from 'colors'
import React from 'react'
import styled from 'styled-components'
import LoginOptionImage from 'assets/images/login-options-left.svg'
import { fonts } from 'fonts'
import Button from 'components/GlobalComponents/Button'
import { Link } from 'react-router-dom'
const OptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    min-height: 100vh;
`
const Left = styled.div`
    background: ${colors.secondary}1A;
    display: grid;
    place-content: center;

`
const Right = styled.div`
    padding-left: 60px;
    display: grid;
    place-content: center;
    text-align: center;
    padding-top: 60px;
`

const SuperTitle = styled.h2`
    text-transform: uppercase;
    font-weight: ${fonts.bold};
    font-size: 33px;
    margin-bottom: 60px;
`

const LoginOrRegisterContainer = styled.div`
    margin-bottom: 50px;
    display: grid;
    align-content: center;
`
const Title = styled.div`
    text-transform: uppercase;
    font-size: 28px;
    font-weight: ${fonts.medium};
    margin-bottom: 30px;
`
const NoRadiusButton = styled(Button)`
    border-radius: 0px;
    text-transform: uppercase;
    display: block;
    width: 400px;
    margin: auto;
    margin-bottom: 20px;

    
`

const Index = () => {
    return (
        <OptionsContainer>
            <Left>
                <img src={LoginOptionImage} alt={"Left"} />
            </Left>
            <Right>
                <SuperTitle>Choose suitable Account option</SuperTitle>
                <LoginOrRegisterContainer>
                    <Title>Client Account</Title>
                    <Link to="/user_register">
                        <NoRadiusButton outlined>Register as client </NoRadiusButton>
                    </Link>
                    <Link to="/user_login">
                        <NoRadiusButton outlined>Login as client </NoRadiusButton>
                    </Link>
                </LoginOrRegisterContainer>
                <LoginOrRegisterContainer>
                    <Title>Hospital Account</Title>
                    <Link to="/hospital_register">
                        <NoRadiusButton outlined>Register as Hospital </NoRadiusButton>
                    </Link>
                    <Link to="/hospital_login">
                        <NoRadiusButton outlined>Hospital Login </NoRadiusButton>
                    </Link>
                    <Link to="/doctor_register">
                        <NoRadiusButton outlined>Register As Doctor</NoRadiusButton>
                    </Link>
                    <Link to="/doctor_login">
                        <NoRadiusButton outlined>Login As Doctor</NoRadiusButton>
                    </Link>

                </LoginOrRegisterContainer>
            </Right>
        </OptionsContainer>
    )
}

export default Index
