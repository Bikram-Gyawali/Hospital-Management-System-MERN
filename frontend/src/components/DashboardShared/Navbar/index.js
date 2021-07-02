import React from "react";
import Logo from 'assets/images/Logo.svg';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { colors } from "colors";
import SearchIcon from 'assets/images/search-icon.svg'
import Message from 'assets/images/message.svg'
import Notifications from 'assets/images/notifications.svg'
import ProfilePicture from 'assets/images/sampleProfilePic.jpg'
import AngleDown from 'assets/images/angle-down.svg'
import { fonts } from "fonts";
const Nav = styled.nav`
  padding: 20px 0;
`
const NavInner = styled.div`
  margin: auto;
  padding: 0 20px;
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FlexLeft = styled.div`
  width: 300px;
`

const FlexRight = styled.div`
  flex: 1;
  display: flex;
  gap: 50px;
  align-items: center;
`

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
  width: 90%;
`

const NotificationsAndUser = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`

const ImageIcon = styled.div`
    cursor: pointer;
`

const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const ProfilePictureContainer = styled.div``

const ProfileName = styled.div`
  font-weight: ${fonts.medium};
  font-size: 24px;
  color: ${colors.secondary};
`

const UserDetails = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
const AngleDownImage = styled.img`
  cursor: pointer;
`


function Navbar() {
  return (
    <Nav>
      <NavInner>
        <FlexContainer>
          <FlexLeft>
            <Link to={"/hospitalDashboard"}>
              <img src={Logo} alt={"Logo "} />
            </Link>
          </FlexLeft>
          <FlexRight>
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
            </InputContainer>
            <NotificationsAndUser>
              <ImagesContainer>
                <ImageIcon>
                  <img src={Message} alt={"Message "} />
                </ImageIcon>
                <ImageIcon>
                  <img src={Notifications} alt={"Notifications"} />
                </ImageIcon>
            </ImagesContainer>
              <ProfilePictureContainer>
                <img src={ProfilePicture} alt={ "User Profile"}/>
              </ProfilePictureContainer>
              <UserDetails>
                <ProfileName>
                  Ayush Mainali
                </ProfileName>
                <AngleDownImage src={AngleDown} alt={"Angle Down "} />
              </UserDetails>

            </NotificationsAndUser>
          </FlexRight>
        </FlexContainer>


      </NavInner>
    </Nav>
  );
}

export default Navbar;
