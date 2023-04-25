import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './Contact/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    this.setState({ contacts: parseContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  makeIdContact = id => {
    return (id = nanoid(10));
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: this.makeIdContact(),
      name,
      number,
    };

    // console.log(newContact);
    this.setState(({ contacts }) => {
      const includeName = contacts.find(contact => contact.name === name);
      if (includeName) {
        alert(`${name} is already in contacts.`);
      } else {
        return { contacts: [newContact, ...contacts] };
      }
    });
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    // if (this.setState({ filter: e.currentTarget.value }) === []) {
    //   alert(`You don't have saved contacts!`);
    // } else {
    //   return this.setState({ filter: e.currentTarget.value });
    // }
  };

  onDeleteContact = id => {
    const { contacts } = this.state;
    const updateContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updateContacts });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;

    return (
      <div>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.ChangeFilter} />
        <ContactList
          contacts={visibleContacts}
          onClick={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
