export interface inputFormProps {
    label: string,
    inputRender: 'input' | 'textarea',
    inputType?: 'text' | 'email' | 'password'
    name: string,
    id: string
}