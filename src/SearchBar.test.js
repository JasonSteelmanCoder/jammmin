import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';

test('fills the search bar with typed text', () => {
  render(
    <SearchBar setResults={() => {}} />
  );
  const inputElement = screen.getByTestId("SearchBar");
  fireEvent.change(inputElement, {target: {value: 'my search query'}});
  expect(inputElement.value).toBe('my search query');
  cleanup();
});
