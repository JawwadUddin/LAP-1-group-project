const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let main;

describe('main', () => {
    beforeEach(() => {
        // document.documentElement.innerHTML = html.toString();
        main = require('../index')
        fetch.resetMocks()
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    // describe('modal opening and closes', () => {
    //     describe('modalClose', () => {
    //         test('it removes class fadeIn', () => {
    //             main.modalClose();
    //             // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
    //             expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
    //         })
    //         test('it adds fadeOut', () => {
    //             main.modalClose();
    //             // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
    //             expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
    //         })

    //     });

    //     describe('openModal', () => {
    //         test('it adds class fadeIn', () => {
    //             main.modalClose();
    //             // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
    //             expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
    //         })
    //         test('it removes fadeOut', () => {
    //             main.modalClose();
    //             // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
    //             expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
    //         })

    //     });

    //     describe('openModal', () => {
    //         test('it adds class fadeIn', () => {
    //             main.modalClose();
    //             // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
    //             expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
    //         })
    //         test('it removes fadeOut', () => {
    //             main.modalClose();
    //             // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
    //             expect(fetch.mock.calls[0][0]).toMatch(/cats$/)
    //         })

    //     });a

    test('it makes a fetch call to the localhost:3000/journalentries', async () => {
        await main.loadingCards()
        expect(fetch).toHaveBeenCalled()
    })

//     describe('submitCat', () => {
//         test('it makes a post request to /cats with the cat data', () => {
//             const fakeSubmitEvent = {
//                 preventDefault: jest.fn(),
//                 target: {
//                     name: { value: 'Bob' },
//                     age: { value: 4 }
//                 }
//             }

//             main.submitCat(fakeSubmitEvent);
//             expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'POST');
//             expect(fetch.mock.calls[0][1]).toHaveProperty('body', JSON.stringify({ name: "Bob", age: 4 }));
//         })
//     })

//     describe('getMessage', () => {
//         test('it makes a request to /', () => {
//             main.getMessage();
//             expect(fetch).toHaveBeenCalled();
//         })
//     })
// })

// describe('render helpers', () => {
//     describe('renderMessage', () => {
//         test('it renders a received message on the page', () => {
//             main.renderMessage('testing, testing, 1 2 3');
//             expect(document.querySelector('body').textContent).toContain('testing, testing, 1 2 3')
//         })
//     })

//     describe('appendCat', () => {
//         test('it renders a new li on the page with the cat data', () => {
//             const liCount = document.querySelectorAll('li').length;
//             main.appendCat({ name: 'Testy', age: 42 });
//             const newLiCount = document.querySelectorAll('li').length;
//             expect(newLiCount).toEqual(liCount + 1)
//             expect(document.querySelector('section#cats').textContent).toContain("Testy");
//             expect(document.querySelector('section#cats').textContent).toContain(42);
//         })
//     })

})


