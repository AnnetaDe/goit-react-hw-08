import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectorsAuth';

export const Public = ({ children }) => {
  const isLoddedIn = useSelector(selectIsLoggedIn);
  return isLoddedIn ? <Navigate to="/contacts" /> : children;
};
