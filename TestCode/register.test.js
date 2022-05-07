import React from 'react';
import {render, screen} from '@testing-library/react';
import user from '@testing-library/react';
import Register from '../pages/account/register';

describe('Login', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<Register onSubmit={onSubmit} />);
    }); 

    it('onSubmit is called when all fields pass validation', () => {
        user.type(getUsername(), 'Chetana');
        user.type(getPassword(), '123456');

        clickRegister();

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes({
                username: 'Chetana',
                password: '123456',
            });
        });
    })
    it('has required fields', async() => {
        clickRegister();

        expect(getUsername()).toHaveErrorMessage('Username is required');
        expect(getPassword()).toHaveErrorMessage('Password is required');
    });
    describe('password field', () => {
        it('shows error when password is less than 6 characters', () => {
            user.type(getPassword(), '1234')

            await waitFor(() => {
                expect(getPassword()).toHaveErrorMessage('Password must be at least 6 characters')
            })
        })
    });
})
function clickRegister() {
    user.click(screen.getByRole('button', {name: /Register/i}));
}
function getUsername() {
    return screen.getByRole('textbox', {name: /Username/i});
}
function getPassword() {
    return screen.getByRole('textbox', {name: /Password/i});
}
