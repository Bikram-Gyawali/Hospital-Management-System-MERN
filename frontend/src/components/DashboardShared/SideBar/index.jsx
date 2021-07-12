import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { colors } from "colors";
import LogoutIcon from 'assets/images/logout.svg'
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { hospitalLogOutAction } from "actions/hospitalActions";
import { userLogOutAction } from "actions/userActions";


const StyledNavLink = styled(NavLink)`
  display: flex;
  gap: 12px;
  padding: 18px 30px 18px 0px;
  align-items: center;
  &.active {
    border-left: 7px solid ${colors.secondary};
    background: linear-gradient(90deg, rgba(77, 173, 189, 0.16) 0%, rgba(173, 217, 225, 0.08) 52.08%, rgba(173, 217, 225, 0.0733333) 54.17%, rgba(255, 255, 255, 0) 100%);
  }
  &.active>div {
    margin-left: 13px;
  }
`

const ImageContainer = styled.div`
  margin-left: 20px;
`
const SPAN = styled.span`
  color: ${colors.primary};
`

const SidebarContainer = styled.div`
  max-height: 100vh;
  position: sticky;
  top: 0;
`

function Sidebar({ sidebarData }) {
  const params = useParams();
  const dispatch = useDispatch();
  const hospitalLogin = useSelector(state => state.hospitalLogin);
  const userLogin = useSelector(state => state.userLogin);

  const handleLogOut = async () => {
    if (params.id === hospitalLogin.hospitalInfo?._id) {
      dispatch(hospitalLogOutAction())
      return;
    }

    if (params.id === userLogin.userInfo?._id) {
      dispatch(userLogOutAction())
      return;
    }

  }

  console.log({ sidebarData, params })
  return (
    <SidebarContainer>
      {
        sidebarData ? sidebarData.map(data => (
          <StyledNavLink to={data.route} key={data.id} exact>
            <ImageContainer>
              <img src={data.icon} alt={data.title} />
            </ImageContainer>
            <SPAN>{data.title}</SPAN>
          </StyledNavLink>
        ))
          : null
      }
      <StyledNavLink  to="/login_options" onClick = {handleLogOut}>
        <ImageContainer>
          <img src={LogoutIcon} alt={"Logout"} />
        </ImageContainer>
        <SPAN>Logout</SPAN>
      </StyledNavLink>

    </SidebarContainer >
  );
}

export default Sidebar;
