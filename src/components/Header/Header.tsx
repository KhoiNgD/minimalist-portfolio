import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "components/Container/Container";
import { ReactComponent as Logo } from "assets/logo.svg";

type Props = { navLinks: { name: string; path: string }[] };

const Header = ({ navLinks }: Props) => {
  return (
    <Wrapper tag="header">
      <Link to="/">
        <Logo />
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
  padding-top: 64px;
  padding-bottom: 54px;
`;

const NavLinkWrapper = styled.nav`
  display: flex;
  gap: 42px;
  margin-left: auto;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--primary-grayish-dark-blue);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 2px;

  &.active {
    color: var(--primary-color);
  }
`;

export default Header;
