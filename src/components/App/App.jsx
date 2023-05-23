import React, { Component } from 'react';
import Form from '../Form/Form';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter'
import { nanoid } from 'nanoid';
import { Container, Title, TitleContacts } from './App.styled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    
  }

   componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
 
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number
    };

    if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
   
    }
    else {
          
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    }
      
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts:prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
 
 
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

     return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
      </Container>
  );
  }
 
};
