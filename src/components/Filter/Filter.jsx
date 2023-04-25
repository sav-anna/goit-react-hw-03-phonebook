import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './Filter.scss';

const Filter = ({ value, onChange }) => {
  const id = nanoid();
  return (
    <div className="filter">
      <h2 className="filter__title">Contacts</h2>
      <label className="filter__label">
        Find contacts by name
        <input
          className="filter__input"
          id={id}
          type="text"
          name="filter"
          placeholder="Type name"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
