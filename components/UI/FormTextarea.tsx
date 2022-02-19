import FormElement from "./FormElement";
import {IFormElement, ITextArea} from "../../types/components";
import Textarea from "./Textarea";

type IFormTextarea<T> = IFormElement<T> & ITextArea & Omit<ITextArea, 'name'>;

const FormTextarea = <TFormValues extends Record<string, unknown>>
({
     label,
     id,
     name,
     register,
     rules,
     errors,
 }: IFormTextarea<TFormValues>): JSX.Element => {
    const errorMessages:string = (errors ? errors[name] : '') as string;
    const hasError:boolean = !!(errors && errorMessages);

    return (
        <FormElement label={label} error={hasError && errorMessages}>
            <Textarea id={id}
                      name={name}
                      {...(register && register(name, rules))}
            />
        </FormElement>
    );
};

export default FormTextarea;