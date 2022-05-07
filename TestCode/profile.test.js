// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import React from 'react';
import {render, screen} from '@testing-library/react';
import AddEdit from '../components/users/AddEdit';
import user from '@testing-library/react';

describe('Profile Form', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<AddEdit onSubmit={onSubmit} />);
    });

    it('onSubmit is called when all fields pass validation', () => {
        user.type(getFullName(), 'Chetana Pitani')
        user.type(getAddress1(), '5673 ATM Rd');
        user.type(getAddress2(), 'apt90');
        user.type(getCity(), 'Austin');
        selectState('TX');
        user.type(getZipcode(), '77904');

        clickSave();

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes({
                fullname: 'Chetana Pitani',
                address1: '5673 ATM Rd',
                address2: 'apt90',
                state: 'TX',
                zipcode: '77904'
            });
        });
    });
    it('has required fields', async() => {
        clickSave();

        expect(getFullName()).toHaveErrorMessage('Full Name is required');
        expect(getAddress1()).toHaveErrorMessage('Address1 is required');
        expect(getCity()).toHaveErrorMessage('City is required');
        expect(selectState()).toHaveErrorMessage('State is required');
        expect(getZipcode()).toHaveErrorMessage('Zipcode is required');
    });
    describe('full name field', () => {
        it('shows error when full name is more than 50 characters', () => {
            user.type(getFullName(), 'chetanapitchetanapitchetanapitchetanapitchetanapitchetanapit')

            await waitFor(() => {
                expect(getFullName()).toHaveErrorMessage('Full Name must be a maximum of 50 characters')
            })
        })
    });
    describe('address1 field', () => {
        it('shows error when address1 is more than 100 characters', () => {
            user.type(getAddress1(), 'chetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapit')

            await waitFor(() => {
                expect(getAddress1()).toHaveErrorMessage('Address1 must be a maximum of 100 characters')
            })
        })
    });
    describe('address2 field', () => {
        it('shows error when address2 is more than 100 characters', () => {
            user.type(getAddress2(), 'chetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapit')

            await waitFor(() => {
                expect(getAddress2()).toHaveErrorMessage('Address2 must be a maximum of 100 characters')
            })
        })
    });
    describe('city field', () => {
        it('shows error when city is more than 100 characters', () => {
            user.type(getCity(), 'chetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapitchetanapit')

            await waitFor(() => {
                expect(getCity()).toHaveErrorMessage('City must be a maximum of 100 characters')
            })
        })
    });
    describe('zipcode field', () => {
        it('shows error when zipcode is less than 5 characters', () => {
            user.type(getZipcode(), 'che')

            await waitFor(() => {
                expect(getZipcode()).toHaveErrorMessage('Zipcode must be at least 5 characters')
            })
        });
        it('shows error when zipcode is greater than 9 characters', () => {
            user.type(getZipcode(), 'chetanapitani')

            await waitFor(() => {
                expect(getZipcode()).toHaveErrorMessage('Zipcode must be a maximum of 9 characters')
            })
        });
    });

});
function clickSave() {
    user.click(screen.getByRole('button', {name: /Save/i}));
}
function getFullName() {
    return screen.getByRole('textbox', {name: /Full Name/i});
}
function getAddress1() {
    return screen.getByRole('textbox', {name: /Address1/i});
}
function getAddress2() {
    return screen.getByRole('textbox', {name: /Address2/i});
}
function getCity() {
    return screen.getByRole('textbox', {name: /City/i});
}
function getCity() {
    return screen.getByRole('textbox', {name: /City/i});
}
function selectState() {
    const state = screen.getByRole('combobox', {name: /State/i})
    user.selectOptions(state, within(state).getByRole('option', {name: 'TX'}));
}
function getZipcode() {
    return screen.getByRole('textbox', {name: /Zipcode/i});
}
