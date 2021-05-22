import React from 'react';
import Form from 'react-bootstrap/Form';

import './Select.css';

const Select = ({ data, handleChange }) => {
  return (
    <Form>
      <Form.Control as="select" onChange={handleChange} className="select">
        <option value="">Default select</option>
        {data.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>
    </Form>
  );
};

export default Select;
