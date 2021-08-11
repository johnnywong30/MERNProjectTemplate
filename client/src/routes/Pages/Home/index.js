import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

// Services connect to our backend server
import Mongo from '../../../services/mongo';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('called');
    dispatch(Mongo.onTest());
  }, []);

  return (
    <div>
        Hello world!
    </div>
  );
};

export default Home;
