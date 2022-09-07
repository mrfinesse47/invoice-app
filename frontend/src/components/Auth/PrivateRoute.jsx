import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    if (user.status === 'Pending') {
      toast.success('Please check your email for an activation link', {
        className: 'toast-message-dark',
      });
    }
    return children;
  }

  return <Navigate to='/login' />;
};

export default PrivateRoute;
