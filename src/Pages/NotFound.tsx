import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  });

  return (
    <div>
      <h1>Invalid Route..!</h1>
    </div>
  );
};

export default NotFound;
