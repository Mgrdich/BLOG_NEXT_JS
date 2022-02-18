import {FC, ReactNode} from 'react';
import {StyledLabel, StyledControl} from "../../styled/global";

interface IFormElement {
    label: string;
    children: ReactNode
}

const FormElement: FC<IFormElement> = ({label, children}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            {children}
        </StyledControl>
    );
};

export default FormElement;