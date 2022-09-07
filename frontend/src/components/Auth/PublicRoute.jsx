import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return children;
  }

  return <Navigate to='/' />;
};

export default PublicRoute;
