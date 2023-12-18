import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Playlist from './Playlist.js';

test('fills the playlist name bar with typed text', () => {
  render(
    <Playlist selectedTracks={[]} setSelectedTracks={() => {}} cumulativeResults={[]} />
  );
  const inputElement = screen.getByTestId("playlist-name");
  fireEvent.change(inputElement, {target: {value: 'my playlist name'}});
  expect(inputElement.value).toBe('my playlist name');
  cleanup();
});