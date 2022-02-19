import {FC, ReactNode} from 'react';
import {StyledLabel, StyledControl, StyledError} from "../../styled/global";
import {FalseyValue} from "styled-components";

interface IFormElement {
    label: string;
    children: ReactNode,
    error: string | FalseyValue
}

const FormElement: FC<IFormElement> = ({label, children, error}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            {children}
            {!!error && <StyledError>{error}</StyledError>}
        </StyledControl>
    );
};

export default FormElement;