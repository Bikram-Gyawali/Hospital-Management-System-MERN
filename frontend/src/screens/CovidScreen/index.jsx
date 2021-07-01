import Navbar from 'components/GlobalComponents/Navbar'
import Footer from 'components/GlobalComponents/Footer'
import styled from 'styled-components'

const Covid19Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const index = () => {
    return (
        <Covid19Container>
            <Navbar />
            <Footer />
        </Covid19Container>
    )
}

export default index
