import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filteredContacts } from '../../redux/contactsSlice';
import { Container, Input, Label } from './Filter.styled';

function Filter() {
  const filter = useSelector(getFilter) || '';
  const dispatch = useDispatch();

  const changeFilter = evt => {
    const value = evt.currentTarget.value.trim();

    if (typeof value === 'string') {
      dispatch(filteredContacts(value));
    }
  };

  return (
    <Container>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={changeFilter} />
      </Label>
    </Container>
  );
}

export default Filter;
