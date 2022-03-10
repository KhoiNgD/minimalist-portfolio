import styled from "styled-components";
import { IFormElement } from "./shared";

const Wrapper = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 700;
  color: var(--primary-grayish-dark-blue);

  &::first-letter {
    text-transform: capitalize;
  }
`;

const ErrorMessage = styled.span`
  font-size: 1rem;
  font-weight: 700;
  font-style: italic;
  color: var(--secondary-error);
  margin-top: -4px;
`;

const FormElement: React.FC<IFormElement> = ({ label, children }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      {children}
      <ErrorMessage>This field is required</ErrorMessage>
    </Wrapper>
  );
};

export { FormElement };
