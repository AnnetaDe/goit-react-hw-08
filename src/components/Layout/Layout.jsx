import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';
import s from './Layout.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectorsAuth';

export const Layout = () => {
  const isLoddedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  return (
    <div className={s.layout}>
      <header>
        <h2>Auth</h2>
        <p>{userName}</p>
        <NavBar />
      </header>

      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
