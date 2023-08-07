import PropTypes from 'prop-types';
import {
  ContactsContainer,
  Items,
  List,
  Text,
  Spinner,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';
import { FcDeleteDatabase } from 'react-icons/fc';
import { fetchContacts, deleteContact } from 'redux/operations';

export const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts()); // діспатчимо екшен
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && <Spinner />}

      {!filteredContacts?.length && !error && !isLoading && (
        <p>No contacts found.</p>
      )}

      {error && <p>{error}</p>}

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
    </>
  );
};

Contacts.propType = {
  onDelete: PropTypes.func.isRequired,
};
