
import { colors } from 'colors'
import React from 'react'
import styled from 'styled-components'
import Section from '../Section'


const FooterContainer = styled.div`
    text-align: center;
    background: ${colors.secondary}1A;
    color: ${colors.darkBrown};
    padding: 20px 0;
`

const index = () => {
    return (
        <FooterContainer>
            <Section>Made with love by wedwizards❤️</Section>
        </FooterContainer>
    )
}

export default index
