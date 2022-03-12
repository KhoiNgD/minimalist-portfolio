import styled from "styled-components";
import desktopSrc from "assets/homepage/desktop/image-homepage-hero.jpg";
import desktopSrc2x from "assets/homepage/desktop/image-homepage-hero@2x.jpg";
import tabletSrc from "assets/homepage/tablet/image-homepage-hero.jpg";
import tabletSrc2x from "assets/homepage/tablet/image-homepage-hero@2x.jpg";
import mobileSrc from "assets/homepage/mobile/image-homepage-hero.jpg";
import mobileSrc2x from "assets/homepage/mobile/image-homepage-hero@2x.jpg";
import { PrimaryHeading } from "components/Headings";
import { PrimaryButton } from "components/Buttons";
import ResponsiveImage from "components/ResponsiveImage/ResponsiveImage";

function Hero() {
  return (
    <Wrapper>
      <ResponsiveImage
        desktopSrc={desktopSrc}
        desktopSrc2x={desktopSrc2x}
        tabletSrc={tabletSrc}
        tabletSrc2x={tabletSrc2x}
        mobileSrc={mobileSrc}
        mobileSrc2x={mobileSrc2x}
        alt="displaying a screen of application"
      />

      <Description>
        <Heading>
          Hey, I’m Alex Spencer and I love building beautiful websites
        </Heading>
        <PrimaryButton>About Me</PrimaryButton>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  position: relative;
`;

const Description = styled.div`
  width: 445px;
  padding-top: 56px;
  padding-right: 56px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Heading = styled(PrimaryHeading)`
  width: 385px;
`;

export default Hero;
