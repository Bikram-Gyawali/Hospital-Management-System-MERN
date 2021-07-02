import Navbar from 'components/GlobalComponents/Navbar'
import Footer from 'components/GlobalComponents/Footer'
import styled from 'styled-components'

const AboutScreen = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const index = () => {
    return (
        <AboutScreen>
            <Navbar />
            <Footer />
        </AboutScreen>
    )
}

export default index
