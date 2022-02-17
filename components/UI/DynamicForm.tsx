import {FC} from 'react';
import {
    StyledControls,
    StyledControl,
    StyledInput,
    StyledTextArea,
    StyledLabel
} from "../../styled/global";
import {inputFormProps} from "../../types/components";
import {Dict} from "../../types/global";
import Input from "./Input";
import Textarea from "./Textarea";

interface IDynamicForm {
    formData: inputFormProps[],
    state: Dict
}

const DynamicForm: FC<IDynamicForm> = ({formData}) => {
    return (
        <StyledControls>
            {
                formData.map((item: inputFormProps) => (
                    item.inputRender === 'input' ?
                        <Input id={item.id} inputType={item.inputType} label={item.label}/> :
                        <Textarea/>
                ))
            }
        </StyledControls>
    );
};

export default DynamicForm;