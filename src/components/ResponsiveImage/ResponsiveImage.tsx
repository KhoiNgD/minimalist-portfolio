type Props = {
  desktopSrc: string;
  desktopSrc2x: string;
  tabletSrc: string;
  tabletSrc2x: string;
  mobileSrc: string;
  mobileSrc2x: string;
  alt: string;
};

function ResponsiveImage({
  desktopSrc,
  desktopSrc2x,
  tabletSrc,
  tabletSrc2x,
  mobileSrc,
  mobileSrc2x,
  alt,
}: Props) {
  return (
    <picture>
      <source
        media="(min-width: 1101px)"
        srcSet={`${desktopSrc} 1x, ${desktopSrc2x} 2x`}
      />
      <source
        media="(min-width: 551px)"
        srcSet={`${tabletSrc} 1x, ${tabletSrc2x} 2x`}
      />
      <source srcSet={`${mobileSrc} 1x, ${mobileSrc2x} 2x`} />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
}

export default ResponsiveImage;
