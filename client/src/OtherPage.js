import React from 'react';
import { Link } from 'react-router-dom';

const page = () => {
  return (
    <div>
      I'm some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default page;