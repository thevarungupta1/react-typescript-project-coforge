import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import World from './World';

describe('world component', () => {

    test('remder "Some Paragraph" if the button was not clicked', () => {
        render(<World />)

        const outputElement = screen.getByText('Some Paragraph', { exact: false });
        expect(outputElement).toBeInTheDocument()
    })


    test('render "changed" if the button was clicked', () => {
        // arrange
        render(<World />)

        // act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // assert
        const outputElement = screen.getByText('Changed');
        expect(outputElement).toBeInTheDocument();
    })
    

})