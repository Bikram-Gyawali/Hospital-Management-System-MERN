import React, { forwardRef } from 'react'
import DummyImage from 'assets/images/dummy-event-image.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { colors } from 'colors';
import truncate from 'truncate';
const EventCard = styled.div`
  background: ${colors.secondaryWhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

const EventCardTop = styled.div``
const EventCardBottom = styled.div`
    padding: 20px 25px;
    height: 230px;
`
const EventImage = styled.img`
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 250px;
    object-fit: cover;
`

const EventTitle = styled.div`
    font-size: 20px;
    margin-bottom: 15px;
`

const EventDescription = styled.div`

`



const CustomSwiper = styled(Swiper)`
    max-width: 1100px;
    width: inherit;
    padding: 30px 0px !important;
`


const EventsSlider = forwardRef(({ events }, {navigationNextRef, navigationPrevRef }) => {
    return (
        <CustomSwiper
            spaceBetween={65}
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
                events && events.map((event, index) => (
                    <SwiperSlide key={event._id}>
                        <EventCard  >
                            <EventCardTop>
                                {event?.eventImg ? <EventImage src={event.eventImg} alt="Event Image" />: <EventImage src={DummyImage} alt="Event Image" />}
                            </EventCardTop>
                            <EventCardBottom>
                                <EventTitle>
                                    {event.eventName}
                                </EventTitle>
                                <EventDescription>
                                    {truncate(event.desc, 150)}
                                </EventDescription>
                            </EventCardBottom>
                        </EventCard>
                    </SwiperSlide>
                )
                )}

        </CustomSwiper>
    )
})

export default EventsSlider
