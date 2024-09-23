// src/App.test.jsx
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { getByPlaceholderText } = render(<App />);
  expect(getByPlaceholderText(/Departure date/i)).toBeInTheDocument();
});
