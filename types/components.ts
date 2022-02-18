import {HTMLInputTypeAttribute, InputHTMLAttributes, TextareaHTMLAttributes} from "react";
import {UseFormRegister, Path, RegisterOptions, DeepMap, FieldError} from "react-hook-form";
import exp from "constants";

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

export interface IInputElement extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
    name: string;
}

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
}