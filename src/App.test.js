import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio with name and sections', () => {
    render(<App />);
    expect(screen.getAllByText(/Ghazanfar Abbas/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/MERN Stack/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Let's Work Together/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Education').length).toBeGreaterThan(0);
    expect(screen.getAllByText(/abbasghaznafar536@gmail.com/i).length).toBeGreaterThan(0);
});