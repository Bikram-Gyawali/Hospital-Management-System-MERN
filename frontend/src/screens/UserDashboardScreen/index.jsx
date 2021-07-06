import React, { useState, useEffect } from "react";
import Navbar from 'components/DashboardShared/Navbar'
import SideBar from 'components/DashboardShared/SideBar'
import styled from 'styled-components'
import useGetUserData from 'hooks/useGetUserSidebarData';
import AppointmentButton from "components/AppointmentButton/AppomntButton";
import axios from 'axios'
import { Link } from 'react-router-dom'

const FlexContainer = styled.div`
  display: flex;
  padding: 0 20px 0 0px;

`

const FlexRight = styled.div`
 flex: 1;
`

const FlexLeft = styled.div`
  width: 300px;
`


function Userdashboard() {
  // fetch data
  const [hospitals, sethospitals] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/api/hospitals/allHospital').then((response) => {
      sethospitals([...response.data])
      console.log(response)
    })
  }, [])

  const stringifyImage = (image) => {
    let string = "";
    for (let char in image[0]) {
      string += image[0][char]
    }
    return string;
  }

  const { userId, userMenuData } = useGetUserData()
  console.log(userMenuData, userId)
  return (
    <div>
      <Navbar type={"user"} id={userId} />
      <FlexContainer>
        <FlexLeft>
          <SideBar sidebarData={userMenuData} />
        </FlexLeft>
        <FlexRight>
          <section className="text-gray-600 body-font">
            <div className="container px-2 py-2 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="mx-auto text-lg mt-2 p-2 font-bold text-gray-600">
                  <h6>Hospitals and Clinics </h6>
                </div>
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-5  mx-auto">
                    <div className="flex flex-wrap -m-4">

                      {/* each cardstarts here */}
                      {
                        hospitals.length && hospitals.map(hospital => (
                          <div className="p-4 md:w-1/3" key={hospital._id}>
                            <div className="h-full border-4 shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                alt="blog"
                                src={stringifyImage(hospital.hospitalImages)}
                              />
                              <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                  Mutu Hospital
                                  <p>
                                    Location <i className="fas fa-map-marker-alt"></i>
                                  </p>
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                  {hospital.name}
                                </h1>
                                <p className="leading-relaxed mb-3 text-sm">
                                  {hospital.hospitalDescription}
                                </p>
                                <div className="flex items-start flex-wrap ">
                                  <Link
                                    className="text-indigo-500 text-sm  inline-flex items-center md:mb-2 lg:mb-0"
                                    to={`/${hospital._id}/hospitalProfile`}
                                  >
                                    Make Appointment
                                    <svg
                                      className="w-4 h-4 ml-2"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    >
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                  </Link>

                                  <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg
                                      className="w-4 h-4 mr-1"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    1.2K
                                  </span>
                                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg
                                      className="w-4 h-4 mr-1"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      fill="none"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                    6
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }

                      {/* card ends here */}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </FlexRight>
      </FlexContainer>
    </div>
  );
}

export default Userdashboard;
