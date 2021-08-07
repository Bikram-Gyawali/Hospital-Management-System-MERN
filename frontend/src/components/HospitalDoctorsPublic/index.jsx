import React, { useRef, useEffect, useState } from 'react'
import Card from 'components/DashboardShared/CardLayout'
import styled from 'styled-components'
import { colors } from 'colors'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Button from 'components/GlobalComponents/Button'
import RightArrow from 'assets/images/right-arrow.svg'
import LeftArrow from 'assets/images/left-arrow.svg'
import { useParams } from 'react-router-dom'
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import EventsSlider from 'components/EventsSlider';
import axios from 'axios';
import DoctorsSlider from 'components/DoctorsSlider';

const CardHeader = styled.div`
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Line = styled.div`
    margin: 30px 0;
    height: 1px;
    width: 100%;
    background: ${colors.primaryYellow};
  `

const H2 = styled.h2`
 font-size : 22px;
`

const RoundedButton = styled(Button)`
    border-radius: 999px;
    padding: 10px;
    background: ${colors.secondary};
`

const RightArrowImage = styled.img`
    width: 25px;
`

const LeftArrowImage = styled.img`
    width: 25px;
`

const CardBody = styled.div`
    padding: 0 50px;
`
const CardHeaderLeft = styled.div``

const CardHeaderRight = styled.div`
    display: flex;
    gap: 20px;
`




SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
const HospitalDoctors = ({ hospitalData }) => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const { hospitalID } = useParams();

    const [doctors, setDoctors] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getDoctorsData = async () => {
            try {

                const doctors = await axios(`http://localhost:5000/api/hospitals/${hospitalID}/allDoctors`);
                console.log(doctors)
                setDoctors(doctors.data);
            }
            catch (e) {
                setError(e)
            }

        }

        const driverFunction = async () => {
            setLoading(true);
            await getDoctorsData()
            setLoading(false);
        }

        driverFunction();
    }, [hospitalID])
    return (
        <Card>
            <CardHeader>
                <CardHeaderLeft>

                    <H2>Doctors</H2>
                </CardHeaderLeft>
                <CardHeaderRight>
                    <RoundedButton ref={navigationPrevRef}>
                        <LeftArrowImage src={LeftArrow} alt="Left Arrow" />
                    </RoundedButton>
                    <RoundedButton ref={navigationNextRef}>
                        <RightArrowImage src={RightArrow} alt="Right Arrow" />
                    </RoundedButton>
                </CardHeaderRight>
            </CardHeader>
            <Line />
            <CardBody>
                {loading && <div>Loading...</div>}
                {error && <div>Error fetching data</div>}
                {
                    doctors && (
                        <DoctorsSlider doctors={doctors || []} ref={{ navigationPrevRef, navigationNextRef }} />
                    )
                }
            </CardBody>
        </Card>
    )
}

export default HospitalDoctors
