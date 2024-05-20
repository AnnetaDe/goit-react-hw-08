import { useDispatch } from 'react-redux';
import s from './FormikContact.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { deleteContactsOper } from '../../redux/contactsOps';

export const FormikContact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactFormik}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button className={s.formikLiBtn} onClick={() => dispatch(deleteContactsOper(id))}>
        delete
      </button>
    </li>
  );
};
