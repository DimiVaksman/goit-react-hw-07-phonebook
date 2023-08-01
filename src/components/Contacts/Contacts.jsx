import PropTypes from 'prop-types';
import { ContactsContainer, Items, List, Text } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { FcDeleteDatabase } from 'react-icons/fc';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactsContainer>
      {filteredContacts.map(({ id, name, number }) => (
        <Items key={id}>
          <List>
            <Text>
              <span>{name}</span> : <span>{number}</span>
            </Text>
            <button type="button" onClick={() => onDeleteContact(id)}>
              <FcDeleteDatabase size="16px" />
            </button>
          </List>
        </Items>
      ))}
    </ContactsContainer>
  );
};

Contacts.propType = {
  onDelete: PropTypes.func.isRequired,
};
