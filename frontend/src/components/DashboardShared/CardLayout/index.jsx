import { colors } from "colors"
import styled from "styled-components"

const CardContainer = styled.div`
    padding: 20px 0 40px;
    background: ${colors.white};
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`



const Card = ({ children, className}) => {
    return (
        <CardContainer className={className}>
            {children}
        </CardContainer>
    )
}

export default Card
