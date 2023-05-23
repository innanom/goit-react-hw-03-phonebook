import React from 'react';
import { PropTypes } from 'prop-types';
import { List, ListItem, TextItem, BtnDelete } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => (
    <List>
        {contacts.map(({ name, number,id }) => (
            <ListItem key={id}>
                <TextItem>{name}: {number}</TextItem>
                <BtnDelete onClick={()=>onDeleteContact(id)}>Delete</BtnDelete>
            </ListItem>
        ))
        }
    </List>
);

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id:  PropTypes.string.isRequired
    
  }))
}

export default ContactsList;