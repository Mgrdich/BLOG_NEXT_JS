import {FC, forwardRef} from 'react';
import {
    StyledInput,
} from "../../styled/global";
import {IInputElement} from "../../types/components";

const Input: FC<IInputElement> = forwardRef<HTMLInputElement, IInputElement>(
    ({id, name, ...props}, ref) => {
        return (
                <StyledInput {...props}
                             name={name}
                             id={id}
                             ref={ref}
                />
        );
    }
);

Input.displayName = 'Input';

export default Input;