import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Map from '../components/Map';


jest.mock("../components/Map", () => {
    return function DummyMap(props) {
        return (
            <div data-testid="map-1">
                {props.center}:{props.center}
            </div>
        );
    };
});

test("should render map", () => {
    render(<Map />);
    const mapElement = screen.getByTestId('map-1');
    expect(mapElement).toBeInTheDocument();
})