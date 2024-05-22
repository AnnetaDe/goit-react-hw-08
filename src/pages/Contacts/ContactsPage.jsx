import { useEffect } from 'react';
import { FormikContactList } from '../../components/FormikContactList/FormikContactList';
import { FormikContactForm } from '../../components/FormikForm/FormikForm';
import { FormikSearchBox } from '../../components/FormikSearchBox/FormikSearchBox';
import { useDispatch } from 'react-redux';
import { getContactsOper } from '../../redux/contacts/contactsOps';
export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsOper());
  }, [dispatch]);
  return (
    <div>
      Contacts
      <FormikSearchBox />
      <FormikContactForm />
      <FormikContactList />
    </div>
  );
};
