import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import ToggleMode from './ToggleMode';

describe('ToggleMode component', () => {
  test('renders "Toggle Day Mode" if the dark mode is on', () => {
    // Arrange
    render(
      <Provider store={store}>
        <ToggleMode />
      </Provider>
    );

    // Act
    // ... nothing

    // Assert
    const buttonElement = screen.getByText('toggle', {
      exact: false,
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
