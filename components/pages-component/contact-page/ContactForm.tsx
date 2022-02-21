import {FC, FormEvent} from 'react';
import styled from "styled-components";
import {
    FlexContainer,
    FlexItem
} from "../../../styled/global";
import {SubmitHandler, useForm} from "react-hook-form";
import FormInput from "../../UI/FormInput";
import FormTextarea from "../../UI/FormTextarea";
import {API_Response} from "../../../types/global";


const StyledContact = styled.section`
  margin: var(--size-8) auto;
  border-radius: 6px;
  background-color: var(--color-grey-100);
  width: 90%;
  max-width: 50rem;
  padding: var(--size-4);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  font-size: var(--size-6);
`;

const StyledH1 = styled.h1`
  font-size: var(--size-8);
  margin: var(--size-4) 0;
  text-align: left;
  @media (min-width: 768px) {
    font-size: var(--size-16);
    text-align: center;
  }
`;

const StyledActions = styled.div`
  margin-top: var(--size-4);
  text-align: right;
`;

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: var(--color-primary-700);
  border: 1px solid var(--color-primary-700);
  padding: var(--size-2) var(--size-4);
  border-radius: 4px;
  color: var(--color-primary-50);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--color-primary-500);
    border-color: var(--color-primary-500);
  }
`;


type ContactFormFields = {
    email: string;
    name: string;
    message: string;
}

const ContactForm: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ContactFormFields>();

    const submitHandler: SubmitHandler<ContactFormFields> = async function (data): Promise<void> {
        const res: API_Response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json());

        if (res.status) {

        }
    }

    return (
        <StyledContact>
            <StyledH1>How i can help you?</StyledH1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <FlexContainer margin="10px 0">
                    <FlexItem flexBasis="50%">
                        <FormInput<ContactFormFields>
                            label="Your mail"
                            id="email"
                            name="email"
                            type="email"
                            register={register}
                            errors={errors}
                            rules={{
                                required: 'This field is required'
                            }}
                        />
                    </FlexItem>
                    <FlexItem flexBasis="50%">
                        <FormInput<ContactFormFields>
                            label="Your Name"
                            id="name"
                            name="name"
                            type="text"
                            register={register}
                            errors={errors}
                            rules={{
                                required: 'This field is required'
                            }}
                        />
                    </FlexItem>
                </FlexContainer>
                <FormTextarea<ContactFormFields>
                    label="Your Message"
                    id="message"
                    name="message"
                    rows={5}
                    register={register}
                    errors={errors}
                    rules={{
                        required: 'This field is required'
                    }}
                />
                <StyledActions>
                    <StyledButton type="submit">Send Message</StyledButton>
                </StyledActions>
            </form>
        </StyledContact>
    );
};

export default ContactForm;