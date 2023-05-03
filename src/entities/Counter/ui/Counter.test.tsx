import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render test', () => {
        renderWithTranslation(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('increment test', () => {
        renderWithTranslation(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('decrement test', () => {
        renderWithTranslation(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent(
            '9',
        );
    });
});
