import styled from "styled-components";

// GENERIC BUTTON
const Button = styled.button`
  padding: 16px 32px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 14px;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
`;

// COMPOUND BUTTONS
const PrimaryButton: React.FC = ({ children }) => {
  return (
    <PrimaryButtonWrapper>
      <IconWrapper>
        <DownArrowIcon />
      </IconWrapper>
      <InnerButton>{children}</InnerButton>
    </PrimaryButtonWrapper>
  );
};

const SecondaryButton = styled(Button)`
  color: var(--primary-grayish-dark-blue);
  border: 1px solid var(--primary-grayish-dark-blue);

  &:hover {
    color: #fff;
    background-color: var(--primary-grayish-dark-blue);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

// PRIMARY BUTTON IMPLEMENTS
const PrimaryButtonWrapper = styled.div`
  --background-color: var(--primary-dark-blue);
  max-width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--primary-color);

  &:hover {
    --background-color: var(--primary-color);
    color: #fff;
  }
`;

const DownArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="14px">
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M0 9l8 4 8-4" />
        <path opacity=".5" d="M0 5l8 4 8-4" />
        <path opacity=".25" d="M0 1l8 4 8-4" />
      </g>
    </svg>
  );
};

const IconWrapper = styled.div`
  align-self: stretch;
  width: 48px;
  height: auto;
  display: grid;
  place-items: center;
  background: var(--background-color);

  &:hover {
    background: var(--background-color);
  }

  &:disabled {
    background: #979797;
  }
`;

const InnerButton = styled(Button)`
  color: #fff;
  background: var(--background-color);
  opacity: 0.98;

  &:hover {
    background: var(--background-color);
  }

  &:disabled {
    background: #979797;
  }
`;

export { SecondaryButton, PrimaryButton };
