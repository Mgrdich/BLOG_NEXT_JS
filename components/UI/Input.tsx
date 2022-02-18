import {FC, InputHTMLAttributes} from 'react';
import {
    StyledControl,
    StyledInput,
    StyledLabel
} from "../../styled/global";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

const Input: FC<IInput> = ({id, label, ...props}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput {...props}/>
        </StyledControl>
    );
};

export default Input;