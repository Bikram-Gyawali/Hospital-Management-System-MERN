import Layout from 'components/GlobalComponents/Layout'
import Section from 'components/GlobalComponents/Section'
import Button from 'components/GlobalComponents/Button'
import React from 'react'
import styled from 'styled-components'
import Research from 'assets/images/medical-research.svg'
import Tick from 'assets/images/tick.svg'
import { fonts } from 'fonts'
import { colors } from 'colors'

const AdvantagesContainer = styled.div``
const AdvantagesSection = styled(Section)`
    max-width: ${(window.innerWidth - 1200) / 2 + 1200}px;
    margin-right: 0px;
    padding-right: 10px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
const FlexLeft = styled.div`
    max-width: 500px;
`
const FlexRight = styled.div``

const Title = styled.div`
    font-weight: ${fonts.bold};
    color: ${colors.darkBrown};
    font-size: 48px;
    margin-bottom: 40px;
`

const Description = styled.div`
    color: ${colors.lightBrown};
    font-size: 20px;
    margin-bottom: 20px;
`

const UL = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 30px;

`
const LI = styled.li`
    padding-left: 40px;
    min-height: 50px;
    display: flex;
    align-items: center;
    background: url(${Tick}) left center no-repeat;
    color: ${colors.lightBrown};
`

const LearnMoreButton = styled(Button)`
    font-weight: ${fonts.medium};
    font-size: 20px;
`

const Advantages = () => {
    return (
        <AdvantagesContainer>
            <Layout>
                <AdvantagesSection>
                    <Flex>
                        <FlexLeft>
                            <Title>
                                Personalized care for your mind and body.
                            </Title>
                            <Description>
                                From rashes to colds, stress management to diabetes management, individual treatment plans are created around you.
                            </Description>
                            <UL>
                                <LI>Urgent Care</LI>
                                <LI>Behavioural Health</LI>
                                <LI>Preventive Health</LI>
                                <LI>Chronic Care</LI>
                            </UL>
                            <LearnMoreButton>Get Started</LearnMoreButton>
                        </FlexLeft>
                        <FlexRight>
                            <img src={Research} alt={ "Medical Research "}/>
                        </FlexRight>
                   </Flex>
                </AdvantagesSection>
            </Layout>
        </AdvantagesContainer>
    )
}

export default Advantages
