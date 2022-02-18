import {HTMLInputTypeAttribute} from "react";

export interface inputFormProps {
    label: string,
    inputRender: 'input' | 'textarea',
    inputType?: HTMLInputTypeAttribute
    name: string,
    id: string
}

export interface IFormElement {
    label: string;
    id: string;
    name: string;
}