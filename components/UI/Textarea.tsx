import {FC, forwardRef, TextareaHTMLAttributes} from 'react';
import {StyledTextArea} from "../../styled/global";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
}

const Textarea: FC<ITextArea> = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({id, name, ...props}, ref) => {
        return (
            <StyledTextArea {...props}
                            id={id}
                            name={name}
                            ref={ref}
            />
        );
    }
);

Textarea.displayName = 'Textarea';


export default Textarea;