import {FC, HTMLInputTypeAttribute} from 'react';
import {
    StyledControl,
    StyledInput,
    StyledLabel, StyledTextArea
} from "../../styled/global";

interface IInput {
    id: string,
    label: string,
    inputType: HTMLInputTypeAttribute | undefined
}

const Input: FC<IInput> = ({id, label, inputType}) => {
    return (
        <StyledControl key={id}>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput type={inputType ? inputType : 'text'}
                         id={id}
            />
        </StyledControl>
    );
};

export default Input;