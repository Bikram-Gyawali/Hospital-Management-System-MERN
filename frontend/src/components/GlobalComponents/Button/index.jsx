import { colors } from 'colors'
import styled from 'styled-components'


const Button = styled.button`
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 12px 20px;
    color: ${colors.white};
    cursor: pointer;
    background: ${colors.primary};
`

const index = ({children, className}) => {
    return (
        <Button className = {className}>
            {children}
        </Button>
    )
}

export default index
