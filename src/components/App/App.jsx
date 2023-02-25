// Libraries
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
// Styles
import { Section, SubTitle, Title } from './App.styled';

function App() {
  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} rtl position="top-center" />
    </Section>
  );
}

export default App;
