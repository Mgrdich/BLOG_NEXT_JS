import styled from "styled-components";
import {FC} from "react";

export const StyledLabel: FC = styled.label`
  display: block;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  margin: var(--size-2) 0 var(--size-1) 0;
`;

export const StyledInput= styled.input`
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

export const StyledControls: FC = styled.div`
  display: flex;
  column-gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledControl: FC = styled.div`
  flex: 1;
  min-width: 10rem;
  position: relative;
`;

export const StyledError: FC = styled.label`
  position: absolute;
  color: red;
  font-size: 14px;
`;

interface IFlexContainer {
    width?: number;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent?: 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'center' | 'start' | 'end';
    maxWidth?: number;
    flexWrap?: string;
    flexGrow?: number;
    padding?: string;
    margin?: string;
    cursor?: 'help' | 'wait' | 'crosshair' | 'pointer' | 'grab';
}

export const FlexContainer: FC<IFlexContainer> = styled.div<IFlexContainer>`
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

interface IFlexItem {
    flex?: any; // TODO check me out
    flexBasis?: string; // TODO check me out
    margin?: string;
    padding?: string;
    width?: string;
}

export const FlexItem: FC<IFlexItem> = styled.div<IFlexItem>`
  flex: ${({flex}) => flex};
  flex-basis: ${({flexBasis}) => flexBasis};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
  width: ${({width}) => width};
`;