import { useDispatch } from 'react-redux';
import s from './FormikContact.module.css';
import { addContactsOper, deleteContactsOper } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import { useRef } from 'react';

export const FormikContact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactsOper(id))
      .unwrap()
      .then(({ name, number }) => {
        toast(
          <button
            onClick={
              () => dispatch(addContactsOper({ name, number })).unwrap()
              // .then(() => toast('undo delete'))
            }
          >
            undo
          </button>
        );
      });
  };

  return (
    <li className={s.contactFormik}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>

      <div className={s.buttonsAll}>
        <button
          className={s.formikLiBtn}
          onClick={() => {
            handleDelete();
          }}
        >
          delete
        </button>
        {/* <button
          onClick={() => {
            dispatch(changeContactsOper(id));
          }}
        >
          change
        </button> */}
      </div>
    </li>
  );
};
