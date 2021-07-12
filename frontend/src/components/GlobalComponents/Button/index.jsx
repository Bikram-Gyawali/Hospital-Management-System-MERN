import { colors } from 'colors'
import styled from 'styled-components'


const Button = styled.button`
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 12px 20px;
    color: ${props => props.outlined === true ? colors.primary : colors.white};
    border: 2px solid${props => props.outlined === true ? colors.primary : "transparent"};
    cursor: pointer;
    background: ${props => props.outlined === true ? "transparent" : colors.primary};
    &:disabled {
        background: #858585;
    }
`

export default Button;

