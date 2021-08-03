import { reduxForm } from 'redux-form'
import { Contact, ContactFormProps } from './ContactForm';

export const ContactForm = reduxForm<{}, ContactFormProps>({
  // a unique name for the form
  form: 'contact'
})(Contact);