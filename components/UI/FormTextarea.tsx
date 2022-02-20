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
     ...props
 }: IFormTextarea<TFormValues>): JSX.Element => {
    const errorMessages: string | undefined = errors ? errors[name]?.message : '';
    const hasError:boolean = !!(errors && errorMessages);

    return (
        <FormElement label={label} error={hasError && errorMessages ? errorMessages : ''}>
            <Textarea id={id}
                      name={name}
                      {...props}
                      {...(register && register(name, rules))}
            />
        </FormElement>
    );
};

export default FormTextarea;