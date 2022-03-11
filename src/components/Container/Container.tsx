import { ElementType, ReactNode } from "react";
import styled from "styled-components";

type Props = { tag: ElementType; children: ReactNode };

function Container({ tag, children }: Props) {
  return <Wrapper as={tag}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 110rem;
`;

export default Container;
