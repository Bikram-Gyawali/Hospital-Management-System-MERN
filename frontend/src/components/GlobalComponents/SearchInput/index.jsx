import { colors } from "colors"
import styled from "styled-components"
import SearchIcon from 'assets/images/search-icon.svg'
import Button from "components/GlobalComponents/Button"

const InputContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${colors.white};
  display: flex;
  align-items: center;
  flex: 1;
  gap: 25px;

`

const SearchIconContainer = styled.div`
  padding: 10px;
`

const Line = styled.div`
  width: 1px;
  background: ${colors.darkBrown};
  height: 30px;
`
const Left = styled.div`
  display: flex;
  align-items: center;
`
const Right = styled.div`
  flex: 1;
`

const Input = styled.input`
  outline: none;
  border: none;
  flex: 1;
  width: 100%;
`
const CloseButtonContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 15px 0 0;
    gap: 10px;
`


const Index = () => {
  return (
    <InputContainer>
      <Left>
        <SearchIconContainer>
          <img src={SearchIcon} alt={"Search Icon"} />
        </SearchIconContainer>
        <Line />
      </Left>
      <Right>
        <Input type="text" placeholder="Search hospitals" />
      </Right>
      <CloseButtonContainer>
        <Line />
        <button>CLOSE</button>
      </CloseButtonContainer>
    </InputContainer>
  )
}

export default Index
