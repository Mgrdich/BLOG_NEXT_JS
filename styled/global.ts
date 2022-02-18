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
  max-width: 100%;
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
  position: relative;
`;

export const StyledError = styled.label`
  position: absolute;
  color: red;
  font-size: 14px;
`;

// TODO the string type
interface IFlexContainer {
    width: number;
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    maxWidth: number;
    flexWrap: string;
    flexGrow: number;
    padding: number;
    margin: number;
    cursor: number;
}

export const FlexContainer = styled.div<IFlexContainer>`
  display: flex;
  width: ${({width}) => width};
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  justify-content: ${({justifyContent}) => justifyContent};
  align-items: ${({alignItems}) => alignItems};
  max-width: ${({maxWidth}) => maxWidth};
  flex-wrap: ${({flexWrap}) => (flexWrap ? 'wrap' : 'nowrap')};
  flex-grow: ${({flexGrow}) => (flexGrow ? 1 : 'initial')};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
  cursor: ${({cursor}) => cursor};
  position: relative;
`;

// TODO the string type
interface IFlexItem {
    flex: number;
    margin: string;
    padding: string;
    width: string;
}

export const FlexItem = styled.div<IFlexItem>`
  flex: ${({flex}) => flex};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  width: ${({width}) => width};
`;