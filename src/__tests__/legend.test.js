import { render, screen, cleanup } from '@testing-library/react';
import Legend from '../components/Legend';

test('should render legend component', () => {
    render(<Legend />);
    const legendElement = screen.getByTestId('legend-1');
    expect(legendElement).toBeInTheDocument();
    expect(legendElement).toHaveTextContent('>= 5 µg/m³  |  < 5 µg/m³  |  ', { exact: false });
})