import styled from "styled-components"
import GridLeftImage from 'assets/images/login-grid-left.svg'
import { colors } from "colors"
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    min-height: 100vh;
`

const Left = styled.div`
    display: grid;
    place-content: center;
`

const Right = styled.div``

const Line = styled.div`
    height: 1px;
    background: ${colors.secondary};
    height: 80%;
    align-self: center;
`

const Index = ({ children }) => {
    return (
        <Container>
            <Left>
                <img src={GridLeftImage} alt={"Login Grid Left "} />
            </Left>
            <Line />
            <Right>
                {children}
            </Right>
        </Container>
    )
}

export default Index
