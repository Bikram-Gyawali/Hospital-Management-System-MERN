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

const Wrapper = styled.div`
    background: ${colors.secondary}1A;
    padding: 50px 30px;
  `
const Container = styled.div`
  margin-bottom: 70px;
`


function HospitalDetails() {
  // const local = "http://localhost:5000/api";
  // const dispatch = useDispatch();
  // const hospitalId = useParams().id;

  // const hospitalLogin = useSelector((state) => {
  //   return state.hospitalLogin;
  // });
  // const { hospitalInfo } = hospitalLogin;
  // // const {...other,password}=hospitalInfol;
  // console.log(hospitalInfo);

  // const bio = useRef();
  // const serviceCharge = useRef();
  // const serviceName = useRef();
  // const serviceDesc = useRef();

  // const eventname = useRef();
  // const eventdesc = useRef();
  // const eventdate = useRef();
  // const docName = useRef();
  // const docSpec = useRef();
  // const docExp = useRef();
  // const docId = useRef();
  // const docGrad = useRef();
  // const docCon = useRef();
  // const docEmail = useRef();
  // const emgName = useRef();
  // const emgCon = useRef();
  // const beds = useRef();
  // const occupied = useRef();
  // const available = useRef();
  // const icu = useRef();
  // const ventilator = useRef();
  // const others = useRef();
  // const position = useRef();
  // const reqTotal = useRef();
  // const vacDesc = useRef();

  // const [data, setData] = useState();

  // const [file, setFile] = useState(null);
  // const handleBio = async (e) => {
  //   e.preventDefault();
  //   const newBio = {
  //     hospitalDescription: bio.current.value,
  //   };
  //   try {
  //     await axios.put(
  //       `${local}/hospitals/${hospitalInfo?._id}/updateHospital`,
  //       newBio
  //     );
  //     bio.current.value = "";
  //   } catch (error) {
  //     console.log("error updating  bio", error);
  //   }
  // };
  // const newService = async (e) => {
  //   e.preventDefault();
  //   const newService = {
  //     topic: serviceName.current.value,
  //     serviceCharge: serviceCharge.current.value,
  //     desc: serviceDesc.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/services/addservice`,
  //       newService
  //     );
  //   } catch (error) {
  //     console.log("error on adding service");
  //   }
  // };
  // const addEvents = async (e) => {
  //   e.preventDefault();
  //   const newEvents = {
  //     eventName: eventname.current.value,
  //     date: eventdate.current.value,
  //     desc: eventdesc.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/events/addEvents`,
  //       newEvents
  //     );
  //   } catch (error) {
  //     console.log("unable to add new events", error);
  //   }
  // };
  // const addDoctors = async (e) => {
  //   e.preventDefault();
  //   const addNewDoctor = {
  //     name: docName.current.value,
  //     spec: docSpec.current.value,
  //     contacts: docCon.current.value,
  //     email: docEmail.current.value,
  //     doctorId: docId.current.value,
  //     exp: docExp.current.value,
  //     graduatedForm: docGrad.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/addDoctors`,
  //       addNewDoctor
  //     );
  //   } catch (error) {
  //     console.log("unable to add new events", error);
  //   }
  // };
  // const handleBeds = async (e) => {
  //   e.preventDefault();
  //   const updateBeds = {
  //     total: beds.current.value,
  //     occupied: occupied.current.value,
  //     available: available.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/addBeds`,
  //       updateBeds
  //     );
  //   } catch (error) {
  //     console.log("unable to add new events", error);
  //   }
  // };
  // const handleBedTypes = async (e) => {
  //   e.preventDefault();
  //   const bedTypes = {
  //     icu: icu.current.value,
  //     ventilator: ventilator.current.value,
  //     other: others.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/bedTypes`,
  //       bedTypes
  //     );
  //   } catch (error) {
  //     console.log("unable to add new events", error);
  //   }
  // };
  // const handleVaccancy = async (e) => {
  //   e.preventDefault();
  //   const addVaccancy = {
  //     position: position.current.value,
  //     amount: reqTotal.current.value,
  //     desc: vacDesc.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/events/addEvents`,
  //       addVaccancy
  //     );
  //   } catch (error) {
  //     console.log("unable to add new events", error);
  //   }
  // };

  // const handleContacts = async (e) => {
  //   e.preventDefault();
  //   const addContacts = {
  //     name: emgName.current.value,
  //     number: emgCon.current.value,
  //   };
  //   try {
  //     await axios.post(
  //       `${local}/hospitals/${hospitalInfo?._id}/addContacts`,
  //       addContacts
  //     );
  //   } catch (error) {
  //     console.log("unable to add new events", error);
  //   }
  // };


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

    </Wrapper>
  );
}

export default HospitalDetails;
