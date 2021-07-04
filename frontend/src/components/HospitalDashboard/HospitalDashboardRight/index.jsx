// import React, { useState, useRef } from "react";
// import { Button } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import { PermMedia } from "@material-ui/icons";
// import axios from "axios";
// import { useParams } from "react-router";
import styled from 'styled-components'
import { colors } from "colors";
import DashboardGeneralInformation from 'components/HospitalDashboard/DashboardGeneralInformation'
import DashboardEvents from 'components/HospitalDashboard/DashboardEvents'
import DashboardDoctorsInformation from 'components/HospitalDashboard/DashboardDoctorsInformation'
import BedsInformation from 'components/HospitalDashboard/BedsInformations'
import VaccancyInformation from 'components/HospitalDashboard/VaccancyInformation'
import ServicesInformation from 'components/HospitalDashboard/ServicesInformation'

const Wrapper = styled.div`
    background: ${colors.secondary}1A;
    padding: 50px 30px;
`
const Container = styled.div`
  margin-bottom: 70px;
`


function HospitalDetails() {
  return (
    <Wrapper>
      <Container>
        <DashboardGeneralInformation />
      </Container>
      <Container>
        <DashboardEvents />
      </Container>
      <Container>
        <DashboardDoctorsInformation />
      </Container>
      <Container>
        <BedsInformation />
      </Container>
      <Container>
        <VaccancyInformation />
      </Container>
      <Container>
        <ServicesInformation />
      </Container>

    </Wrapper>
  );
}

export default HospitalDetails;
