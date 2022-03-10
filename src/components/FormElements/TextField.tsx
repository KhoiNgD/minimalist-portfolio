import styled from "styled-components";
import { FormElement } from "./FormElement";
import { formElementStyle, IInput } from "./shared";

const Input = styled.input`
  ${formElementStyle}
`;

const TextField: React.FC<IInput> = ({ label, placeholder }) => {
  return (
    <FormElement label={label}>
      <Input type="text" placeholder={placeholder} />
    </FormElement>
  );
};

export { TextField };
