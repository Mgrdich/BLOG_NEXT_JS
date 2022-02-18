import {FC, InputHTMLAttributes} from 'react';
import {
    StyledControl,
    StyledInput,
    StyledLabel
} from "../../styled/global";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    name: string;
}

const Input: FC<IInput> = ({id, label, name, ...props}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput {...props} name={name} id={id}/>
        </StyledControl>
    );
};

export default Input;