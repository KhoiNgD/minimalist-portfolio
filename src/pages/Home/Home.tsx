import Container from "components/Container/Container";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Hero from "./Hero";

const Home = () => {
  return (
    <Wrapper tag="main">
      <Hero />
      <AboutMe />
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 150px;
`;

export default Home;
