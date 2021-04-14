import React from 'react';
import s from './ContactList.module.css';
import ProtoTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeContact } from '../../redux/contacts-actions';

const ContactList = ({ contacts, searchedName, removeContact }) => {
  return (
    <ul className={s.contact__list}>
      {contacts
        .filter(({ name }) => {
          const findContact = name
            .toLowerCase()
            .indexOf(searchedName.toLowerCase());
          return findContact === -1 ? false : true;
        })
        .map(({ id, name, number }) => {
          return (
            <li key={id} className={s.contact__item}>
              <span className={s.contact__text}>{name}: </span>
              <span className={s.contact__text}>{number}</span>
              <button
                className={s.contact__button}
                onClick={() => removeContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  searchedName: state.contacts.filter,
});

const mapDispatchToProps = {
  removeContact: removeContact,
};

ContactList.protoTypes = {
  searchedName: ProtoTypes.shape({
    id: ProtoTypes.string.isRequired,
    name: ProtoTypes.string.isRequired,
    number: ProtoTypes.number.isRequired,
  }),
  removeContact: ProtoTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
