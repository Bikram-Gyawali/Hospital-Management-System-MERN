import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import DashboardLayout from 'components/DashboardShared/DashboardLayout';
import useGetUserData from "hooks/useGetUserSidebarData";
import Card from 'components/DashboardShared/CardLayout'
import returnURLFromObjectOfStrings from 'utils/returnURLFromObjectOfStrings';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { colors } from 'colors';
import Button from 'components/GlobalComponents/Button';
import DashboardContentWrapper from 'components/DashboardShared/DashboardContentWrapper';

const ProfilePictureContainer = styled.div`
    border-radius: 999px;
    width: 125px;
    height: 125px;
    overflow: hidden;
`

const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`

const NameAndRatingContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

const HospitalName = styled.h3`
    font-size: 22px;
`

const CardHeader = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ApplyButtonContainer = styled.div``

const AppointmentButton = styled(Button)`
    border-radius: 0px;
`

const GoBackButton = styled(Button)`
    border-radius: 0px;
    margin: 25px 0;
`

const GoBackButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Line = styled.div`
    margin: 30px 0;
    height: 1px;
    width: 100%;
    background: ${colors.primaryYellow};
  `

const CardBottom = styled.div`
    padding: 0 50px;
`

//Function to return average rating from array of ratings
function getAverageRating(ratings) {
    if (ratings.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i];
    }
    return sum / ratings.length;
}

const Index = () => {

    const { hospitalID, id } = useParams()
    const [hospitalData, setHospitalData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [rating, setRating] = useState(0)


    const { userMenuData } = useGetUserData()
    useEffect(() => {
        async function getHospitalData() {
            try {
                const data = await axios(`http://localhost:5000/api/hospitals/${hospitalID}`)
                console.log(data)
                setHospitalData(data.data)

                const ratingArray = data.data.reviews.map(review => review.ratings);
                setRating(getAverageRating(ratingArray));

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

                <Card>
                    <CardHeader>
                        <NameAndRatingContainer>
                            <ProfilePictureContainer>
                                {hospitalData &&
                                    <ProfilePicture src={returnURLFromObjectOfStrings(hospitalData.hospitalImages)} alt={hospitalData.name} />}
                            </ProfilePictureContainer>

                            <RatingContainer>
                                <HospitalName>{hospitalData && hospitalData.name}</HospitalName>
                                <StarRatings starDimension={"18px"} rating={rating} starSpacing={"3px"} starRatedColor={colors.primary} starEmptyColor={colors.grey} />
                            </RatingContainer>
                        </NameAndRatingContainer>
                        <ApplyButtonContainer>
                            <AppointmentButton outlined>Apply For Appointment</AppointmentButton>
                        </ApplyButtonContainer>
                    </CardHeader>
                    <Line />
                    <CardBottom>
                        {hospitalData && hospitalData.hospitalDescription}
                    </CardBottom>
                </Card>
            </DashboardContentWrapper>

        </DashboardLayout>
    )
}

export default Index
