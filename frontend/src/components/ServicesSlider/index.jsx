import React, { forwardRef } from 'react'
import DummyImage from 'assets/images/dummy-event-image.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { colors } from 'colors';

const ServiceCard = styled.div`
  background: ${colors.secondaryWhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

const ServiceCardTop = styled.div`
`
const ServiceCardBottom = styled.div`
    padding: 20px 25px;
    height: 230px;
`
const ServiceImage = styled.img`
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;\
    height: 200px;
    object-fit: cover;
`

const ServiceTitle = styled.div`
    font-size: 20px;
`

const ServicePrice = styled.div`
    color: ${colors.secondary};
    margin-bottom: 15px;
`

const Line = styled.div`
    margin: 10px 0;
    height: 1px;
    width: 100%;
    background: ${colors.primaryYellow};
  `

const ServiceDescription = styled.div``




const CustomSwiper = styled(Swiper)`
    max-width: 1100px;
    width: inherit;
    padding: 30px 0px !important;
    display: grid;
`


const ServicesSlider = forwardRef(({ services }, { navigationNextRef, navigationPrevRef }) => {
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
                services && services.map((service, index) => (
                    <SwiperSlide key={service._id}>
                        <ServiceCard  >
                            <ServiceCardTop>
                                <ServiceImage src={service.img} />
                            </ServiceCardTop>
                            <ServiceCardBottom>
                                <ServiceTitle>
                                    {service.topic}
                                </ServiceTitle>
                                <ServicePrice>
                                    Rs. {service.serviceCharge}
                                </ServicePrice>
                                <ServiceDescription>
                                    {service.desc}
                                </ServiceDescription>
                            </ServiceCardBottom>
                        </ServiceCard>
                    </SwiperSlide>
                )
                )}

        </CustomSwiper>
    )
})

export default ServicesSlider
