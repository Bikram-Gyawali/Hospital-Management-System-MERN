import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import DashboardLayout from 'components/DashboardShared/DashboardLayout';
import useGetUserData from "hooks/useGetUserSidebarData";
import styled from 'styled-components';

import Button from 'components/GlobalComponents/Button';
import DashboardContentWrapper from 'components/DashboardShared/DashboardContentWrapper';
import HospitalDescriptionPublic from 'components/HospitalDescriptionPublic';
import HospitalEventsPublic from 'components/HospitalEventsPublic';
import HospitalServicesPublic from 'components/HospitalServicesPublic';
import HospitalDoctorsPublic from 'components/HospitalDoctorsPublic';




const GoBackButton = styled(Button)`
    border-radius: 0px;
    margin-bottom: 15px;
`

const GoBackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Container = styled.div`
  margin-bottom: 70px;
`




const Index = () => {

    const { hospitalID, id } = useParams()
    const [hospitalData, setHospitalData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    const { userMenuData } = useGetUserData()
    useEffect(() => {
        async function getHospitalData() {
            try {
                const data = await axios(`http://localhost:5000/api/hospitals/${hospitalID}`)
                console.log(data)
                setHospitalData(data.data)



            } catch (error) {
                setError(error)
            }
        }

        async function driverFunction() {

            setLoading(true)
            await getHospitalData()
            setLoading(false)
        }
        driverFunction()
    }, [hospitalID])



    console.log(hospitalData)

    return (
        <DashboardLayout type={"hospital"} menuData={userMenuData}>
            <DashboardContentWrapper>
                <GoBackButtonContainer>

                    <Link to={`/${id}/userDashboard/hospitals/`}>
                        <GoBackButton>
                            Go Back to Hospitals Page
                        </GoBackButton>
                    </Link>
                </GoBackButtonContainer>
                {error && <div>Error Loading Data</div>}
                {loading && <div>Loading Data...</div>}
                {hospitalData && (
                    <>
                        <Container>
                            <HospitalDescriptionPublic hospitalData={hospitalData} />
                        </Container>
                        <Container>
                            <HospitalEventsPublic hospitalData={hospitalData} />
                        </Container>
                        <Container>
                            <HospitalServicesPublic hospitalData={hospitalData} />
                        </Container>
                        <Container>
                            <HospitalDoctorsPublic hospitalData={hospitalData} />
                        </Container>
                    </>
                )}


            </DashboardContentWrapper>

        </DashboardLayout>
    )
}

export default Index
