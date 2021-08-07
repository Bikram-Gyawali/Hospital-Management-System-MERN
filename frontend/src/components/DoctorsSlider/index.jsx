import React, { forwardRef } from 'react'
import DummyImage from 'assets/images/dummy-event-image.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { colors } from 'colors';

const DoctorCard = styled.div`
  background: ${colors.secondaryWhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

const DoctorCardTop = styled.div`
`
const DoctorCardBottom = styled.div`
    padding: 20px 25px;
    height: 230px;
`
const DoctorImage = styled.img`
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 250px;
    object-fit: cover;
    object-position: top center;
`

const DoctorTitle = styled.div`
    font-size: 20px;
`

const DoctorPrice = styled.div`
    color: ${colors.secondary};
    margin-bottom: 15px;
`

const Line = styled.div`
    margin: 10px 0;
    height: 1px;
    width: 100%;
    background: ${colors.primaryYellow};
  `

const DoctorDescription = styled.div``




const CustomSwiper = styled(Swiper)`
    max-width: 1100px;
    width: inherit;
    padding: 30px 0px !important;
    display: grid;
`

/*

    contacts: 9887451203
createdAt: "2021-07-03T13:58:04.839Z"
email: "rumba@gmail.com"
exp: "4"
name: "Rumba Bhatt;"
pic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/nurse-2141808_1920_0.jpeg?iQwB00e5q_8lxTkTJZG4PtG7ytvWXbrd&size=770:433"
reviews: []

*/


const DoctorsSlider = forwardRef(({ doctors }, { navigationNextRef, navigationPrevRef }) => {
    return (
        <CustomSwiper
            spaceBetween={60}
            cssWidthAndHeight={true}
            slidesPerView={2.5}
            visibilityFullFit={true}
            autoResize={false}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                    // Override prevEl & nextEl now that refs are defined
                    swiper.params.navigation.prevEl = navigationPrevRef.current
                    swiper.params.navigation.nextEl = navigationNextRef.current

                    // Re-init navigation
                    swiper.navigation.destroy()
                    swiper.navigation.init()
                    swiper.navigation.update()
                })
            }}
        >
            {
                doctors && doctors.map((doctor, index) => (
                    <SwiperSlide key={doctor._id}>
                        <DoctorCard  >
                            <DoctorCardTop>
                                <DoctorImage src={doctor.pic} />
                            </DoctorCardTop>
                            <DoctorCardBottom>
                                <DoctorTitle>
                                    {doctor.name}
                                </DoctorTitle>
                                <DoctorPrice>
                                   {doctor.email}
                                </DoctorPrice>
                                <DoctorDescription>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore molestias, quis iste inventore nobis itaque!
                                </DoctorDescription>
                            </DoctorCardBottom>
                        </DoctorCard>
                    </SwiperSlide>
                )
                )}

        </CustomSwiper>
    )
})

export default DoctorsSlider
