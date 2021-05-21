import React from 'react';
import Table from 'react-bootstrap/Table';

const BankHolidayTable = ({ countryHolidays }) => {
  console.log('countryHolidays', countryHolidays);
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
          <tr>
            <td>{i}</td>
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
