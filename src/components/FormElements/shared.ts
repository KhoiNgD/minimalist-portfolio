import { css } from "styled-components";

export interface IInput {
  label: string;
  placeholder: string;
}

export interface IFormElement {
  label: string;
}

export const formElementStyle = css`
  width: 100%;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  outline: none;
  background-color: var(--secondary-text-field);
  color: var(--primary-grayish-dark-blue);

  &:focus,
  &:active {
    border: 1px solid var(--primary-color);
  }

  &:invalid {
    border: 1px solid var(--secondary-error);
  }
`;
