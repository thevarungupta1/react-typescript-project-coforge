// Arrange - setup the test data, test consitionas and test environment

// Act - Run the logic that shoulld be tested (ex execute function)

// Assert - compare executed result with expected result

import { render, screen } from '@testing-library/react'
import Hello from './Hello'

test('render hello world as a text', () => {
    // Arrange
    render(<Hello  />)
    // Act

    // Assert
    const helloworldElement = screen.getByText('Hello World', { exact: false })
    expect(helloworldElement).toBeInTheDocument();
})