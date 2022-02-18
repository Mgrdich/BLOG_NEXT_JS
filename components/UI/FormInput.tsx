import FormElement from "./FormElement";
import Input from "./Input";
import {IFormElement} from "../../types/components";
import {ReactNode} from "react";

interface IFormInput<T> extends IFormElement<T> {}

const FormInput = <TFormValues extends Record<string, unknown>>
({
     label,
     id,
     name
 }: IFormInput<TFormValues>): ReactNode => {
    return (
        <FormElement label={label}>
            <Input id={id} name={name}/>
        </FormElement>
    );
};

export default FormInput;