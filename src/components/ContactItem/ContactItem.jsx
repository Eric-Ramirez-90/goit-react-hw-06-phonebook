import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, DataConteiner, Text } from './ContactItem.styled';

function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <DataConteiner>
        <Text>{name}:</Text>
        <Text>{number}</Text>
      </DataConteiner>
      <Button onClick={onDelete}>Delete</Button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
