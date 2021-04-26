import React from 'react';

import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

const ContactListItem = ({name, number, onClickRemove}) => {
    return (
        <li className={styles.contactListItem}>
            <p>{name}: {number}</p>
            <button type="button" className={styles.contactsListButton} onClick={onClickRemove}>Delete</button>
        </li>
    )
}

const ContactList = ({ filteredContacts, onRemove }) => {
    const result = filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} onClickRemove={() => onRemove(id)} />
    ))
    
    return (
        filteredContacts.length > 0 && (
            <ul className={styles.contactsList}>
                {result}
            </ul>
        )
    )
}


ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClickRemove: PropTypes.func.isRequired,
}

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onRemove: PropTypes.func.isRequired,
}

export default ContactList;