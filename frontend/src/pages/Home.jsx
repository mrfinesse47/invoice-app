import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user]);
  const { isDark } = useSelector((state) => state.lightDark);
  return <h1>{isDark ? 'is dark' : 'is not'}</h1>;
};

export default Home;
