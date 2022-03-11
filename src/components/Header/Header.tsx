import Container from "components/Container/Container";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = { navLinks: { name: string; path: string }[] };

const Header = ({ navLinks }: Props) => {
  return (
    <Wrapper tag="header">
      <Link to="/">
        <img src="assets/logo.svg" alt="portfolio logo" />
      </Link>

      <NavLinkWrapper>
        {navLinks.map(({ path, name }) => (
          <StyledNavLink to={path} key={path}>
            {name}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
`;

const NavLinkWrapper = styled.nav`
  display: flex;
  gap: 42px;
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) =>
    props.style
      ? (isActive) =>
          isActive ? "var(--primary-color)" : "var(--primary-grayish-dark-blue)"
      : "var(--primary-grayish-dark-blue)"};
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

export default Header;
