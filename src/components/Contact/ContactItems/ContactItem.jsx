import PropTypes from 'prop-types';
import './ContactItems.scss';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className="contactItem">
      {name}: {number}
      <button
        className="contactItem__btn"
        type="button"
        onClick={() => onClick(id)}
      >
        delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
