import {FC} from 'react';
import FormElement from "./FormElement";
import Input from "./Input";
import {IFormElement} from "../../types/components";

interface IFormInput extends IFormElement{

}

const FormInput: FC<IFormInput> = ({label, id, name}) => {
    return (
        <FormElement label={label}>
            <Input id={id} name={name}/>
        </FormElement>
    );
};

export default FormInput;