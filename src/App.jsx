import './App.css';
import { FormikContactForm } from './components/FormikForm/FormikForm';
import { FormikSearchBox } from './components/FormikSearchBox/FormikSearchBox';
import { FormikContactList } from './components/FormikContactList/FormikContactList';
import { formValidation } from './components/FormikForm/formValidation';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { getContactsOper } from './redux/contacts/contactsOps';
import { selectError, selectIsLoading } from './redux/contacts/selectors';
import { Loader } from './components/Loader/Loader';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Home } from './pages/Home';
import { ContactsPage } from './pages/Contacts/ContactsPage.jsx';
import { Login } from './pages/Login/Login.jsx';
import { Register } from './pages/Register/Register.jsx';
import { Privat } from './routes/Private';
import { Public } from './routes/Public.jsx';
import { refreshThunk } from './redux/auth/operationsAuth.js';
import { selectIsRefreshing } from './redux/auth/selectorsAuth.js';

// const Home = lazy(() => import('./pages/Home'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage'));
// const Login = lazy(() => import('./pages/Login'));
// const Register = lazy(() => import('./pages/Register'));

function App() {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Privat>
            <Layout />
          </Privat>
        }
      >
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>

      <Route
        path="/login"
        element={
          <Public>
            <Login />
          </Public>
        }
      />
      <Route
        path="/register"
        element={
          <Public>
            <Register />
          </Public>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
