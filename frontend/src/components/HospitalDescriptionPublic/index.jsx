import { colors } from 'colors'
import React, { useEffect, useState } from 'react'
import Button from 'components/GlobalComponents/Button';
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';
import Card from 'components/DashboardShared/CardLayout'
import returnURLFromObjectOfStrings from 'utils/returnURLFromObjectOfStrings';
import AppointmentForm from 'components/AppointmentForm'

const Line = styled.div`
    margin: 30px 0;
    height: 1px;
    width: 100%;
    background: ${colors.primaryYellow};
  `

const CardBottom = styled.div`
    padding: 0 50px;
`

const RatingContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ApplyButtonContainer = styled.div``

const AppointmentButton = styled(Button)`
    border-radius: 0px;
`

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





//Function to return average rating from array of ratings
function getAverageRating(ratings) {
    if (ratings.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < ratings.length; i++) {
        sum += ratings[i];
    }
    return sum / ratings.length;
}


const HospitalDescriptionPublic = ({ hospitalData }) => {
    const [rating, setRating] = useState(0)
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (hospitalData) {
            const ratingArray = hospitalData?.reviews?.map(review => review.ratings) || [];
            setRating(getAverageRating(ratingArray));
        }
    }, [hospitalData])

    const handleModalOpen = () => {
        setOpen(true)
    }
    return (
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
                    <AppointmentButton outlined onClick={ () =>handleModalOpen()}>Apply For Appointment</AppointmentButton>
                </ApplyButtonContainer>
            </CardHeader>
            <Line />
            <CardBottom>
                {hospitalData && hospitalData.hospitalDescription}
            </CardBottom>
            <AppointmentForm open={ open} setOpen={ setOpen} />
        </Card>
    )
}

export default HospitalDescriptionPublic
