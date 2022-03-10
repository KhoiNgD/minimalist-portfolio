import styled from "styled-components";
import { FormElement } from "./FormElement";
import { formElementStyle, IInput } from "./shared";

const TextAreaInput = styled.textarea`
  ${formElementStyle}
`;

const TextArea: React.FC<IInput> = ({ label, placeholder }) => {
  return (
    <FormElement label={label}>
      <TextAreaInput rows={4} placeholder={placeholder} />
    </FormElement>
  );
};

export { TextArea };
