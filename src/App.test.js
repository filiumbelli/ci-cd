import { render, screen } from '@testing-library/react';
import App from './App';

test('Testing text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Testing/i);
  expect(linkElement).toBeInTheDocument();
});
test("Testing unmount", () => {
  render(<App/>);
  const codeElement =  screen.getByText(/Edit/i);
  expect(codeElement).toBeInTheDocument();
});