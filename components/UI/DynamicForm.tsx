import {FC} from 'react';
import {
    StyledControls,
    StyledControl,
    StyledInput,
    StyledTextArea,
    StyledLabel
} from "../../styled/global";
import {inputFormProps} from "../../types/components";

interface IDynamicForm {
    formData: inputFormProps[]
}

const DynamicForm: FC<IDynamicForm> = ({formData}) => {
    return (
        <StyledControls>
            {
                formData.map((item: inputFormProps) => (
                    <StyledControl key={item.id}>
                        <StyledLabel>{item.label}</StyledLabel>
                        {
                            item.inputRender === 'input' ?
                                <StyledInput type={item.inputType} id={item.id}/> : <StyledTextArea id={item.id}/>
                        }
                    </StyledControl>
                ))
            }
        </StyledControls>
    );
};

export default DynamicForm;