import Container from "components/Container/Container";
import desktopSrc from "assets/homepage/desktop/image-homepage-profile.jpg";
import desktopSrc2x from "assets/homepage/desktop/image-homepage-profile.jpg";
import tabletSrc from "assets/homepage/tablet/image-homepage-profile.jpg";
import tabletSrc2x from "assets/homepage/tablet/image-homepage-profile.jpg";
import mobileSrc from "assets/homepage/mobile/image-homepage-profile.jpg";
import mobileSrc2x from "assets/homepage/mobile/image-homepage-profile.jpg";
import ResponsiveImage from "components/ResponsiveImage/ResponsiveImage";
import styled from "styled-components";
import { SecondaryHeading } from "components/Headings";
import { SecondaryButton } from "components/Buttons";

function AboutMe() {
  return (
    <Wrapper tag="section">
      <ResponsiveImage
        desktopSrc={desktopSrc}
        desktopSrc2x={desktopSrc2x}
        tabletSrc={tabletSrc}
        tabletSrc2x={tabletSrc2x}
        mobileSrc={mobileSrc}
        mobileSrc2x={mobileSrc2x}
        alt="author of the website"
      />
      <Grow grow={1.5} />
      <Content>
        <SecondaryHeading>About Me</SecondaryHeading>

        <Bio>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </Bio>
        <Button>Go to portfolio</Button>
      </Content>
      <Grow grow={1} />
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  width: 100%;
  display: flex;
`;

const Content = styled.div`
  border-top: 1px solid var(--secondary-text-field);
  border-bottom: 1px solid var(--secondary-text-field);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Bio = styled.p`
  width: 350px;
  font-size: 1.6rem;
  line-height: 30px;
  color: var(--primary-grayish-dark-blue);
  margin: auto;
  margin-top: 28px;
  margin-bottom: 24px;
`;

const Button = styled(SecondaryButton)`
  background: #fff;
  align-self: baseline;
`;

interface IGrow {
  grow: number;
}

const Grow = styled.div<IGrow>`
  flex: ${(props) => props.grow};
`;

export default AboutMe;
