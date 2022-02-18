import {HTMLInputTypeAttribute} from "react";
import {UseFormRegister, Path, RegisterOptions, DeepMap, FieldError} from "react-hook-form";

export interface inputFormProps {
    label: string,
    inputRender: 'input' | 'textarea',
    inputType?: HTMLInputTypeAttribute
    name: string,
    id: string
}

export interface IFormElement<T> {
    label: string;
    id: string;
    name: Path<T>;
    register?: UseFormRegister<T>;
    rules?: RegisterOptions;
    errors?: DeepMap<T, FieldError>;
}