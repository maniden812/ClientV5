// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
// import {render, fireEvent, screen} from '@testing-library/react'
// import {render, fireEvent, screen} from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
//const profilemodule = require('../pages/profile');

import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Profile from '../pages/Profile/profile';

test('renders form properly', () => {
    const{getByTestId, getByLabelText} = render(<Profile/>);
    const nameLabel = getByText(/FullName:/i)
    const address1Label = getByText(/Address 1:/i)
    const cityLabel = getByText(/City:/i)
    const stateLabel = getByText(/State:/i)
    const zipcodeLabel = getByText(/Zipcode:/i)
    expect(nameLabel).toBeInDocument()
    expect(address1Label).toBeInDocument()
    expect(cityLabel).toBeInDocument()
    expect(stateLabel).toBeInDocument()
    expect(zipcodeLabel).toBeInDocument()

    const fninput = getByLabelText(/FullName:/i);
    expect(fninput).toHaveAttribute('type', 'text')

    const a1input = getByLabelText(/Address 1:/i);
    expect(a1input).toHaveAttribute('type', 'text')

    const cinput = getByLabelText(/City:/i);
    expect(cinput).toHaveAttribute('type', 'text')

    const sinput = getByLabelText(/State:/i);
    expect(sinput).toHaveAttribute('type', 'text')

    const zinput = getByLabelText(/Zipcode:/i);
    expect(zinput).toHaveAttribute('type', 'number')
})
test('button should be disabled for empty fullname', () => {
    const{getByLabelText, getByRole} = render(<Profile/>);

    const fninput = getByLabelText(/FullName:/i)
    fireEvent.change(fninput, {'target': {'value': ''}})
    const button = getByRole('button', {'type': 'submit'})
    expect(button).toHaveAttribute('disabled');
})


// test('check if values are empty', () => {
//     <Profile />
//     // const instance = wrapper.instance();
//     expect(true).toBe(true);
//     const [fullname, address1, address2, city, state, zipcode] = Profile(fullname, address1, address2, city, state, zipcode);

//     render(<Profile />);

    
//     expect(fullname).not.toBeNull();
//     // creat object that mimics db and check if params are empty 
//     expect(fullname).toBeLessThanOrEqual(50);

//     expect(address1).not.toBeNull();
//     expect(address1).toBeLessThanOrEqual(100);

//     expect(address2).toBeLessThanOrEqual(100);

//     expect(city).not.toBeNull();
//     expect(city).toBeLessThanOrEqual(100);

//     expect(state).not.toBeNull();

//     expect(zipcode).not.toBeNull();
//     expect(zipcode).toBeLessThanOrEqual(9);
//     expect(zipcode).toBeGreaterThanOrEqual(5);
// });