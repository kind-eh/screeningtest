import React from 'react';
import Form from 'react-bootstrap/Form';

import './Select.css';

const Select = ({ items, onChange, defaultSelect = 'Default select' }) => {
  return (
    <Form>
      <Form.Control as="select" onChange={onChange} className="select">
        <option value="">{defaultSelect}</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>
    </Form>
  );
};

export default Select;
