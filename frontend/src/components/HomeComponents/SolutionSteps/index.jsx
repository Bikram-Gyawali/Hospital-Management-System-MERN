import { colors } from 'colors'
import Layout from 'components/GlobalComponents/Layout'
import Section from 'components/GlobalComponents/Section'
import { fonts } from 'fonts'
import styled from 'styled-components'
import solutionData from 'sampleDatas/stepSolution'

const Title = styled.div`
    text-align: center;
    text-transform: uppercase;
    color: ${colors.primary};
    font-weight: ${fonts.medium};
    font-size: 22px;
    margin-bottom: 10px;
`
const SuperTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.085em;
    font-size: 40px;
    color: ${colors.primary};
    font-weight: ${fonts.medium};
    margin-bottom: 40px;
`

const StepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const GridTop = styled.div`
    margin-bottom: 16px;
`
const GridTitle = styled.div`
    font-size: 22px;
    font-weight: ${fonts.bold};
    color: ${colors.primary};
`
const GridBottom = styled.div`
    font-size: 18px;
    color: ${colors.lightBrown};
`
const GridImageContainer = styled.div`
    margin-bottom: 12px;
`

const SolutionSteps = () => {
    return (
        <Layout>
            <Section>
                <Title>Fastest Solution</Title>
                <SuperTitle>4 easy steps to get your solution</SuperTitle>
                <StepsGrid>
                    {
                        solutionData.map(item => (
                            <GridItem key={item.id}>
                                <GridTop>
                                    <GridImageContainer>
                                        <img src={item.imageUrl} alt={item.title} />
                                    </GridImageContainer>
                                    <GridTitle>{item.title}</GridTitle>
                                </GridTop>
                                <GridBottom>
                                    {item.description}
                                </GridBottom>
                            </GridItem>
                        ))
                    }

                </StepsGrid>
            </Section>
        </Layout>
    )
}

export default SolutionSteps
