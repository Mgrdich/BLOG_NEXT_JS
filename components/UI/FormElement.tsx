import {FC, ReactNode} from 'react';
import {StyledLabel, StyledControl, StyledError} from "../../styled/global";
import {FalseyValue} from "styled-components";

interface IFormElement {
    label: string;
    children: ReactNode,
    error: {
        message: string,
        type: string,
        ref: HTMLElement
    }
}

const FormElement: FC<IFormElement> = ({label, children, error}) => {
    let msg: string = error.message;
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            {children}
            {msg?.length && <StyledError>{msg}</StyledError>}
        </StyledControl>
    );
};

export default FormElement;