import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from '../App';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [] })
  })
);
test('renders App component', () => {
  render(<App />);
});
it("renders user data", async () => {
  const fakeData = {
    locationId: 66348,
    location: "Underhill Rd",
    value: 2.9
  }
  jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(fakeData) }));
  await act(async () => {
    render(<App />);
  });
  global.fetch.mockRestore();
});