import Container from "components/Container/Container";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { navLinks: { name: string; path: string }[] };

const Footer = ({ navLinks }: Props) => {
  return (
    <Wrapper>
      <ContainerWrapper tag={"footer"}>
        <NavWrapper>
          <Link to="/">
            <img src="assets/logo.svg" alt="portfolio logo" />
          </Link>

          <LinkWrapper>
            {navLinks.map(({ path, name }) => (
              <StyledNavLink to={path} key={path}>
                {name}
              </StyledNavLink>
            ))}
          </LinkWrapper>
        </NavWrapper>

        <ContactWrapper>
          <img src="assets/icons/github.svg" alt="github logo" />
          <img src="assets/icons/twitter.svg" alt="twitter logo" />
          <img src="assets/icons/linkedin.svg" alt="linkedin logo" />
        </ContactWrapper>
      </ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--primary-grayish-dark-blue);
  padding: 28px 0;
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 42px;
`;

const ContactWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 12px;
`;

export default Footer;
