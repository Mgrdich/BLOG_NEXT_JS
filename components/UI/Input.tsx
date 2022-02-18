import {FC, forwardRef, InputHTMLAttributes} from 'react';
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

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
    ({id, label, name, ...props}, ref) => {
        return (
            <StyledControl>
                <StyledLabel>{label}</StyledLabel>
                <StyledInput {...props} name={name} id={id}/>
            </StyledControl>
        );
    }
);

Input.displayName = 'Input';

export default Input;