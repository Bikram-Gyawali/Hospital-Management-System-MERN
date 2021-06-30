import styled from 'styled-components'


const SectionContainer = styled.div`
    max-width: 1200px;
    margin: auto;
`

const Section = ({children, className}) => {
    return (
        <SectionContainer className={className}>
            {children}
        </SectionContainer>
    )
}

export default Section;