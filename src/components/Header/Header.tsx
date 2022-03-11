import Container from "components/Container/Container";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const navLinks = [
  { name: "home", path: "/home" },
  { name: "portfolio", path: "/portfolio" },
  { name: "contact me", path: "/contact me" },
];

const Header = () => {
  return (
    <Container tag="header">
      <Link to="/">
        <img src="assets/logo.svg" alt="portfolio logo" />
      </Link>

      <Wrapper>
        {navLinks.map(({ path, name }) => (
          <StyledNavLink to={path} key={path}>
            {name}
          </StyledNavLink>
        ))}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
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
