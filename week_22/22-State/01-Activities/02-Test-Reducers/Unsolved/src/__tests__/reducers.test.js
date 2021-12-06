import { reducer } from '../utils/reducers';

import{
    UPDATE_BOOKS,
    UPDATE_CURRENT_BOOK
} from "../utils/actions";

const intialState = {
    books: [],
    currentBook: {
        _id: '1',
        title: 'Harry Potter',
        author: 'JK Rowling',
        pages: 123,
        description: " This is a description"
    }
};

test('UPDATE_BOOKS', () => {
    let newState = reducer(intialState, {
        type: UPDATE_BOOKS,
        books: [{}, {}]
    });

    expect(newState.books.length).toBe(2);
    expect(intialState.books.length).toBe(0);
});

test('UPDATE_CURRENT_BOOK', () => {
    let newState = reducer(intialState, {
        type: UPDATE_CURRENT_BOOK,
        currentBook: {title: "Eragon"}
    });

    expect(newState.currentBook.title).toBe('Eragon');
    expect(intialState.currentBook.title).toBe("Harry Potter");
})