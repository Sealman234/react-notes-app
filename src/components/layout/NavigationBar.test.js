import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  test('renders Note as a text', () => {
    // Arrange
    render(
      <Provider store={store}>
        <NavigationBar />
      </Provider>
    );

    // Act
    // ... nothing

    // Assert
    const siteNameElement = screen.getByText('Note');
    expect(siteNameElement).toBeInTheDocument();
  });
});
