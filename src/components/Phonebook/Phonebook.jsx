import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FcAddDatabase } from 'react-icons/fc';
import * as yup from 'yup';
import {
  Label,
  Text,
  Text2,
  Title,
  Form,
  Button,
  Box,
  Message,
} from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      return alert(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <Box>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
      >
        <Form onSubmit={handleSubmit}>
          <Label htmlFor={nanoid()}>
            <Text>Name:</Text>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={nanoid()}
              required
            />
            <Message name="name" component="div" />
          </Label>
          <Label htmlFor={nanoid()}>
            <Text2>Number:</Text2>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={nanoid()}
              required
            />
            <Message name="name" component="div" />
          </Label>

          <Button type="submit">
            add to my contacts <FcAddDatabase size="16px" />
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

Phonebook.propType = {
  onSubmit: PropTypes.func.isRequired,
};
