import React from "react";
// import { render, fireEvent } from "react-testing-library";
import { Order } from '../pages/Order/Order';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

describe('Order', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<Order onSubmit={onSubmit} />);
    });
    it('onSubmit is called when all fields pass validation', () => {
        const gallons = screen.getByRole('spinbutton', {name: /gallons requested/i});
        user.type(gallons, "26");
        const dropdown= screen.getByRole('combobox', {name: /select state/i})
        user.selectOptions(dropdown, within(dropdown).getByRole('option', {name: 'TX'}));

        user.click(screen.getByRole('button', {name: /Submit/i}));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes({
                gallons: 26,
                state: 'TX',
            });
        })
    });
    it('has required fields', () => {
        expect(screen.getByText('Gallons is required')).toBeInTheDocument();
        expect(screen.getByText('State is required')).toBeInTheDocument();
    });

});
describe('gallons field', () =>{
    it('shows error if gallons is less than 0', () =>{
        const gallons = screen.getByRole('spinbutton', {name: /gallons requested/i});
        user.type(gallons, "-1");
    });
});

