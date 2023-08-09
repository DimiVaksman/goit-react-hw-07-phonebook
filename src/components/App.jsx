import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { Container } from './Apps.styled';
import backGr from 'image/phone_035.jpg';

export const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backGr})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1000px 800px',
        backgroundPosition: 'center top',
      }}
    >
      <Container>
        <Phonebook />
        <FilterContacts />
        <Contacts />
      </Container>
    </div>
  );
};
