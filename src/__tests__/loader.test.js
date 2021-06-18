import { render, screen, cleanup } from '@testing-library/react';
import Loader from '../components/Loader';

test('should render loader component', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader-1');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveTextContent('Fetching Data');
})