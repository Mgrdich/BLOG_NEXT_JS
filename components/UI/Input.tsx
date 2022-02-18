import {FC, forwardRef, InputHTMLAttributes} from 'react';
import {
    StyledInput,
} from "../../styled/global";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
}

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
    ({id, name, ...props}, ref) => {
        return (
                <StyledInput {...props} name={name} id={id}/>
        );
    }
);

Input.displayName = 'Input';

export default Input;