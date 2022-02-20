import {FC, ReactNode} from 'react';
import {StyledLabel, StyledControl, StyledError} from "../../styled/global";

interface IFormElement {
    label: string;
    children: ReactNode,
    error: string;
}

const FormElement: FC<IFormElement> = ({label, children, error}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            {children}
            {!!(error?.length) && <StyledError>{error}</StyledError>}
        </StyledControl>
    );
};

export default FormElement;