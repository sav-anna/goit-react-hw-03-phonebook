import PropTypes from 'prop-types';
import './ContactList.scss';
import ContactItem from '../ContactItems';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className="contactList">
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};
export default ContactList;
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func,
};
