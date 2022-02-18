import {FC, forwardRef} from 'react';
import {StyledTextArea} from "../../styled/global";
import {ITextArea} from "../../types/components";

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