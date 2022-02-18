import {FC, forwardRef, TextareaHTMLAttributes} from 'react';
import {
    StyledControl,
    StyledTextArea,
    StyledLabel
} from "../../styled/global";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

const Textarea: FC<ITextArea> = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({id, label, name, ...props}, ref) => {
        return (
            <StyledControl>
                <StyledLabel>{label}</StyledLabel>
                <StyledTextArea {...props}/>
            </StyledControl>
        );
    }
);
Textarea.displayName = 'Textarea';


export default Textarea;