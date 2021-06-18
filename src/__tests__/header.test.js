import { render, screen, cleanup } from '@testing-library/react';
import Header from '../components/Header';


test('should render header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header-1');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveTextContent('Air Quality in the US')
})