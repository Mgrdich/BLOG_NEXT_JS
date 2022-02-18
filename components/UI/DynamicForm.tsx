import {FC} from 'react';
import {
    StyledControls,
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
                        <Input key={item.id} label={item.label}/> :
                        <Textarea key={item.id} label={item.label}/>
                ))
            }
        </StyledControls>
    );
};

export default DynamicForm;