import React from 'react';
import Table from 'react-bootstrap/Table';

import './BankHolidayTable.css';

const BankHolidayTable = ({ countryHolidays }) => {
  const tableHead = (
    <thead>
      <tr>
        <th>#</th>
        <th>Holiday name</th>
        <th>Date</th>
        <th>Bunting</th>
        <th>Notes</th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {countryHolidays.map(({ bunting, date, notes, title }, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>{bunting ? 'Yes' : 'No'}</td>
            <td>{notes}</td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <Table striped bordered hover size="sm">
      {tableHead}
      {tableBody}
    </Table>
  );
};

export default BankHolidayTable;
