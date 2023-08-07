import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { FilterContacts } from './FilterContacts/FilterContacts';

export const App = () => {
  return (
    <div>      
      <Phonebook />
      <FilterContacts />
      <Contacts />
    </div>
  );
};
