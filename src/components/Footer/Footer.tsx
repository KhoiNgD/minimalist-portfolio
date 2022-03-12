import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "components/Container/Container";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as GithubLogo } from "assets/icons/github.svg";
import { ReactComponent as TwitterLogo } from "assets/icons/twitter.svg";
import { ReactComponent as LinkedinLogo } from "assets/icons/linkedin.svg";

type Props = { navLinks: { name: string; path: string }[] };

const Footer = ({ navLinks }: Props) => {
  return (
    <Wrapper>
      <ContainerWrapper tag={"footer"}>
        <NavWrapper>
          <Link to="/">
            {/* <img src={logo} alt="portfolio logo" /> */}
            <LogoSvg />
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
          <GithubLogo />
          <TwitterLogo />
          <LinkedinLogo />
        </ContactWrapper>
      </ContainerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--primary-grayish-dark-blue);
  padding: 28px 0;
  margin-top: 150px;
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    cursor: pointer;
  }
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
  align-items: center;
  gap: 16px;

  & path {
    fill: #fff;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
`;

const LogoSvg = styled(Logo)`
  & > * {
    fill: #fff;
  }
`;

export default Footer;
