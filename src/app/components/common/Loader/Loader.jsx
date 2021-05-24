import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './Loader.css';

const Loader = () => {
  return <Spinner animation="border" variant="dark" className="loader" />;
};

export default Loader;
