import React from 'react';

export interface inputFormProps {
    label: string,
    inputType: 'input' | 'textarea',
    name: string,
    id?: string
}

interface IDynamicForm {
    formData: inputFormProps[]
}

const DynamicForm: React.FC<IDynamicForm> = () => {
    return (
        <>

        </>
    );
};

export default DynamicForm;