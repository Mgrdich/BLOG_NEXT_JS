import {FC, TextareaHTMLAttributes} from 'react';
import {
    StyledControl,
    StyledTextArea,
    StyledLabel
} from "../../styled/global";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const Textarea: FC<ITextArea> = ({label, ...props}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextArea {...props}/>
        </StyledControl>
    );
};

export default Textarea;