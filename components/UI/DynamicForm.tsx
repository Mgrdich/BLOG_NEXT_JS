import {FC} from 'react';
import {
    StyledControls,
} from "../../styled/global";
import {inputFormProps} from "../../types/components";
import {Dict} from "../../types/global";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

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
                        <FormInput label={item.label} id={item.id} name={item.name}/>:
                        <FormTextarea label={item.label} id={item.id} name={item.name}/>
                ))
            }
        </StyledControls>
    );
};

export default DynamicForm;