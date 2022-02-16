import {FC, FormEvent} from 'react';
import {
    StyledControls,
    StyledControl,
    StyledInput,
    StyledTextArea,
    StyledLabel
} from "../../styled/global";

export interface inputFormProps {
    label: string,
    inputRender: 'input' | 'textarea',
    inputType: 'text' | 'email' | 'password'
    name: string,
    id: string
}

interface IDynamicForm {
    formData: inputFormProps[],
    onSubmit?: Function
}

const DynamicForm: FC<IDynamicForm> = ({formData, onSubmit}) => {

    const submitHandler = function (evt: FormEvent<HTMLFormElement>) {
        onSubmit?.(evt);
    }

    return (
        <form onSubmit={submitHandler}>
            <StyledControls>
                {
                    formData.map((item: inputFormProps) => (
                        <StyledControl key={item.id}>
                            <StyledLabel>{item.label}</StyledLabel>
                            <StyledInput type={item.inputType}
                                         id={item.id}
                            />
                        </StyledControl>
                    ))
                }
            </StyledControls>
        </form>
    );
};

export default DynamicForm;