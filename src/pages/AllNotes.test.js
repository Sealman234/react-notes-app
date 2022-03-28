import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from '../store';
import AllNotes from './AllNotes';

describe('NoteList component', () => {
  test('renders notes if request succeeds', async () => {
    // Arrange
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce([{ id: 'p1', title: 'First post' }]);
    render(
      <Provider store={store}>
        <AllNotes />
      </Provider>
    );

    // Act
    // ... nothing

    // Assert
    const listItemElement = await screen.findAllByRole('listitem');
    expect(listItemElement).not.toHaveLength(0);
  });
});
