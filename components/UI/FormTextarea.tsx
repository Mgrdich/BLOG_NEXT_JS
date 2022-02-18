import {FC} from 'react';
import FormElement from "./FormElement";
import {IFormElement} from "../../types/components";
import Textarea from "./Textarea";


interface IFormTextarea extends IFormElement {
}

const FormTextarea: FC<IFormTextarea> = ({label, id, name}) => {
    return (
        <FormElement label={label}>
            <Textarea id={id} name={name}/>
        </FormElement>
    );
};

export default FormTextarea;