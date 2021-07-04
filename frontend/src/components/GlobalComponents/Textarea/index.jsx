import { colors } from "colors"
import styled from "styled-components"

const Textarea = styled.textarea`
    background: ${colors.secondary}1A;
    border-radius: 10px;
    outline: none;
    width: ${props => props.fluid ? "100%" : 'initial'};
    padding: 20px;
    height: 100px;
    overflow: hidden;
      &:focus {
        box-shadow: 0 0 0 2pt ${colors.secondary};
    }
`

export default Textarea;