import Logo from 'assets/images/Logo.svg'
import { colors } from 'colors'
import Section from 'components/GlobalComponents/Section'
import { fonts } from 'fonts'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Nav = styled.nav`
    padding: 20px 0;
    background: ${colors.white};
    position: sticky;
    top: 0;
    z-index: 2;
`
const NavSection = styled(Section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLeft = styled.div``
const NavRight = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    font-weight: ${fonts.regular};
    font-size: 20px;
`
const LinkContainer = styled.div`
    display: flex;
    gap: 20px;
`

const StyledNavLink = styled(NavLink)`
    color: ${colors.black};
`

const ButtonContainer = styled.div``
const Button = styled.button`
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 12px 20px;
    color: ${colors.white};
    background: ${colors.primary};
`



const ButtonLink = styled(Link)`
    color: ${colors.white};
    font-weight: ${fonts.regular};
    font-size: 20px;
`
const Navbar = () => {
    return (
        <Nav>
            <NavSection>
                <NavLeft>
                    <Link to="/">
                        <img src={Logo} alt={"Doctor Sahab Logo"} />
                    </Link>
                </NavLeft>
                <NavRight>
                    <LinkContainer>
                        <StyledNavLink to="/" exact activeStyle={{color: colors.primary}}>
                            Home
                        </StyledNavLink>
                        <StyledNavLink to="/about" exact activeStyle={{color: colors.primary}}>
                            About
                        </StyledNavLink>
                        <StyledNavLink to="/covid19" exact activeStyle={{color: colors.primary}}>
                            Covid19
                        </StyledNavLink>
                        <StyledNavLink to="/doctors" exact activeStyle={{color: colors.primary}}>
                            Doctors
                        </StyledNavLink>
                    </LinkContainer>
                    <ButtonContainer>
                        <Button>
                            <ButtonLink to="/register">Sign Up</ButtonLink>
                        </Button>
                    </ButtonContainer>
                </NavRight>
            </NavSection>

        </Nav>
    )
}

export default Navbar
