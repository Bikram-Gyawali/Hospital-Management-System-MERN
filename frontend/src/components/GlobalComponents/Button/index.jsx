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
    &:disabled {
        background: #858585;
    }
`

export default Button;

