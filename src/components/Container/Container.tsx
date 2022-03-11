import { ElementType, ReactNode } from "react";
import styled from "styled-components";

type Props = { className?: string; tag: ElementType; children: ReactNode };

function Container({ className, tag, children }: Props) {
  return (
    <Wrapper className={className} as={tag}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 110rem;
  margin: auto;
`;

export default Container;
