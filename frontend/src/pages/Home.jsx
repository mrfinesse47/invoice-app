import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { isDark } = useSelector((state) => state.lightDark);
  return <h1>{isDark ? 'is dark' : 'is not'}</h1>;
};

export default Home;
