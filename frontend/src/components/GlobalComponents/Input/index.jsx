import { colors } from "colors"
import styled from "styled-components"

const Input = styled.input`
    background: ${props => props.error ? colors.error : colors.secondary}1A;
    border-radius: 10px;
    outline: none;
    width: ${props => props.fluid ? "100%" : 'initial'};
    padding: 20px;
    height: 60px;
    &:focus {
        box-shadow: 0 0 0 2pt ${props => props.error ? colors.error :colors.secondary};
    }
    &:disabled {
      background: #f7f3f3;
    }
`
export default Input;

