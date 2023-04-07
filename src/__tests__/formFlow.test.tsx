import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../utils/testUtils';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../App';

test('values given in form appear on the summary page', async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ['/'],
  });
  renderWithProviders(<RouterProvider router={router} />);

  // Input name
  const nameInput = screen.getByRole('textbox', {
    name: 'Name',
  });
  expect(nameInput).toBeInTheDocument();
  fireEvent.input(nameInput, { target: { value: 'Test User' } });

  // Input email
  const emailInput = screen.getByRole('textbox', {
    name: 'Email',
  });
  expect(emailInput).toBeInTheDocument();
  fireEvent.input(emailInput, { target: { value: 'user@email.com' } });

  // Input age
  const ageInput = screen.getByRole('textbox', {
    name: 'Age',
  });
  expect(ageInput).toBeInTheDocument();
  fireEvent.input(ageInput, { target: { value: '20' } });

  // Submit
  const submitButton = screen.getByRole('button', {
    name: 'Submit',
  });
  expect(submitButton).toBeInTheDocument();
  await waitFor(() => expect(submitButton).toBeEnabled());
  fireEvent.click(submitButton);

  // Check that summary has correct values
  const thankYouMessage = await screen.findByText('Thank you!');
  expect(thankYouMessage).toBeInTheDocument();

  const nameField = await screen.findByText('Test User');
  expect(nameField).toBeInTheDocument();

  const emailField = await screen.findByText('user@email.com');
  expect(emailField).toBeInTheDocument();

  const ageField = await screen.findByText('20');
  expect(ageField).toBeInTheDocument();
});
