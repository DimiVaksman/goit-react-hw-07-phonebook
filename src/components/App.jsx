import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { Container } from './Apps.styled';
import backGr from 'image/phone_035.jpg';

export const App = () => {
  return (
    <div

    >
      <Container       style={{
        backgroundImage: `url(${backGr})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '1200px 1100px',
      }}>
        <Phonebook />
        <FilterContacts />
        <Contacts />
      </Container>
    </div>
  );
};
