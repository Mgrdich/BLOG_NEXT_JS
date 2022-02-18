import FormElement from "./FormElement";
import {IFormElement} from "../../types/components";
import Textarea from "./Textarea";


interface IFormTextarea<T> extends IFormElement<T> {}

const FormTextarea = <TFormValues extends Record<string, unknown>>
({
     label,
     id,
     name
 }: IFormTextarea<TFormValues>) => {
    return (
        <FormElement label={label}>
            <Textarea id={id} name={name}/>
        </FormElement>
    );
};

export default FormTextarea;