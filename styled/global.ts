import styled from "styled-components";

export const StyledLabel = styled.label`
  display: block;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  margin: var(--size-2) 0 var(--size-1) 0;
`;

export const StyledInput = styled.input`
  font: inherit;
  padding: var(--size-1);
  border-radius: 4px;
  width: 100%;
  border: 1px solid var(--color-grey-400);
  background-color: var(--color-grey-50);
  resize: none;
`;

export const StyledTextArea = styled.textarea(StyledInput);

export const StyledControls = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledControl = styled.div`
  flex: 1;
  min-width: 10rem;
`;