import {FC, forwardRef} from 'react';
import {StyledTextArea} from "../../styled/global";
import {ITextArea} from "../../types/components";

const Textarea: FC<ITextArea> = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({id, name, ...props}, ref) => {
        return (
            <StyledTextArea {...props}
                            name={name}
                            id={id}
                            ref={ref}
            />
        );
    }
);

Textarea.displayName = 'Textarea';


export default Textarea;