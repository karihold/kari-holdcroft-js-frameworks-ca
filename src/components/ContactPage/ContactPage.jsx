import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormInput from '../FormInput/FormInput';
import TextArea from '../TextArea/TextArea';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name requires a minimum of 2 characters'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name requires a minimum of 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .matches(/^[a-zA-Z\d]+[._-]?[a-zA-Z\d]+@[a-zA-Z\d]+.[a-zA-Z]+$/gm, {
      message:
        'The email must match (letters and numbers)(zero or one of the following . or - or _)(letters and numbers)@(letters and numbers).(letters) ',
      excludeEmptyString: true
    }),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message requires a minimum of 10 characters')
});

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  return (
    <main>
      <form className="contact-form" onSubmit={handleSubmit(data => data)}>
        <FormInput
          label={'First Name'}
          type={'text'}
          name={'firstName'}
          error={errors.firstName ? errors.firstName.message : ''}
          register={register}
        />
        <FormInput
          label={'Last Name'}
          type={'text'}
          name={'lastName'}
          error={errors.lastName ? errors.lastName.message : ''}
          register={register}
        />

        <FormInput
          label={'E-Mail'}
          type={'email'}
          name={'email'}
          error={errors.email ? errors.email.message : ''}
          register={register}
        />
        <TextArea
          label={'Message'}
          name={'message'}
          error={errors.message ? errors.message.message : ''}
          register={register}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
};

export default ContactPage;
