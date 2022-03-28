import { render, screen } from "@testing-library/react";
import Posts from "./Post";

// describe('posts component', () => {
//     test('render posts if request succeed', async () => {
//         render(<Posts />)
//         const listingItemElemets =  await screen.findAllByRole('listitem');
//         expect(listingItemElemets).not.toHaveLength(0)
//     })
// })

describe('post component', () => {
    test('render posts if request succeeds', async () => {
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 1, title: 'title 1'}]
        })

        render(<Posts />)

        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0)

    })
})