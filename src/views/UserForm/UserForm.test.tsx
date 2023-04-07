import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import UserForm from './UserForm';
import { BrowserRouter } from 'react-router-dom';

test('name input exists', () => {
  renderWithProviders(
    <BrowserRouter>
      <UserForm />
    </BrowserRouter>
  );

  const nameInput = screen.getByRole('textbox', {
    name: 'Name',
  });
  expect(nameInput).toBeInTheDocument();
  fireEvent.input(nameInput, { target: { value: 'Test User' } });
  expect(nameInput).toHaveValue('Test User');
});

test('submit button is disabled if invalid email', async () => {
  renderWithProviders(
    <BrowserRouter>
      <UserForm />
    </BrowserRouter>
  );

  // Test that submit button exists & is enabled by default
  const submitButton = screen.getByRole('button', {
    name: 'Submit',
  });
  expect(submitButton).toBeInTheDocument();
  await waitFor(() => expect(submitButton).toBeEnabled());

  // Test that email field exists & is valid by default
  const emailInput = screen.getByRole('textbox', {
    name: 'Email',
  });
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toBeValid();

  // Test with an invalid value
  fireEvent.input(emailInput, { target: { value: 'user' } });
  await waitFor(() => expect(emailInput).toBeInvalid());
  await waitFor(() => expect(submitButton).toBeDisabled());

  // Test with a valid value
  fireEvent.input(emailInput, { target: { value: 'user@email.com' } });
  await waitFor(() => expect(emailInput).toBeValid());
  await waitFor(() => expect(submitButton).toBeEnabled());
});

test('submit button is disabled if invalid age', async () => {
  renderWithProviders(
    <BrowserRouter>
      <UserForm />
    </BrowserRouter>
  );

  // Test that submit button exists & is enabled by default
  const submitButton = screen.getByRole('button', {
    name: 'Submit',
  });
  expect(submitButton).toBeInTheDocument();
  await waitFor(() => expect(submitButton).toBeEnabled());

  // Test that age field exists & is valid by default
  const ageInput = screen.getByRole('textbox', {
    name: 'Age',
  });
  expect(ageInput).toBeInTheDocument();
  expect(ageInput).toBeValid();

  // Test with an invalid value
  fireEvent.input(ageInput, { target: { value: 'not a number' } });
  await waitFor(() => expect(ageInput).toBeInvalid());
  await waitFor(() => expect(submitButton).toBeDisabled());

  // Test with a valid value
  fireEvent.input(ageInput, { target: { value: '20' } });
  await waitFor(() => expect(ageInput).toBeValid());
  await waitFor(() => expect(submitButton).toBeEnabled());
});
