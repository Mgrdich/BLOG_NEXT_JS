import FormElement from "./FormElement";
import {IFormElement} from "../../types/components";
import Textarea from "./Textarea";


interface IFormTextarea<T> extends IFormElement<T> {
}

const FormTextarea = <TFormValues extends Record<string, unknown>>
({
     label,
     id,
     name,
     register,
     rules,
     errors,
 }: IFormTextarea<TFormValues>): JSX.Element => {
    return (
        <FormElement label={label}>
            <Textarea id={id}
                      name={name}
                      {...(register && register(name, rules))}
            />
        </FormElement>
    );
};

export default FormTextarea;