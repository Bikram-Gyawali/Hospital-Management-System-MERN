import Navbar from 'components/GlobalComponents/Navbar'
import Footer from 'components/GlobalComponents/Footer'
import styled from 'styled-components'

const ServiceScreen = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const index = () => {
    return (
        <ServiceScreen>
            <Navbar />
            <Footer />
        </ServiceScreen>
    )
}

export default index