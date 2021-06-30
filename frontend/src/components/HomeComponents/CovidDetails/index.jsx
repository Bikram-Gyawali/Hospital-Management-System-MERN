import { colors } from 'colors'
import styled from 'styled-components'


const CovidContainer = styled.div`
    background: ${colors.primary};
    color: ${colors.white};
    padding: 60px 70px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
`

const Box = styled.div`
    text-align: center;
    border-right: 1px solid ${props => props.isLast === true ? 'transparent' : colors.grey};
    flex: 1;
`
const BoxValue = styled.div`
    font-size: 45px;
    font-weight: bold;

`
const BoxDescriptopn = styled.div`
    font-size: 20px;
`

const index = () => {
    return (
        <CovidContainer>
            <Box>
                <BoxValue>135,252</BoxValue>
                <BoxDescriptopn>Total Cases</BoxDescriptopn>
            </Box>
            <Box>
                <BoxValue>135,252</BoxValue>
                <BoxDescriptopn>Total Cases</BoxDescriptopn>
            </Box>
            <Box isLast>
                <BoxValue>135,252</BoxValue>
                <BoxDescriptopn>Total Cases</BoxDescriptopn>
            </Box>
        </CovidContainer>
    )
}

export default index
