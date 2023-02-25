import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filteredContacts } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';
import { Container, Input, Label } from './Filter.styled';

function Filter({ value, onChange }) {
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
