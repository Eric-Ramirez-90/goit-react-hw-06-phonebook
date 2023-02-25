import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import Notification from '../Notification';
import ContactItem from '../ContactItem';
import { Container, Item, List } from './ContactList.styled';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};

function ContactList() {
  const contacts = useSelector(getContacts) || '';
  const filter = useSelector(getFilter);

  const filtredContact = getFilteredContacts(contacts, filter);

  return (
    <>
      {!contacts.length > 0 ? (
        <Notification message="There is no contacts" />
      ) : (
        <Container>
          <List>
            {filtredContact.map(contact => (
              <Item key={contact.id}>
                <ContactItem contact={contact} />
              </Item>
            ))}
          </List>
        </Container>
      )}
    </>
  );
}

export default ContactList;
