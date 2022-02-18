import {DetailedHTMLProps, FC, TextareaHTMLAttributes} from 'react';
import {
    StyledControl,
    StyledTextArea,
    StyledLabel
} from "../../styled/global";

interface ITextArea extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    label: string;
}

const Textarea: FC<ITextArea> = ({label, ...props}) => {
    return (
        <StyledControl>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextArea/>
        </StyledControl>
    );
};

export default Textarea;