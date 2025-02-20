import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from './Table';

const employees = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', salary: 50000, date: '2020-01-01' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', salary: 60000, date: '2020-02-01' },
  { id: 3, firstName: 'Alice', lastName: 'Johnson', email: 'alice@example.com', salary: 70000, date: '2020-03-01' },
];

test('renders table with employees', () => {
  const { getByText } = render(<Table employees={employees} handleEdit={() => {}} handleDelete={() => {}} />);
  expect(getByText('John')).toBeInTheDocument();
  expect(getByText('Jane')).toBeInTheDocument();
  expect(getByText('Alice')).toBeInTheDocument();
});

test('sorts table by first name', () => {
  const { getByText, getAllByRole } = render(<Table employees={employees} handleEdit={() => {}} handleDelete={() => {}} />);
  const firstNameHeader = getByText('First Name');
  fireEvent.click(firstNameHeader);
  const rows = getAllByRole('row');
  expect(rows[1]).toHaveTextContent('Alice');
  expect(rows[2]).toHaveTextContent('Jane');
  expect(rows[3]).toHaveTextContent('John');
});

test('sorts table by salary', () => {
  const { getByText, getAllByRole } = render(<Table employees={employees} handleEdit={() => {}} handleDelete={() => {}} />);
  const salaryHeader = getByText('Salary');
  fireEvent.click(salaryHeader);
  const rows = getAllByRole('row');
  expect(rows[1]).toHaveTextContent('John');
  expect(rows[2]).toHaveTextContent('Jane');
  expect(rows[3]).toHaveTextContent('Alice');
});
