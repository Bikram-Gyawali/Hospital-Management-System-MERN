import { colors } from "colors"
import Layout from "components/GlobalComponents/Layout"
import Section from "components/GlobalComponents/Section"
import { fonts } from "fonts"
import styled from "styled-components"
import specialitiesData from "sampleDatas/specialities"
const StyledLayout = styled(Layout)``
const SpecialitiesContainer = styled.div`
    background: ${colors.secondary}1A;
    
`
const Top = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 125px;
    align-content: flex-start;
    margin-bottom: 55px;
`
const TopTitle = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: ${colors.darkBrown};
`
const TopDescription = styled.div`
    font-weight: ${fonts.medium};
    color: ${colors.lightBrown};
    font-size: 22px;
`

const Item = styled.div`

`
const ItemTop = styled.div`
    margin-bottom: 10px;

`
const ItemTitle = styled.div`
    font-weight: ${fonts.black};
    color: ${colors.darkBrown};
    font-size: 24px;
`
const ItemImageContainer = styled.div``
const ItemBottom = styled.div`
    color: ${colors.lightBrown};
    opacity: 0.8;
    font-weight: ${fonts.medium};
    font-size: 20px;
`


const Bottom = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 70px;
    column-gap: 120px;
`
const Specialities = () => {
    return (
        <SpecialitiesContainer>
            <StyledLayout>
                <Section>
                    <Top>
                        <TopTitle>Quality Care For You and The Ones You Love</TopTitle>
                        <TopDescription>With 24/7 access to doctors, psychiatrists, psychologists, therapists and other medical experts, care is always available, anytime and anywhere.</TopDescription>
                    </Top>
                    <Bottom>
                        {
                            specialitiesData.map(item => (
                                <Item key={ item.id }>
                                    <ItemTop>
                                        <ItemImageContainer>
                                            <img src={item.imageUrl} alt={item.title} />
                                        </ItemImageContainer>
                                        <ItemTitle>
                                            {item.title}
                                        </ItemTitle>
                                    </ItemTop>
                                    <ItemBottom>
                                        {item.description}
                                    </ItemBottom>
                                </Item>
                            ))
                        }
                        
                    </Bottom>
                </Section>
            </StyledLayout>
        </SpecialitiesContainer>
    )
}

export default Specialities
